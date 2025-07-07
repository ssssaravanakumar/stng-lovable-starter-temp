import { LovableConfig } from "@lovable/config";

export default {
  // Project metadata for Lovable.dev
  name: "React Starter Template",
  description:
    "A modern React starter template with Tailwind CSS 3, TypeScript, and stng-react component library for rapid prototyping",
  version: "1.0.0",

  // Enforce stng-react component library usage
  designSystemEnforcement: {
    enabled: true,
    strictMode: true, // Prevents creation of custom components that don't follow the design system
    autoSuggest: true, // Automatically suggests stng-react components when prompting
    componentLibrary: "stng-react", // Specify the component library to use
    componentMapping: {
      // Map common prompts to stng-react components
      button: "Button",
      "primary button": "Button variant='primary'",
      "secondary button": "Button variant='secondary'",
      "outline button": "Button variant='outline'",
      "ghost button": "Button variant='ghost'",
      card: "Card",
      input: "Input",
      "text input": "Input type='text'",
      "email input": "Input type='email'",
      "password input": "Input type='password'",
      "form input": "Input",
      textarea: "Textarea",
      checkbox: "Checkbox",
      radio: "Radio",
      select: "Select",
      dropdown: "Select",
      badge: "Badge",
      avatar: "Avatar",
      modal: "Modal",
      dialog: "Dialog",
      tooltip: "Tooltip",
      popover: "Popover",
      alert: "Alert",
      toast: "Toast",
      loading: "Spinner",
      spinner: "Spinner",
      progress: "Progress",
      slider: "Slider",
      switch: "Switch",
      toggle: "Switch",
      tabs: "Tabs",
      accordion: "Accordion",
      navigation: "Header",
      header: "Header",
      "hero section": "Hero",
      features: "Features",
      footer: "Footer",
    },
  },

  // Predefined stng-react component library that designers must use
  componentLibrary: {
    enforceUsage: true,
    source: "stng-react", // Specify the npm package
    importPath: "stng-react", // How to import components
    components: {
      // Button Component from stng-react
      Button: {
        import: "import { Button } from 'stng-react'",
        description: "Primary UI button component from stng-react",
        usage: "Use for all button interactions - supports multiple variants",
        variants: {
          primary: "variant='primary'",
          secondary: "variant='secondary'",
          outline: "variant='outline'",
          ghost: "variant='ghost'",
          destructive: "variant='destructive'",
        },
        sizes: {
          sm: "size='sm'",
          md: "size='md'",
          lg: "size='lg'",
        },
        examples: [
          "<Button variant='primary'>Get Started</Button>",
          "<Button variant='secondary'>Learn More</Button>",
          "<Button variant='outline'>View Details</Button>",
        ],
      },

      // Input Component from stng-react
      Input: {
        import: "import { Input } from 'stng-react'",
        description: "Form input component from stng-react",
        usage: "Use for all text inputs, email, password fields",
        variants: {
          default: "variant='default'",
          error: "variant='error'",
          success: "variant='success'",
        },
        examples: [
          "<Input placeholder='Enter your name' />",
          "<Input type='email' placeholder='your@email.com' />",
          "<Input type='password' placeholder='Password' />",
        ],
      },

      // Card Component from stng-react
      Card: {
        import:
          "import { Card, CardHeader, CardContent, CardFooter } from 'stng-react'",
        description: "Content container component from stng-react",
        usage: "Use for grouping related content with consistent styling",
        variants: {
          default: "variant='default'",
          elevated: "variant='elevated'",
          outlined: "variant='outlined'",
        },
        examples: [
          "<Card><CardHeader>Title</CardHeader><CardContent>Content</CardContent></Card>",
          "<Card variant='elevated'>Elevated card content</Card>",
        ],
      },

      // Additional stng-react components
      Textarea: {
        import: "import { Textarea } from 'stng-react'",
        description: "Multi-line text input from stng-react",
        usage: "Use for longer text inputs like messages, descriptions",
        examples: ["<Textarea placeholder='Enter your message' />"],
      },

      Select: {
        import: "import { Select, SelectItem } from 'stng-react'",
        description: "Dropdown selection component from stng-react",
        usage: "Use for dropdown menus and option selection",
        examples: [
          "<Select><SelectItem value='option1'>Option 1</SelectItem></Select>",
        ],
      },

      Checkbox: {
        import: "import { Checkbox } from 'stng-react'",
        description: "Checkbox input component from stng-react",
        usage: "Use for boolean selections and multiple choice options",
        examples: ["<Checkbox>Accept terms and conditions</Checkbox>"],
      },

      Radio: {
        import: "import { Radio, RadioGroup } from 'stng-react'",
        description: "Radio button component from stng-react",
        usage: "Use for single selection from multiple options",
        examples: [
          "<RadioGroup><Radio value='option1'>Option 1</Radio></RadioGroup>",
        ],
      },

      Badge: {
        import: "import { Badge } from 'stng-react'",
        description: "Small status indicator from stng-react",
        usage: "Use for status indicators, labels, counts",
        variants: {
          default: "variant='default'",
          primary: "variant='primary'",
          secondary: "variant='secondary'",
          success: "variant='success'",
          warning: "variant='warning'",
          error: "variant='error'",
        },
        examples: ["<Badge variant='success'>Active</Badge>"],
      },

      Avatar: {
        import: "import { Avatar } from 'stng-react'",
        description: "User profile image component from stng-react",
        usage: "Use for user profile pictures and placeholders",
        examples: ["<Avatar src='user.jpg' alt='User Name' />"],
      },

      Modal: {
        import:
          "import { Modal, ModalHeader, ModalContent, ModalFooter } from 'stng-react'",
        description: "Modal dialog component from stng-react",
        usage: "Use for overlays, confirmations, detailed views",
        examples: [
          "<Modal isOpen={true}><ModalContent>Modal content</ModalContent></Modal>",
        ],
      },

      Alert: {
        import: "import { Alert } from 'stng-react'",
        description: "Alert notification component from stng-react",
        usage: "Use for important messages, errors, warnings",
        variants: {
          info: "variant='info'",
          success: "variant='success'",
          warning: "variant='warning'",
          error: "variant='error'",
        },
        examples: [
          "<Alert variant='success'>Operation completed successfully</Alert>",
        ],
      },

      Spinner: {
        import: "import { Spinner } from 'stng-react'",
        description: "Loading spinner component from stng-react",
        usage: "Use for loading states and async operations",
        sizes: {
          sm: "size='sm'",
          md: "size='md'",
          lg: "size='lg'",
        },
        examples: ["<Spinner size='md' />"],
      },

      Progress: {
        import: "import { Progress } from 'stng-react'",
        description: "Progress bar component from stng-react",
        usage: "Use for showing completion progress",
        examples: ["<Progress value={75} max={100} />"],
      },

      Switch: {
        import: "import { Switch } from 'stng-react'",
        description: "Toggle switch component from stng-react",
        usage: "Use for boolean settings and preferences",
        examples: ["<Switch>Enable notifications</Switch>"],
      },

      Tabs: {
        import:
          "import { Tabs, TabsList, TabsTrigger, TabsContent } from 'stng-react'",
        description: "Tabbed interface component from stng-react",
        usage: "Use for organizing content into tabs",
        examples: [
          "<Tabs><TabsList><TabsTrigger value='tab1'>Tab 1</TabsTrigger></TabsList><TabsContent value='tab1'>Content</TabsContent></Tabs>",
        ],
      },

      Tooltip: {
        import: "import { Tooltip } from 'stng-react'",
        description: "Tooltip component from stng-react",
        usage: "Use for providing additional context on hover",
        examples: ["<Tooltip content='Helpful information'>Hover me</Tooltip>"],
      },
    },
  },

  // Design tokens that must be used
  designTokens: {
    enforceUsage: true,
    tokens: {
      // Color System (must use these exact values)
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb", // Main primary color
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        semantic: {
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          info: "#3b82f6",
        },
      },

      // Typography System (must use these exact values)
      typography: {
        fontFamily: {
          primary: ["Inter", "system-ui", "sans-serif"],
          mono: ["ui-monospace", "SFMono-Regular", "monospace"],
        },
        fontSize: {
          xs: "0.75rem", // 12px
          sm: "0.875rem", // 14px
          base: "1rem", // 16px
          lg: "1.125rem", // 18px
          xl: "1.25rem", // 20px
          "2xl": "1.5rem", // 24px
          "3xl": "1.875rem", // 30px
          "4xl": "2.25rem", // 36px
          "5xl": "3rem", // 48px
          "6xl": "3.75rem", // 60px
        },
        fontWeight: {
          light: "300",
          normal: "400",
          medium: "500",
          semibold: "600",
          bold: "700",
        },
      },

      // Spacing System (must use these exact values)
      spacing: {
        xs: "0.5rem", // 8px
        sm: "1rem", // 16px
        md: "1.5rem", // 24px
        lg: "2rem", // 32px
        xl: "3rem", // 48px
        "2xl": "4rem", // 64px
        "3xl": "6rem", // 96px
      },

      // Border Radius (must use these exact values)
      borderRadius: {
        sm: "0.25rem", // 4px
        md: "0.5rem", // 8px
        lg: "0.75rem", // 12px
        xl: "1rem", // 16px
        "2xl": "1.5rem", // 24px
        full: "9999px",
      },
    },
  },

  // Layout patterns that designers must follow
  layoutPatterns: {
    enforceUsage: true,
    patterns: {
      container: {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        description: "Standard page container with responsive padding",
        usage: "Wrap all page content in this container",
      },
      section: {
        className: "py-20 bg-white",
        description: "Standard section spacing with background",
        usage: "Use for main content sections on pages",
      },
      "grid-responsive": {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        description: "Responsive grid that adapts to screen size",
        usage: "Use for feature grids, card layouts, content lists",
      },
      "flex-center": {
        className: "flex items-center justify-center",
        description: "Flexbox centering utility",
        usage: "Use to center content both horizontally and vertically",
      },
      "flex-between": {
        className: "flex justify-between items-center",
        description: "Flexbox space-between utility",
        usage: "Use for navigation bars, header layouts",
      },
    },
  },

  // AI prompt guidance for stng-react components
  promptGuidance: {
    enabled: true,
    componentLibrary: "stng-react",
    suggestions: {
      "create a button":
        "Use Button component from stng-react with variant prop for styling",
      "add a card": "Use Card component from stng-react for content grouping",
      "make a form":
        "Use Input, Textarea, Select, Checkbox components from stng-react",
      "add input field":
        "Use Input component from stng-react with proper type and variant",
      "create dropdown": "Use Select component from stng-react",
      "add modal": "Use Modal component from stng-react",
      "show alert":
        "Use Alert component from stng-react with appropriate variant",
      "add loading": "Use Spinner component from stng-react",
      "create tabs": "Use Tabs component from stng-react",
      "add badge":
        "Use Badge component from stng-react with variant for status",
      "show progress": "Use Progress component from stng-react",
    },
    restrictions: [
      "NEVER create custom button elements - ALWAYS use Button component from stng-react",
      "NEVER create custom input styling - ALWAYS use Input component from stng-react",
      "NEVER create custom cards - ALWAYS use Card component from stng-react",
      "NEVER create custom modals - ALWAYS use Modal component from stng-react",
      "NEVER create custom form elements - ALWAYS use stng-react form components",
      "NEVER use HTML button, input, select, textarea - ALWAYS use stng-react components",
      "ALWAYS import components from 'stng-react' package",
      "ALWAYS use stng-react component variants instead of custom styling",
      "NEVER apply custom Tailwind classes to stng-react components - use their built-in variants",
    ],
    autoImports: [
      "import { Button } from 'stng-react'",
      "import { Input } from 'stng-react'",
      "import { Card } from 'stng-react'",
      "import { Select } from 'stng-react'",
      "import { Checkbox } from 'stng-react'",
      "import { Badge } from 'stng-react'",
      "import { Avatar } from 'stng-react'",
      "import { Modal } from 'stng-react'",
      "import { Alert } from 'stng-react'",
      "import { Spinner } from 'stng-react'",
    ],
  },

  // Development settings
  development: {
    hotReload: true,
    typescript: true,
    linting: true,
    formatting: true,
  },

  // Build configuration
  build: {
    outputDir: "dist",
    bundleAnalyzer: false,
    sourceMaps: true,
    minify: true,
  },

  // Deployment settings
  deployment: {
    platform: "vercel", // or 'netlify', 'github-pages'
    environment: {
      development: {
        apiUrl: "http://localhost:3000/api",
      },
      production: {
        apiUrl: "https://api.yourapp.com",
      },
    },
  },

  // Template metadata for the repository
  template: {
    category: "starter",
    tags: [
      "react",
      "typescript",
      "tailwindcss",
      "vite",
      "responsive",
      "modern",
    ],
    license: "MIT",
    repository: "https://github.com/your-org/lovable-react-starter",
    author: {
      name: "Your Team",
      email: "team@yourcompany.com",
    },
    documentation: {
      readme: "./README.md",
      components: "./docs/components.md",
      designSystem: "./docs/design-system.md",
    },
  },

  // Team collaboration settings
  team: {
    designSystemCompliance: {
      required: true,
      validation: "strict", // Validates that only predefined components are used
      reporting: true, // Generates reports on design system usage
    },

    // Shared component patterns
    patterns: {
      naming: "PascalCase",
      fileStructure: "feature-based",
      imports: "absolute-paths",
    },

    // Code standards
    standards: {
      eslint: true,
      prettier: true,
      husky: true,
      commitlint: true,
    },
  },
} satisfies LovableConfig;
