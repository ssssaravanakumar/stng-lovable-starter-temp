# Designer Guide for Lovable.dev with stng-react

## 🎨 stng-react Component Library Enforcement

This template is configured to **automatically enforce** the use of the **stng-react** component library when working with Lovable.dev. This ensures all prototypes use your standardized components for consistency across the team.

## 🚫 What NOT to Do

When prompting Lovable.dev, **avoid** these requests that create custom components:

- ❌ "Create a custom button with blue background"
- ❌ "Make a div with button styling"
- ❌ "Add an HTML input field"
- ❌ "Create a custom card component"
- ❌ "Build a modal from scratch"
- ❌ "Style a button with Tailwind classes"

## ✅ What TO Do Instead

Use these **approved prompts** that will automatically use **stng-react** components:

### Buttons (from stng-react)

- ✅ "Add a button" → Uses `<Button>` from stng-react
- ✅ "Add a primary button" → Uses `<Button variant='primary'>`
- ✅ "Add a secondary button" → Uses `<Button variant='secondary'>`
- ✅ "Add an outline button" → Uses `<Button variant='outline'>`
- ✅ "Add a ghost button" → Uses `<Button variant='ghost'>`

### Form Components (from stng-react)

- ✅ "Add a text input" → Uses `<Input>` from stng-react
- ✅ "Add an email field" → Uses `<Input type='email'>`
- ✅ "Add a password input" → Uses `<Input type='password'>`
- ✅ "Add a textarea" → Uses `<Textarea>` from stng-react
- ✅ "Add a dropdown" → Uses `<Select>` from stng-react
- ✅ "Add a checkbox" → Uses `<Checkbox>` from stng-react
- ✅ "Add radio buttons" → Uses `<Radio>` from stng-react

### Layout Components (from stng-react)

- ✅ "Add a card" → Uses `<Card>` from stng-react
- ✅ "Add an elevated card" → Uses `<Card variant='elevated'>`
- ✅ "Create a modal" → Uses `<Modal>` from stng-react
- ✅ "Add an alert" → Uses `<Alert>` from stng-react
- ✅ "Show loading spinner" → Uses `<Spinner>` from stng-react

### Interactive Components (from stng-react)

- ✅ "Add tabs" → Uses `<Tabs>` from stng-react
- ✅ "Add a progress bar" → Uses `<Progress>` from stng-react
- ✅ "Add a toggle switch" → Uses `<Switch>` from stng-react
- ✅ "Add a badge" → Uses `<Badge>` from stng-react
- ✅ "Add an avatar" → Uses `<Avatar>` from stng-react
- ✅ "Add a tooltip" → Uses `<Tooltip>` from stng-react

## 🎯 Smart Prompting Examples with stng-react

### For a Contact Form:

```
"Create a contact form with:
- Name input field
- Email input field
- Message textarea
- Submit button"
```

**Result**: Automatically uses `Input`, `Textarea`, and `Button` from stng-react

### For a User Dashboard:

```
"Create a dashboard with:
- User avatar
- Status badge
- Action buttons
- Progress indicator"
```

**Result**: Uses `Avatar`, `Badge`, `Button`, and `Progress` from stng-react

### For a Product Card:

```
"Create a product card with:
- Product image
- Title and description
- Price badge
- Add to cart button"
```

**Result**: Uses `Card`, `Badge`, and `Button` from stng-react

### For a Settings Panel:

```
"Create a settings panel with:
- Toggle switches for preferences
- Input fields for configuration
- Save and cancel buttons"
```

**Result**: Uses `Switch`, `Input`, and `Button` components from stng-react

## 📚 Available stng-react Components

When Lovable.dev generates code, it will automatically use these components:

### Form Components

- **Button** - `<Button variant='primary|secondary|outline|ghost|destructive'>`
- **Input** - `<Input type='text|email|password' variant='default|error|success'>`
- **Textarea** - `<Textarea placeholder='Enter text'>`
- **Select** - `<Select><SelectItem value='option'>Option</SelectItem></Select>`
- **Checkbox** - `<Checkbox>Label text</Checkbox>`
- **Radio** - `<RadioGroup><Radio value='option'>Option</Radio></RadioGroup>`
- **Switch** - `<Switch>Toggle label</Switch>`

### Display Components

- **Card** - `<Card variant='default|elevated|outlined'>`
- **Badge** - `<Badge variant='default|primary|secondary|success|warning|error'>`
- **Avatar** - `<Avatar src='image.jpg' alt='User Name'>`
- **Alert** - `<Alert variant='info|success|warning|error'>`

### Feedback Components

- **Spinner** - `<Spinner size='sm|md|lg'>`
- **Progress** - `<Progress value={75} max={100}>`
- **Tooltip** - `<Tooltip content='Help text'>Hover me</Tooltip>`

### Layout Components

- **Modal** - `<Modal><ModalContent>Content</ModalContent></Modal>`
- **Tabs** - `<Tabs><TabsList><TabsTrigger>Tab</TabsTrigger></TabsList></Tabs>`

## 🔄 Component Modification

If you need to modify stng-react components, use these approaches:

### Changing Variants:

```
"Make the button primary style" → variant='primary'
"Make the card elevated" → variant='elevated'
"Show a success alert" → variant='success'
"Make the badge show warning" → variant='warning'
```

### Changing Sizes:

```
"Make the button large" → size='lg'
"Make the spinner small" → size='sm'
"Make the avatar bigger" → size='lg'
```

### Adding Content:

```
"Button should say 'Get Started Now'"
"Alert should show 'Profile updated successfully'"
"Badge should display 'New'"
"Card should contain user information"
```

## 🚀 Quick Start Templates with stng-react

### **Landing Page**:

```
"Create a landing page with:
- Hero section with title and primary button
- Features section with cards
- Call-to-action with button"
```

### **User Profile Page**:

```
"Create a user profile with:
- User avatar
- Profile information cards
- Edit profile button
- Status badges"
```

### **Contact Form**:

```
"Create a contact form with:
- Name input
- Email input
- Message textarea
- Submit button
- Success alert"
```

### **Dashboard**:

```
"Create a dashboard with:
- Stats cards
- Progress indicators
- Action buttons
- User avatar in header"
```

## 📋 Component Import Examples

When Lovable.dev generates code, it will automatically add these imports:

```tsx
import { Button } from "stng-react";
import { Input, Textarea } from "stng-react";
import { Card, CardHeader, CardContent } from "stng-react";
import { Select, SelectItem } from "stng-react";
import { Modal, ModalContent } from "stng-react";
import { Alert } from "stng-react";
import { Badge } from "stng-react";
import { Avatar } from "stng-react";
import { Spinner } from "stng-react";
import { Switch } from "stng-react";
```

## 🆘 Need Help?

If Lovable.dev suggests creating custom components instead of using stng-react:

1. **Stop** and refer to this guide
2. **Rephrase** your prompt using stng-react component names
3. **Ask team lead** if you need a component not available in stng-react

## 📝 Prompt Templates for stng-react

Copy and use these templates:

### Basic Form:

```
"Create a [form type] form using Input, Textarea, Select, and Button components from stng-react"
```

### Card Layout:

```
"Create a [content type] using Card component from stng-react with [description]"
```

### Interactive Elements:

```
"Add [component type] from stng-react with [variant] style and [size] size"
```

### Modal Dialog:

```
"Create a Modal from stng-react containing [content description] with confirm and cancel buttons"
```

## ✅ Benefits of Using stng-react

By following these guidelines, you get:

- ✅ **Consistency** - All prototypes use the same standardized components
- ✅ **Quality** - Professional, tested components from your library
- ✅ **Speed** - No need to design custom components from scratch
- ✅ **Maintenance** - Easy to update across all projects
- ✅ **Brand Compliance** - Components follow your design standards
- ✅ **Developer Handoff** - Developers know exactly which components to use

Remember: The goal is to use **stng-react** components exclusively for consistent, high-quality prototypes!
