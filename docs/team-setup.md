# Team Setup Guide

## Quick Start for Team Members

### 1. Clone and Setup

```bash
git clone <repository-url>
cd lovable-react-starter
npm install
npm run dev
```

### 2. Development Workflow

- **Branch naming**: `feature/component-name` or `fix/issue-description`
- **Commit format**: Use conventional commits (`feat:`, `fix:`, `docs:`, etc.)
- **Code review**: All changes require PR review before merging

### 3. Using the Design System

#### Import and use pre-built components:

```tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
```

#### Follow the established patterns:

```tsx
// Use design system classes
<button className="btn-primary">Action</button>
<div className="card">Content</div>

// Responsive containers
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Your content */}
</div>
```

### 4. Creating New Components

#### File Structure

```
src/components/
├── YourComponent.tsx
├── forms/
│   ├── Input.tsx
│   └── Button.tsx
└── layout/
    ├── Sidebar.tsx
    └── Navigation.tsx
```

#### Component Template

```tsx
interface YourComponentProps {
  // Define your props with TypeScript
}

const YourComponent: React.FC<YourComponentProps> = (props) => {
  return <div className="card">{/* Use design system classes */}</div>;
};

export default YourComponent;
```

### 5. Customizing for Your Project

#### Update branding in components:

- `Header.tsx` - Update logo and navigation
- `Hero.tsx` - Update hero content and CTAs
- `Footer.tsx` - Update company info and links

#### Modify colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your brand colors
    500: '#your-brand-color',
    600: '#your-brand-color-dark',
  }
}
```

#### Update `lovable.config.ts` with your project details:

```typescript
{
  name: 'Your Project Name',
  description: 'Your project description',
  template: {
    repository: 'https://github.com/your-org/your-repo',
    author: {
      name: 'Your Team Name',
      email: 'team@yourcompany.com',
    }
  }
}
```

### 6. Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code quality

### 7. Deployment

The template is configured for easy deployment to:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**

See `lovable.config.ts` deployment settings for configuration.

### 8. Best Practices

- Always use TypeScript for new components
- Follow the established design system tokens
- Test responsive behavior on multiple screen sizes
- Use semantic HTML for accessibility
- Keep components focused and reusable

### 9. Getting Help

- Check `/docs/design-system.md` for design tokens
- Check `/docs/components.md` for component examples
- Review existing components for patterns
- Ask team lead for design system questions
