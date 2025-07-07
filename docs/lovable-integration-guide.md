# How to Use This Repository with Lovable.dev

## 🚀 Overview

This repository serves as a **starter template** for Lovable.dev projects that automatically enforces the use of your **stng-react** component library. When you use this template with Lovable.dev, it ensures all generated code follows your design system standards.

## 📋 Prerequisites

Before using this template with Lovable.dev, ensure you have:

- Access to [Lovable.dev](https://lovable.dev)
- Your **stng-react** component library published and accessible
- Basic understanding of React and TypeScript

## 🎯 Integration Methods

### Method 1: Use as GitHub Template (Recommended)

#### Step 1: Create Template Repository

1. **Make this repository public** (if not already)
2. **Enable "Template repository"** in GitHub settings:
   - Go to Settings → General
   - Check "Template repository"
   - Save changes

#### Step 2: Use Template in Lovable.dev

1. **Open Lovable.dev** in your browser
2. **Create new project** from template:
   - Select "Import from GitHub Template"
   - Choose this repository: `your-org/lovable-react-starter`
   - Lovable.dev will automatically clone and set up the project

#### Step 3: Verify Setup

Lovable.dev will automatically:

- ✅ Install dependencies (including `stng-react`)
- ✅ Load the `lovable.config.ts` configuration
- ✅ Enable stng-react component enforcement
- ✅ Start the development server

### Method 2: Clone and Import

#### Step 1: Clone Repository

```bash
git clone https://github.com/your-org/lovable-react-starter.git my-project
cd my-project
npm install
```

#### Step 2: Import to Lovable.dev

1. **Open Lovable.dev**
2. **Select "Import Existing Project"**
3. **Upload the project folder** or connect via GitHub
4. Lovable.dev will detect the configuration automatically

### Method 3: Fork and Customize

#### Step 1: Fork Repository

1. **Fork this repository** to your organization
2. **Customize the configuration**:
   - Update `lovable.config.ts` with your specific settings
   - Modify `package.json` metadata
   - Update documentation with your branding

#### Step 2: Use Your Fork

Follow Method 1 or 2 using your forked repository

## 🛠️ Configuration Verification

After importing to Lovable.dev, verify the setup:

### 1. Check Component Library Installation

```bash
npm list stng-react
```

Should show: `stng-react@x.x.x`

### 2. Verify Lovable Configuration

Lovable.dev should automatically load `lovable.config.ts` and show:

- ✅ Component library: `stng-react`
- ✅ Design system enforcement: `enabled`
- ✅ Auto-suggestions: `active`

### 3. Test Component Enforcement

Try prompting in Lovable.dev:

```
"Add a button"
```

**Expected result**: Generates `<Button>` from stng-react, not HTML `<button>`

## 💬 Using with Lovable.dev AI

### Recommended Prompts for Best Results

#### Creating Pages

```
"Create a landing page with navigation, hero section, and features"
```

**Result**: Uses `Header`, `Hero`, and `Features` components + stng-react components

#### Adding Forms

```
"Create a contact form with name, email, message fields and submit button"
```

**Result**: Uses `Input`, `Textarea`, and `Button` from stng-react

#### Building Components

```
"Add a user profile card with avatar, name, status badge, and action buttons"
```

**Result**: Uses `Card`, `Avatar`, `Badge`, and `Button` from stng-react

#### Interactive Elements

```
"Add a settings panel with toggle switches and save button"
```

**Result**: Uses `Switch` and `Button` from stng-react

### What NOT to Ask

❌ "Create a custom blue button"
❌ "Make a div that looks like a card"
❌ "Add HTML input fields"
❌ "Style with custom CSS"

## 🎨 Customizing for Your Projects

### 1. Update Project Metadata

Edit `lovable.config.ts`:

```typescript
export default {
  name: "Your Project Name",
  description: "Your project description",
  // ...existing configuration...
  template: {
    repository: "https://github.com/your-org/your-repo",
    author: {
      name: "Your Team Name",
      email: "team@yourcompany.com",
    },
  },
};
```

### 2. Customize Color Palette

Update `tailwind.config.js`:

```javascript
module.exports = {
  // ...existing code...
  theme: {
    extend: {
      colors: {
        primary: {
          // Your brand colors here
          500: "#your-primary-color",
          600: "#your-primary-color-dark",
        },
      },
    },
  },
};
```

### 3. Add Project-Specific Components

Create new components in `src/components/` that use stng-react:

```typescript
import { Card, Button } from "stng-react";

const ProjectSpecificComponent = () => {
  return (
    <Card>
      {/* Your content */}
      <Button variant="primary">Action</Button>
    </Card>
  );
};
```

## 🔄 Workflow with Lovable.dev

### 1. Design Phase

1. **Open Lovable.dev** with your project
2. **Describe your feature** in natural language
3. **Lovable.dev generates code** using stng-react components automatically
4. **Review and refine** the generated components

### 2. Development Phase

1. **Generated code** is already compliant with stng-react
2. **No manual component replacement** needed
3. **Ready for development** team handoff

### 3. Quality Assurance

Run validation before deployment:

```bash
npm run validate-design-system
```

### 4. Deployment

```bash
npm run build
npm run preview  # Test production build
```

## 🚨 Troubleshooting

### Issue: Lovable.dev Not Using stng-react Components

**Solution**:

1. Check if `lovable.config.ts` is in project root
2. Verify `stng-react` is installed: `npm list stng-react`
3. Restart Lovable.dev project

### Issue: Custom HTML Elements Generated

**Solution**:

1. Be more specific in prompts: "Add a Button component" instead of "add a button"
2. Check the designer guide: `docs/lovable-designer-guide.md`
3. Use approved prompt templates

### Issue: Import Errors

**Solution**:

1. Ensure stng-react is properly installed
2. Check if imports are correctly formatted in generated code
3. Run `npm install` to refresh dependencies

## 📚 Resources

### Documentation

- **[Designer Guide](./docs/lovable-designer-guide.md)** - How to prompt Lovable.dev effectively
- **[Component Reference](./docs/components.md)** - Available stng-react components
- **[Design System](./docs/design-system.md)** - Design tokens and guidelines

### Commands

- `npm run dev` - Start development server
- `npm run validate-design-system` - Check stng-react compliance
- `npm run build` - Build for production

### Support

- Check the [team setup guide](./docs/team-setup.md) for common questions
- Review [stng-react documentation](https://your-stng-react-docs.com)
- Contact your team lead for design system questions

## 🎯 Expected Benefits

Using this template with Lovable.dev provides:

✅ **Automatic Compliance** - All generated code uses stng-react
✅ **Faster Prototyping** - No manual component replacement needed
✅ **Design Consistency** - Every prototype follows your standards
✅ **Team Alignment** - Everyone uses the same components
✅ **Quality Assurance** - Built-in validation and best practices

## 🔄 Updating the Template

To keep your template current:

1. **Pull latest changes** from this repository
2. **Update stng-react** version in package.json
3. **Sync new components** in lovable.config.ts
4. **Test with Lovable.dev** to ensure compatibility

---

**Ready to start building with consistent, high-quality components using Lovable.dev!** 🚀
