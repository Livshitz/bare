# CSS Framework Principles

## Core Architecture

Our CSS framework is built on a layered architecture with three primary types of components:

1. **Atoms**: Fundamental layout building blocks
2. **Primitives**: Styled UI elements that use atoms
3. **Patterns**: Specific layout structures that use atoms and primitives

This separation creates a clear hierarchy that makes our code more maintainable, consistent, and easier to understand.

## Atoms

### Principles

- **Single Responsibility**: Each atom should handle one aspect of layout (horizontal, vertical, spacing, etc.)
- **Context-Independence**: Atoms should work in any context and not be tied to specific UI elements
- **No Specific Measurements**: Atoms should not include specific dimensions like pixel values
- **Composable**: Atoms should be easily combined to create more complex layouts
- **Fundamental Only**: Only create atoms for truly fundamental, commonly reused layout patterns

### Examples

- `row`: Horizontal layout using flexbox
- `col`: Vertical layout using flexbox  
- `stack`: Vertical layout with consistent spacing
- `grid`: Grid-based layout system
- `spacer`: Spacing utilities

## Primitives

### Principles

- **Use Atoms for Layout**: Primitives should use atoms for their internal layout structure
- **Styling Ownership**: Primitives own their visual styling (colors, borders, shadows, etc.)
- **Self-Contained**: Primitives should be usable standalone with minimal configuration
- **Variant Support**: Primitives can include size/color/state variants
- **Element-Specific**: Each primitive corresponds to a specific UI element type
- **May Include Specific Measurements**: Primitives can have appropriate measurements for their specific element type

### Examples

- `button`: Button elements with variants
- `input`: Form input elements
- `badge`: Badge indicators
- `block`: Content blocks
- `section`: Page sections

## Patterns

### Principles

- **Context-Specific**: Patterns are designed for specific layout contexts
- **Combine Atoms and Primitives**: Patterns use atoms for layout and primitives for UI elements
- **Can Include Specific Measurements**: Patterns can have specific heights, widths, etc.
- **Can Include Use-Case Logic**: Patterns can have functionality specific to their context
- **Responsive by Default**: Patterns should handle different screen sizes appropriately
- **Minimal Direct Utilities**: Limit direct Tailwind utility use to only what's necessary

### Examples

- `layout-header`: Page header with specific height
- `layout-sidebar`: Sidebar navigation with specific width
- `layout-main`: Main content area

## Utility Usage Guidelines

### When to Use Atoms vs. Tailwind Utilities

- **Use Atoms When**:
  - Creating basic layout structure
  - Handling spacing between elements
  - Setting up common alignment patterns
  - Building common flexbox or grid patterns

- **Use Tailwind Utilities When**:
  - Setting specific measurements for patterns
  - Applying visual styling (colors, borders, shadows)
  - Making one-off adjustments or overrides
  - Applying responsive variants to existing styles
  - Adding specific positioning that's not part of a reusable pattern

### Examples

```html
<!-- Good: Using atoms for layout -->
<div class="row">
  <div class="col">Left content</div>
  <div class="col">Right content</div>
</div>

<!-- Good: Using Tailwind utilities for specific styling -->
<div class="row t-bg-blue-100 t-border t-border-blue-300 t-rounded-lg t-shadow-md">
  <div class="col">Left content</div>
  <div class="col">Right content</div>
</div>

<!-- Bad: Using Tailwind utilities for layout -->
<div class="t-flex t-items-center t-justify-between t-gap-4">
  <div class="t-flex t-flex-col">Left content</div>
  <div class="t-flex t-flex-col">Right content</div>
</div>
```

## Pattern Composition Guidelines

1. **Start with atoms** for the basic layout structure
2. **Add primitives** for styled UI elements
3. **Apply pattern classes** for specific layout context
4. **Add Tailwind utilities** only as needed for specific measurements or styling
5. **Keep a clear separation** between layout (atoms), UI elements (primitives), and use cases (patterns)

## Benefits of This Approach

- **Consistency**: Common layout patterns are standardized
- **Maintainability**: Clear separation of concerns makes code easier to maintain
- **Efficiency**: Reusing atoms and primitives reduces CSS size
- **Understanding**: Clear architecture makes the system easier to learn
- **LLM-Friendly**: The structured, semantic approach works well with AI code generation 