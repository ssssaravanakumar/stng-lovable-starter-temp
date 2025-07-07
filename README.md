# Lovable.dev React Starter Template

A modern, production-ready React starter template built specifically for [Lovable.dev](https://lovable.dev) projects. This template **automatically enforces** the use of your **stng-react** component library to ensure consistency across all team prototypes.

## 🎯 Quick Start with Lovable.dev

### For New Projects:

1. **Use as GitHub Template** in Lovable.dev
2. **Import this repository** as a template
3. **Start prompting** - all components will automatically use stng-react

### For Existing Projects:

See the **[Complete Integration Guide](./docs/lovable-integration-guide.md)** for detailed setup instructions.

## 🚀 Key Features

- ⚡ **Automatic stng-react Enforcement** - All Lovable.dev prompts use your component library
- 🎨 **Design System Compliance** - Prevents custom components outside your standards
- 📱 **Fully Responsive** - Mobile-first design with your stng-react components
- 🔷 **TypeScript Ready** - Full type safety with stng-react integration
- 🤖 **AI-Guided Prompts** - Smart suggestions for using stng-react components
- ✨ **Zero Training Required** - Designers prompt naturally, get consistent results

## 🎯 Design System Enforcement

This template is configured with **strict design system enforcement** for Lovable.dev:

### ✅ Automatic Component Mapping

When designers prompt Lovable.dev, requests are automatically mapped to predefined components:

- **"Add a button"** → Uses `btn-primary`
- **"Create a card"** → Uses `card` component
- **"Add navigation"** → Uses `Header` component
- **"Make a form"** → Uses `input-default` styling

### 🚫 Prevents Custom Components

The configuration **prevents** designers from creating:

- Custom button styles
- Arbitrary colors outside the palette
- Custom spacing values
- Non-standard typography
- Inconsistent layout patterns

### 🤖 AI Prompt Guidance

Built-in prompt suggestions guide designers to use approved patterns:

- Smart suggestions for common requests
- Automatic restrictions on forbidden patterns
- Clear guidance on component usage

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for incredibly fast development and build times
- 🎨 **Enforced Design System** - Automatic compliance with predefined components and tokens
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- 🔷 **TypeScript Ready** - Full TypeScript support with proper type definitions
- 🧱 **Component Library** - Pre-built components with multiple variants
- ❤️ **Lovable.dev Optimized** - Perfect structure and AI prompt guidance
- ✨ **Team Consistency** - Ensures all designers follow the same patterns

## 🛠️ Tech Stack

- **React 18** - Latest React with concurrent features
- **TypeScript** - Type safety and better developer experience
- **Vite** - Next generation frontend tooling
- **Tailwind CSS 3** - Utility-first CSS framework with enforced tokens
- **Design System Validation** - Automated compliance checking

## 📋 For Designers Using Lovable.dev

### 🎯 Quick Start Prompts

Use these prompts for instant, compliant results:

```
"Create a landing page with navigation, hero section, features grid, and footer"
"Add a primary button and secondary button"
"Create a contact form with name, email, and message fields"
"Add a features section with 6 benefit cards"
```

### 📚 Designer Resources

- **[Designer Guide](./docs/lovable-designer-guide.md)** - Complete prompting guide for Lovable.dev
- **[Component Library](./docs/components.md)** - All available components and usage
- **[Design Tokens](./docs/design-system.md)** - Colors, typography, and spacing

## 🏗️ Project Structure

```
├── src/
│   ├── components/          # Predefined UI components
│   │   ├── Header.tsx      # Navigation with mobile menu
│   │   ├── Hero.tsx        # Landing page hero section
│   │   ├── Features.tsx    # Feature showcase grid
│   │   └── Footer.tsx      # Site footer with links
│   └── ...
├── docs/                   # Design system documentation
│   ├── lovable-designer-guide.md  # Lovable.dev usage guide
│   ├── design-system.md           # Design tokens and guidelines
│   └── components.md              # Component usage examples
├── lovable.config.ts      # Lovable.dev enforcement configuration
└── scripts/
    └── validate-design-system.js  # Compliance validation
```

## 🚀 Getting Started

### For Developers:

```bash
npm install
npm run dev
```

### For Designers:

1. Read the [Designer Guide](./docs/lovable-designer-guide.md)
2. Use approved prompts with Lovable.dev
3. All components will automatically follow the design system

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run validate-design-system` - Check design system compliance
- `npm run pre-commit` - Run validation and linting before commits

## 🎨 Design System Components

### Buttons (Auto-enforced)

- `btn-primary` - Main call-to-action buttons
- `btn-secondary` - Supporting action buttons
- `btn-outline` - Less prominent actions
- `btn-ghost` - Minimal styling for tertiary actions

### Cards (Auto-enforced)

- `card` - Standard content container
- `card-elevated` - Enhanced shadow for emphasis
- `card-flat` - Minimal styling for subtle separation

### Layout (Auto-enforced)

- `Header` - Responsive navigation component
- `Hero` - Landing page hero with gradient
- `Features` - Feature showcase grid
- `Footer` - Comprehensive site footer

## 🔧 Team Benefits

### For Designers:

- ✅ **No design system knowledge required** - AI guides you automatically
- ✅ **Faster prototyping** - No need to create custom components
- ✅ **Consistent results** - All prototypes follow the same patterns
- ✅ **Mobile-ready** - All components are responsive by default

### For Developers:

- ✅ **Predictable code** - All prototypes use the same components
- ✅ **Easy maintenance** - Single source of truth for styling
- ✅ **Quality assurance** - Automated validation prevents inconsistencies
- ✅ **Fast implementation** - Pre-built components ready to use

### For Teams:

- ✅ **Design consistency** - Unified experience across all projects
- ✅ **Reduced design debt** - No custom components to maintain
- ✅ **Faster handoffs** - Developers know exactly what to expect
- ✅ **Scalable workflow** - Same patterns work for any project size

## 🚨 Validation & Compliance

The template includes automated validation to ensure design system compliance:

```bash
npm run validate-design-system
```

This script checks for:

- Use of approved component classes
- Proper color palette usage
- Correct spacing token implementation
- Avoidance of custom styling patterns

## 📦 Deployment

Ready for deployment to:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Run `npm run validate-design-system` to ensure compliance
4. Commit your changes following conventional commits
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Useful Links

- **[Lovable.dev](https://lovable.dev)** - AI-powered web development platform
- **[Designer Guide](./docs/lovable-designer-guide.md)** - Complete Lovable.dev usage guide
- **[React Documentation](https://react.dev)**
- **[Tailwind CSS](https://tailwindcss.com)**
- **[Vite](https://vitejs.dev)**

---

**Built with ❤️ for consistent, rapid prototyping with Lovable.dev**
