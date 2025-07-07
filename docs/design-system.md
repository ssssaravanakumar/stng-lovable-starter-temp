# Design System Documentation

## Overview

This design system provides a comprehensive set of design tokens, components, and guidelines for building consistent user interfaces across all Lovable.dev projects.

## Color System

### Primary Colors

```css
primary-50:  #eff6ff
primary-100: #dbeafe
primary-200: #bfdbfe
primary-300: #93c5fd
primary-400: #60a5fa
primary-500: #3b82f6  /* Base primary color */
primary-600: #2563eb
primary-700: #1d4ed8
primary-800: #1e40af
primary-900: #1e3a8a
```

### Gray Scale

```css
gray-50:  #f9fafb
gray-100: #f3f4f6
gray-200: #e5e7eb
gray-300: #d1d5db
gray-400: #9ca3af
gray-500: #6b7280
gray-600: #4b5563
gray-700: #374151
gray-800: #1f2937
gray-900: #111827
```

### Semantic Colors

- **Success**: #10b981 (green-500)
- **Warning**: #f59e0b (amber-500)
- **Error**: #ef4444 (red-500)
- **Info**: #3b82f6 (blue-500)

## Typography

### Font Families

- **Primary**: Inter, system-ui, sans-serif
- **Monospace**: ui-monospace, SFMono-Regular, monospace

### Font Sizes

```css
text-xs:   0.75rem (12px)
text-sm:   0.875rem (14px)
text-base: 1rem (16px)
text-lg:   1.125rem (18px)
text-xl:   1.25rem (20px)
text-2xl:  1.5rem (24px)
text-3xl:  1.875rem (30px)
text-4xl:  2.25rem (36px)
text-5xl:  3rem (48px)
text-6xl:  3.75rem (60px)
```

### Font Weights

- **Light**: 300
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Spacing System

```css
xs:  0.5rem (8px)
sm:  1rem (16px)
md:  1.5rem (24px)
lg:  2rem (32px)
xl:  3rem (48px)
2xl: 4rem (64px)
3xl: 6rem (96px)
```

## Layout

### Container Widths

```css
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
7xl: 1792px
```

### Breakpoints

```css
sm:  640px and up
md:  768px and up
lg:  1024px and up
xl:  1280px and up
2xl: 1536px and up
```

## Shadows

```css
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
```

## Border Radius

```css
rounded-sm:  0.25rem (4px)
rounded-md:  0.5rem (8px)
rounded-lg:  0.75rem (12px)
rounded-xl:  1rem (16px)
rounded-2xl: 1.5rem (24px)
rounded-full: 9999px
```

## Usage Guidelines

### Consistency

- Always use design tokens instead of hardcoded values
- Maintain consistent spacing between elements
- Use the established color palette

### Accessibility

- Ensure sufficient color contrast (minimum 4.5:1 for normal text)
- Use semantic colors appropriately
- Test with screen readers

### Responsive Design

- Mobile-first approach
- Use established breakpoints
- Test across all device sizes

### Performance

- Optimize for bundle size
- Use CSS-in-JS sparingly
- Leverage Tailwind's purging capabilities
