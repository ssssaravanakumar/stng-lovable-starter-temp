#!/usr/bin/env node

/**
 * stng-react Component Library Validation Script
 * Validates that components use stng-react library instead of custom implementations
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// stng-react component validation rules
const stngReactComponents = [
  "Button",
  "Input",
  "Textarea",
  "Select",
  "SelectItem",
  "Checkbox",
  "Radio",
  "RadioGroup",
  "Card",
  "CardHeader",
  "CardContent",
  "CardFooter",
  "Badge",
  "Avatar",
  "Modal",
  "ModalHeader",
  "ModalContent",
  "ModalFooter",
  "Alert",
  "Spinner",
  "Progress",
  "Switch",
  "Tabs",
  "TabsList",
  "TabsTrigger",
  "TabsContent",
  "Tooltip",
];

// Forbidden patterns that indicate non-stng-react usage
const forbiddenPatterns = [
  /<button[^>]*>/g, // HTML button elements
  /<input[^>]*>/g, // HTML input elements
  /<textarea[^>]*>/g, // HTML textarea elements
  /<select[^>]*>/g, // HTML select elements
  /className="[^"]*btn-[^"]*"/g, // Custom button classes
  /style={{[^}]*}}/g, // Inline styles
  /<div[^>]*className="[^"]*card[^"]*"/g, // Custom card divs
];

// Required imports for stng-react
const requiredImportPattern = /import\s+{[^}]*}\s+from\s+['"]stng-react['"]/g;

function validateFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const issues = [];

  // Check for forbidden HTML elements that should use stng-react
  forbiddenPatterns.forEach((pattern, index) => {
    const matches = content.match(pattern);
    if (matches) {
      matches.forEach((match) => {
        let suggestion = "";
        if (match.includes("<button")) {
          suggestion = "Use <Button> from stng-react instead of HTML button";
        } else if (match.includes("<input")) {
          suggestion = "Use <Input> from stng-react instead of HTML input";
        } else if (match.includes("<textarea")) {
          suggestion =
            "Use <Textarea> from stng-react instead of HTML textarea";
        } else if (match.includes("<select")) {
          suggestion = "Use <Select> from stng-react instead of HTML select";
        } else if (match.includes("btn-")) {
          suggestion =
            "Use <Button> component from stng-react with variant prop";
        } else if (match.includes("card")) {
          suggestion =
            "Use <Card> component from stng-react instead of custom div";
        } else {
          suggestion =
            "Use stng-react components instead of custom implementations";
        }

        issues.push({
          type: "forbidden_html",
          message: `Forbidden HTML/custom element found: ${match.substring(
            0,
            50
          )}...`,
          suggestion: suggestion,
        });
      });
    }
  });

  // Check if file uses stng-react components but missing imports
  const hasStngComponents = stngReactComponents.some(
    (component) =>
      content.includes(`<${component}`) || content.includes(`<${component} `)
  );

  const hasStngImport = requiredImportPattern.test(content);

  if (hasStngComponents && !hasStngImport) {
    issues.push({
      type: "missing_import",
      message: "File uses stng-react components but missing import statement",
      suggestion: "Add: import { Button, Input, Card, ... } from 'stng-react'",
    });
  }

  // Check for proper stng-react component usage
  const componentUsagePattern = /<(\w+)(?:\s+[^>]*)?\s*\/?>/g;
  let match;
  while ((match = componentUsagePattern.exec(content)) !== null) {
    const componentName = match[1];

    // If it's a known stng-react component name but not imported properly
    if (stngReactComponents.includes(componentName) && !hasStngImport) {
      issues.push({
        type: "component_import_missing",
        message: `Using ${componentName} but missing stng-react import`,
        suggestion: `Import ${componentName} from 'stng-react'`,
      });
    }
  }

  return issues;
}

function validateProject() {
  console.log("🔍 Validating stng-react component library compliance...\n");

  const srcDir = path.join(__dirname, "..", "src");
  let totalIssues = 0;
  let filesChecked = 0;
  let stngReactUsage = 0;

  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith(".tsx") || file.endsWith(".jsx")) {
        filesChecked++;
        const issues = validateFile(filePath);

        // Check if file uses stng-react components
        const content = fs.readFileSync(filePath, "utf8");
        const hasStngImport = requiredImportPattern.test(content);
        if (hasStngImport) {
          stngReactUsage++;
        }

        if (issues.length > 0) {
          console.log(
            `❌ ${path.relative(path.join(__dirname, ".."), filePath)}:`
          );
          issues.forEach((issue) => {
            console.log(`   • ${issue.message}`);
            console.log(`     💡 ${issue.suggestion}`);
          });
          console.log("");
          totalIssues += issues.length;
        } else {
          console.log(
            `✅ ${path.relative(
              path.join(__dirname, ".."),
              filePath
            )} - Compliant with stng-react`
          );
        }
      }
    });
  }

  if (fs.existsSync(srcDir)) {
    scanDirectory(srcDir);
  } else {
    console.log("❌ src directory not found");
    process.exit(1);
  }

  console.log("\n📊 stng-react Compliance Summary:");
  console.log(`Files checked: ${filesChecked}`);
  console.log(`Files using stng-react: ${stngReactUsage}`);
  console.log(`Total issues: ${totalIssues}`);
  console.log(
    `Compliance rate: ${Math.round((stngReactUsage / filesChecked) * 100)}%`
  );

  if (totalIssues === 0) {
    console.log("🎉 All files comply with stng-react component library!");
    console.log(
      "🏆 Your team is maintaining perfect design system consistency!"
    );
    process.exit(0);
  } else {
    console.log(
      "\n⚠️  Please fix the issues above to ensure stng-react compliance."
    );
    console.log(
      "📚 Refer to docs/lovable-designer-guide.md for approved stng-react patterns."
    );
    console.log("🔧 Replace HTML elements with stng-react components.");
    process.exit(1);
  }
}

// Run validation
validateProject();
