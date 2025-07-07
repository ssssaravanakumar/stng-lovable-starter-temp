# Component Library Documentation

## Overview

This component library provides pre-built, reusable components that follow our design system principles. All components are built with TypeScript and Tailwind CSS.

## Button Component

### Variants

```tsx
// Primary button (default)
<button className="btn-primary">Get Started</button>

// Secondary button
<button className="btn-secondary">Learn More</button>

// Outline button
<button className="border border-primary-600 text-primary-600 hover:bg-primary-50 py-2 px-4 rounded-lg transition-colors duration-200">
  Outline Button
</button>

// Ghost button
<button className="text-primary-600 hover:bg-primary-50 py-2 px-4 rounded-lg transition-colors duration-200">
  Ghost Button
</button>
```

### Sizes

```tsx
// Small
<button className="btn-primary py-1 px-2 text-sm">Small</button>

// Medium (default)
<button className="btn-primary py-2 px-4 text-base">Medium</button>

// Large
<button className="btn-primary py-3 px-6 text-lg">Large</button>
```

## Card Component

### Variants

```tsx
// Default card
<div className="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>

// Elevated card
<div className="card shadow-lg">
  <h3>Elevated Card</h3>
  <p>Card with enhanced shadow.</p>
</div>

// Bordered card
<div className="card border-2">
  <h3>Bordered Card</h3>
  <p>Card with prominent border.</p>
</div>

// Flat card
<div className="bg-white p-6 rounded-xl">
  <h3>Flat Card</h3>
  <p>Minimal card without shadow.</p>
</div>
```

## Input Component

### Basic Input

```tsx
<input
  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
  type="text"
  placeholder="Enter text..."
/>
```

### Error State

```tsx
<input
  className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
  type="text"
  placeholder="Error state..."
/>
```

## Layout Components

### Header

```tsx
import Header from "./components/Header";

// Responsive header with navigation and mobile menu
<Header />;
```

Features:

- Responsive navigation
- Mobile hamburger menu
- Brand logo/title
- Call-to-action button

### Hero Section

```tsx
import Hero from "./components/Hero";

// Landing page hero with gradient background
<Hero />;
```

Features:

- Gradient background
- Large typography
- Call-to-action buttons
- Placeholder for hero image/content

### Features Grid

```tsx
import Features from "./components/Features";

// Feature showcase in responsive grid
<Features />;
```

Features:

- Responsive grid layout
- Icon + title + description format
- Hover effects
- Customizable feature items

### Footer

```tsx
import Footer from "./components/Footer";

// Comprehensive footer with links and branding
<Footer />;
```

Features:

- Multi-column layout
- Social media links
- Quick navigation links
- Brand information

## Component Patterns

### Container Pattern

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{/* Content */}</div>
```

### Section Pattern

```tsx
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

### Grid Pattern

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Grid items */}
</div>
```

## Responsive Design Patterns

### Mobile-First Classes

```tsx
// Mobile first, then tablet, then desktop
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

// Hide on mobile, show on tablet+
<div className="hidden md:block">
  Desktop content
</div>

// Show on mobile, hide on tablet+
<div className="block md:hidden">
  Mobile content
</div>
```

### Flexbox Patterns

```tsx
// Center content
<div className="flex items-center justify-center">
  Centered content
</div>

// Space between items
<div className="flex justify-between items-center">
  <div>Left</div>
  <div>Right</div>
</div>

// Responsive flex direction
<div className="flex flex-col md:flex-row gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Customization Guidelines

### Extending Components

When creating new components, follow these patterns:

1. **Use TypeScript interfaces** for props
2. **Apply consistent naming** (PascalCase for components)
3. **Use design system tokens** from lovable.config.ts
4. **Include responsive behavior** by default
5. **Add hover/focus states** for interactive elements

### Example Component Template

```tsx
interface CustomComponentProps {
  title: string;
  variant?: "default" | "highlighted";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CustomComponent: React.FC<CustomComponentProps> = ({
  title,
  variant = "default",
  size = "md",
  className = "",
}) => {
  const baseClasses = "transition-colors duration-200";
  const variantClasses = {
    default: "bg-white text-gray-900",
    highlighted: "bg-primary-600 text-white",
  };
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {title}
    </div>
  );
};

export default CustomComponent;
```

## Best Practices

1. **Consistency**: Use the established design tokens
2. **Accessibility**: Include proper ARIA labels and keyboard navigation
3. **Performance**: Leverage Tailwind's purging for optimal bundle size
4. **Maintainability**: Keep components focused and single-responsibility
5. **Documentation**: Document any custom props or behavior
