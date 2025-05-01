# x-css Layout Utilities Documentation

## Reset Classes

- `x-reset`: Base layout reset with box model, positioning, and text handling
- `x-container`: Full-width container with auto margins
- `x-inline`: Inline display with reset properties
- `x-inline-block`: Inline-block display with reset properties
- `x-block`: Block display with full width
- `x-hidden`: Hide element with no visibility or interaction
- `x-visible`: Show element with full visibility and interaction
- `x-overflow-hidden`: Hide overflow content
- `x-overflow-auto`: Show scrollbars when needed
- `x-overflow-scroll`: Always show scrollbars
- `x-relative`: Relative positioning
- `x-absolute`: Absolute positioning
- `x-fixed`: Fixed positioning
- `x-sticky`: Sticky positioning

## Direction Classes

- `x-rtl`: Right-to-left text direction
- `x-ltr`: Left-to-right text direction
- `x-direction-auto`: Automatic text direction
- `x-margin-start`: Margin at start (left in LTR, right in RTL)
- `x-margin-end`: Margin at end (right in LTR, left in RTL)
- `x-padding-start`: Padding at start (left in LTR, right in RTL)
- `x-padding-end`: Padding at end (right in LTR, left in RTL)
- `x-border-start`: Border at start (left in LTR, right in RTL)
- `x-border-end`: Border at end (right in LTR, left in RTL)
- `x-start`: Position at start (left in LTR, right in RTL)
- `x-end`: Position at end (right in LTR, left in RTL)
- `x-float-start`: Float to start (left in LTR, right in RTL)
- `x-float-end`: Float to end (right in LTR, left in RTL)
- `x-text-start`: Align text to start (left in LTR, right in RTL)
- `x-text-end`: Align text to end (right in LTR, left in RTL)
- `x-justify-start`: Justify content to start (left in LTR, right in RTL)
- `x-justify-end`: Justify content to end (right in LTR, left in RTL)
- `x-grid-start`: Align grid item to start (left in LTR, right in RTL)
- `x-grid-end`: Align grid item to end (right in LTR, left in RTL)

## Animation Classes

- `x-transition-layout`: Base transition for layout properties
- `x-animate-width`: Animate width changes
- `x-animate-height`: Animate height changes
- `x-animate-size`: Animate both width and height changes
- `x-collapse`: Collapse element to zero height
- `x-expand`: Expand element to full height
- `x-scale`: Scale transform with transition
- `x-scale-up`: Scale up transform (1.2x)
- `x-scale-down`: Scale down transform (0.9x)
- `x-slide-in`: Slide in from left
- `x-slide-out`: Slide out to left
- `x-flex-grow`: Animate flex grow
- `x-flex-shrink`: Animate flex shrink
- `x-grid-grow`: Animate grid growth
- `x-z-index-transition`: Smooth z-index transitions

## Flexbox Classes

- `x-flex`: Flex container
- `x-flex-col`: Vertical flex direction
- `x-row`: Horizontal flex direction with wrapping enabled by default
- `x-wrap`: Allow flex items to wrap
- `x-nowrap`: Prevent flex items from wrapping
- `x-justify-between`: Space between flex items
- `x-justify-center`: Center flex items horizontally
- `x-align-center`: Center flex items vertically
- `x-gap-md`: Medium gap between flex items
- `x-gap-sm`: Small gap between flex items
- `x-gap-lg`: Large gap between flex items
- `x-reverse`: Row reverse direction
- `x-reverse-col`: Column reverse direction
- `x-justify-start`: Align items to start
- `x-justify-end`: Align items to end
- `x-justify-around`: Space around flex items
- `x-justify-evenly`: Space evenly between items
- `x-items-start`: Align items to start vertically
- `x-items-end`: Align items to end vertically
- `x-items-stretch`: Stretch items vertically
- `x-start-self`: Self-align to start
- `x-center-self`: Self-align to center
- `x-end-self`: Self-align to end
- `x-stretch-self`: Self-align to stretch
- `x-center-row`: Combined center row utility
- `x-center-col`: Combined center column utility
- `x-inline-flex`: Inline flex display

### Responsive Flex Utilities

- `x-col-xs`: Column direction on extra small screens (max-width: 599px)
- `x-row-xs`: Row direction on extra small screens (max-width: 599px)
- `x-reverse-xs`: Row reverse on extra small screens (max-width: 599px)
- `x-reverse-col-xs`: Column reverse on extra small screens (max-width: 599px)
- `x-reverse-gt-xs`: Row reverse on screens larger than extra small (min-width: 600px)

## Grid Classes

- `x-grid`: Grid container
- `x-grid-cols-3`: Three column grid
- `x-col-span-2`: Span two columns
- `x-gap-md`: Medium gap between grid items

## Responsive Classes

- `x-hide-sm`: Hide on small screens
- `x-show-sm`: Show on small screens
- `x-text-big`: Large text on larger screens
- `x-text-small`: Small text on smaller screens

## Spacing Classes

### Margin Utilities

- `x-m-0`: Zero margin on all sides
- `x-m-xs`, `x-m-sm`, `x-m-md`, `x-m-lg`, `x-m-xl`, `x-m-2xl`: Margin on all sides with different sizes
- `x-my-0`: Zero margin top and bottom
- `x-mx-0`: Zero margin left and right
- `x-mt-0`: Zero margin top
- `x-mb-0`: Zero margin bottom
- `x-ml-0`: Zero margin left
- `x-mr-0`: Zero margin right
- `x-m-auto`: Auto margin left and right
- `x-mx-auto`: Auto margin left and right
- `x-my-auto`: Auto margin top and bottom
- `x-center`: Center element horizontally with auto margins
- `x-centered`: Center element horizontally with auto margins on left and right

### Margin Size Variants

- `x-mt-xs`, `x-mt-sm`, `x-mt-md`, `x-mt-lg`, `x-mt-xl`, `x-mt-2xl`: Top margin sizes
- `x-mb-xs`, `x-mb-sm`, `x-mb-md`, `x-mb-lg`, `x-mb-xl`, `x-mb-2xl`: Bottom margin sizes
- `x-ml-xs`, `x-ml-sm`, `x-ml-md`, `x-ml-lg`, `x-ml-xl`, `x-ml-2xl`: Left margin sizes
- `x-mr-xs`, `x-mr-sm`, `x-mr-md`, `x-mr-lg`, `x-mr-xl`, `x-mr-2xl`: Right margin sizes
- `x-my-xs`, `x-my-sm`, `x-my-md`, `x-my-lg`, `x-my-xl`, `x-my-2xl`: Vertical margin sizes (top and bottom)
- `x-mx-xs`, `x-mx-sm`, `x-mx-md`, `x-mx-lg`, `x-mx-xl`, `x-mx-2xl`: Horizontal margin sizes (left and right)

### Padding Utilities

- `x-p-0`: Zero padding on all sides
- `x-p-xs`, `x-p-sm`, `x-p-md`, `x-p-lg`, `x-p-xl`, `x-p-2xl`: Padding on all sides with different sizes
- `x-py-0`: Zero padding top and bottom
- `x-px-0`: Zero padding left and right
- `x-pt-0`: Zero padding top
- `x-pb-0`: Zero padding bottom
- `x-pl-0`: Zero padding left
- `x-pr-0`: Zero padding right
- `x-px-auto`: Auto padding left and right
- `x-py-auto`: Auto padding top and bottom

### Padding Size Variants

- `x-pt-xs`, `x-pt-sm`, `x-pt-md`, `x-pt-lg`, `x-pt-xl`, `x-pt-2xl`: Top padding sizes
- `x-pb-xs`, `x-pb-sm`, `x-pb-md`, `x-pb-lg`, `x-pb-xl`, `x-pb-2xl`: Bottom padding sizes
- `x-pl-xs`, `x-pl-sm`, `x-pl-md`, `x-pl-lg`, `x-pl-xl`, `x-pl-2xl`: Left padding sizes
- `x-pr-xs`, `x-pr-sm`, `x-pr-md`, `x-pr-lg`, `x-pr-xl`, `x-pr-2xl`: Right padding sizes
- `x-py-xs`, `x-py-sm`, `x-py-md`, `x-py-lg`, `x-py-xl`, `x-py-2xl`: Vertical padding sizes (top and bottom)
- `x-px-xs`, `x-px-sm`, `x-px-md`, `x-px-lg`, `x-px-xl`, `x-px-2xl`: Horizontal padding sizes (left and right)

### Gap Utilities

- `x-gap`: Default gap (8px) for flex/grid layouts
- `x-gap-xs`, `x-gap-sm`, `x-gap-md`, `x-gap-lg`, `x-gap-xl`, `x-gap-2xl`: Gap sizes for flex/grid layouts

## Width Classes

- `x-w-0`: Width 0
- `x-w-25`: Width 25%
- `x-w-33`: Width 33.33%
- `x-w-50`: Width 50%
- `x-w-66`: Width 66.67%
- `x-w-75`: Width 75%
- `x-w-100`: Width 100%
- `x-w-full`: Width 100%
- `x-w-auto`: Width auto
- `x-w-screen`: Width 100vw
- `x-w-xs`: Width 2rem (32px)
- `x-w-sm`: Width 3rem (48px)
- `x-w-md`: Width 4rem (64px)
- `x-w-lg`: Width 6rem (96px)
- `x-w-xl`: Width 8rem (128px)
- `x-w-2xl`: Width 12rem (192px)
- `x-min-w-0`: Min-width 0
- `x-min-w-full`: Min-width 100%
- `x-min-w-screen`: Min-width 100vw
- `x-max-w-0`: Max-width 0
- `x-max-w-full`: Max-width 100%
- `x-max-w-screen`: Max-width 100vw

## Height Classes

- `x-h-0`: Height 0
- `x-h-25`: Height 25%
- `x-h-33`: Height 33.33%
- `x-h-50`: Height 50%
- `x-h-66`: Height 66.67%
- `x-h-75`: Height 75%
- `x-h-100`: Height 100%
- `x-h-full`: Height 100%
- `x-h-auto`: Height auto
- `x-h-screen`: Height 100vh
- `x-h-xs`: Height 2rem (32px)
- `x-h-sm`: Height 3rem (48px)
- `x-h-md`: Height 4rem (64px)
- `x-h-lg`: Height 6rem (96px)
- `x-h-xl`: Height 8rem (128px)
- `x-h-2xl`: Height 12rem (192px)
- `x-min-h-0`: Min-height 0
- `x-min-h-full`: Min-height 100%
- `x-min-h-screen`: Min-height 100vh
- `x-max-h-0`: Max-height 0
- `x-max-h-full`: Max-height 100%
- `x-max-h-screen`: Max-height 100vh

### Size Scale

- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `2xl`: 3rem (48px)

## Text Classes

- `x-text-xs`: Extra small text (12px)
- `x-text-sm`: Small text (14px)
- `x-text-md`: Medium text (16px)
- `x-text-lg`: Large text (19px)
- `x-text-xl`: Extra large text (23px)
- `x-text-2xl`: Double extra large text (28px)
- `x-text-3xl`: Triple extra large text (33px)
- `x-text-4xl`: Quadruple extra large text (40px)
- `x-text-xs-xs`: Extra small text on larger screens, small text on extra small screens
- `x-text-sm-xs`: Small text on larger screens, medium text on extra small screens
- `x-text-md-xs`: Medium text on larger screens, large text on extra small screens
- `x-text-lg-xs`: Large text on larger screens, extra large text on extra small screens
- `x-text-xl-xs`: Extra large text on larger screens, double extra large text on extra small screens
- `x-text-2xl-xs`: Double extra large text on larger screens, triple extra large text on extra small screens
- `x-thin`: Thin font weight (100)
- `x-light`: Light font weight (200)
- `x-normal`: Normal font weight
- `x-medium`: Medium font weight (500)
- `x-semibold`: Semi-bold font weight (600)
- `x-bold`: Bold font weight
- `x-black`: Black font weight (900)
- `x-italic`: Italic text style
- `x-underline`: Underlined text
- `x-underline-dashed`: Dashed underline
- `x-uppercase`: Uppercase text transform
- `x-lowercase`: Lowercase text transform
- `x-tracking-wide`: Wide letter spacing
- `x-capitalize`: Capitalized text transform
- `x-text-center`: Center-aligned text
- `x-text-left`: Left-aligned text
- `x-text-right`: Right-aligned text
- `x-text-justify`: Justified text
- `x-break-words`: Break words when needed
- `x-break-all`: Break all words
- `x-text-shadow`: Text shadow effect
- `x-text-shadow-sm`: Small text shadow
- `x-truncate`: Truncate text with ellipsis
- `x-superscript`: Superscript text
- `x-subscript`: Subscript text
- `x-text-outline`: Text outline effect

## Border Classes

- `x-border`: Solid border
- `x-border-dashed`: Dashed border
- `x-border-white`: White border
- `x-rounded-none`: No border radius
- `x-border-wire`: Wire-like dashed border
- `x-border-t`: Top border only
- `x-border-r`: Right border only
- `x-border-b`: Bottom border only
- `x-border-l`: Left border only
- `x-rounded`: Medium border radius
- `x-rounded-sm`: Small border radius
- `x-rounded-lg`: Large border radius
- `x-rounded-xl`: Extra large border radius
- `x-rounded-full`: Full border radius
- `x-rounded-t`: Rounded top corners
- `x-rounded-b`: Rounded bottom corners
- `x-rounded-l`: Rounded left corners
- `x-rounded-r`: Rounded right corners
- `x-rounded-tl`: Rounded top-left corner
- `x-rounded-tr`: Rounded top-right corner
- `x-rounded-bl`: Rounded bottom-left corner
- `x-rounded-br`: Rounded bottom-right corner

### Border Colors

- `x-border-slate`, `x-border-gray`, `x-border-zinc`, `x-border-neutral`, `x-border-stone`: Grayscale border colors
- `x-border-red`, `x-border-orange`, `x-border-amber`, `x-border-yellow`, `x-border-lime`: Warm border colors
- `x-border-green`, `x-border-emerald`, `x-border-teal`, `x-border-cyan`: Cool border colors
- `x-border-sky`, `x-border-blue`, `x-border-indigo`, `x-border-violet`: Blue border colors
- `x-border-purple`, `x-border-fuchsia`, `x-border-pink`, `x-border-rose`: Purple border colors
- `x-border-white`, `x-border-black`: Base border colors

## Effects Classes

- `x-shadow`: Default shadow
- `x-shadow-lg`: Large shadow
- `x-shadow-none`: No shadow
- `x-shadow-card`: Card-specific shadow (0px 4px 6px 0px rgba(0, 0, 0, 0.09))
- `x-shadow-hover`: Shadow with hover effect
- `x-bg-base`: Base background color
- `x-bg-gradient`: Gradient background
- `x-bg-gradient-gray`: Gray gradient background
- `x-bg-pattern`: Pattern background
- `x-opacity-0`: Zero opacity
- `x-blur`: Blur effect
- `x-blur-text`: Blurred text effect

## Interaction Classes

- `x-pointer`: Pointer cursor
- `x-drag-handle`: Drag handle with grab cursor

## Typography Utilities

- `x-prose`: Applies sensible defaults for styling blocks of text content, like rendered Markdown.

## Component Classes

- `x-glass`: Glass effect with blur
- `x-card`: Card component with shadow
- `x-badge`: Badge component
- `x-avatar`: Avatar component
- `x-tooltip`: Tooltip component
- `x-divider`: Divider component
- `x-sep`: Horizontal separator (same as x-sep-h)
- `x-sep-h`: Horizontal separator
- `x-sep-v`: Vertical separator
- `x-skeleton`: Skeleton loading effect
- `x-loader`: Spinning loader animation
- `x-loader-sm`: Small spinning loader
- `x-loader-md`: Medium spinning loader
- `x-loader-lg`: Large spinning loader
- `x-loader-pulse`: Pulsing loader animation
- `x-loader-dots`: Three dots loader animation
- `x-btn`: Button component with various modifiers

### Button Component

- `x-btn`: Base button with default styling (includes border and hover states)
- `x-btn-sm`: Small button variant
- `x-btn-lg`: Large button variant
- `x-btn-primary`: Primary button style (dark background, light text)
- `x-btn-secondary`: Secondary button style (light background with border)
- `x-btn-ghost`: Ghost button style (transparent background)
- `x-btn-block`: Full-width button
- `x-btn-icon`: Square button for icons (1:1 aspect ratio)

#### Button States

Buttons automatically handle various states:

- Default: Light background with subtle border
- Hover: Slightly darker background with enhanced border
- Focus: Visual ring indicator for keyboard navigation
- Disabled: Reduced opacity and 'not-allowed' cursor
- Active: Slight depression effect when clicked

#### Button Usage Examples

```html
<!-- Basic buttons with states -->
<button class="x-btn">Default Button</button>
<button class="x-btn" disabled>Disabled Button</button>
<button class="x-btn x-btn-primary">Primary Button</button>
<button class="x-btn x-btn-secondary">Secondary Button</button>
<button class="x-btn x-btn-ghost">Ghost Button</button>

<!-- Size variants -->
<button class="x-btn x-btn-sm x-btn-primary">Small Button</button>
<button class="x-btn x-btn-primary">Default Size</button>
<button class="x-btn x-btn-lg x-btn-primary">Large Button</button>

<!-- With border radius utilities -->
<button class="x-btn x-btn-primary x-rounded">Rounded Button</button>
<button class="x-btn x-btn-secondary x-rounded-full">Fully Rounded Button</button>

<!-- Full width and icon buttons -->
<button class="x-btn x-btn-primary x-btn-block">Full Width Button</button>
<button class="x-btn x-btn-primary x-btn-icon">
	<i class="icon"></i>
</button>

<!-- Combined modifiers -->
<button class="x-btn x-btn-primary x-btn-lg x-rounded">Large Rounded Primary</button>
```

#### Button Dark Theme Support

The button component automatically adapts to dark theme when the `data-theme="dark"` attribute is set on the `html` element:

```html
<html data-theme="dark">
	<!-- Primary buttons invert to white background in dark mode -->
	<button class="x-btn x-btn-primary">Dark Theme Primary</button>

	<!-- Secondary and ghost buttons use subtle backgrounds -->
	<button class="x-btn x-btn-secondary">Dark Theme Secondary</button>
	<button class="x-btn x-btn-ghost">Dark Theme Ghost</button>
</html>
```

Dark theme changes:

- Primary buttons invert to white background with dark text
- Secondary buttons use subtle transparent backgrounds
- Ghost buttons maintain transparency with light text
- Hover states adjust for better visibility in dark mode
- Border colors use appropriate opacity for dark backgrounds

#### Accessibility Features

The button component includes several accessibility enhancements:

- Proper focus states for keyboard navigation
- Sufficient color contrast ratios
- Clear disabled states
- Semantic cursor indicators
- Support for assistive technologies

## Layout Service Classes

- `x-layout-fill`: Fill available space
- `x-layout-hide`: Hide element
- `x-layout-show`: Show element
- `x-layout-overflow`: Show overflow content
- `x-layout-overflow-hidden`: Hide overflow content
- `x-layout-relative`: Relative positioning
- `x-layout-absolute`: Absolute positioning
- `x-layout-fixed`: Fixed positioning
- `x-layout-z-index-top`: Highest z-index layer
- `x-layout-z-index-modal`: Modal z-index layer
- `x-layout-z-index-overlay`: Overlay z-index layer
- `x-layout-pointer-events-none`: Disable pointer events
- `x-layout-pointer-events-auto`: Enable pointer events
- `x-layout-cursor-pointer`: Pointer cursor
- `x-layout-cursor-default`: Default cursor
- `x-layout-cursor-not-allowed`: Not allowed cursor
- `x-layout-opacity-0`: Zero opacity
- `x-layout-opacity-25`: 25% opacity
- `x-layout-opacity-50`: 50% opacity
- `x-layout-opacity-75`: 75% opacity
- `x-layout-opacity-100`: Full opacity
- `x-layout-visible`: Show element
- `x-layout-hidden`: Hide element
- `x-layout-block`: Block display
- `x-layout-inline`: Inline display
- `x-layout-inline-block`: Inline-block display
- `x-layout-none`: No display
- `x-layout-width-100`: 100% width
- `x-layout-width-auto`: Auto width
- `x-layout-height-100`: 100% height
- `x-layout-height-auto`: Auto height
- `x-layout-min-width-0`: Zero min-width
- `x-layout-min-width-100`: 100% min-width
- `x-layout-min-height-0`: Zero min-height
- `x-layout-min-height-100`: 100% min-height
- `x-layout-max-width-100`: 100% max-width
- `x-layout-max-width-none`: No max-width
- `x-layout-max-height-100`: 100% max-height
- `x-layout-max-height-none`: No max-height

## Aspect Ratio Classes

- `x-aspect-square`: 1:1 aspect ratio
- `x-aspect-video`: 16:9 aspect ratio
- `x-aspect-portrait`: 3:4 aspect ratio

## Stack Classes

- `x-stack`: Vertical stack layout
- `x-stack-xs`: Extra small gap stack
- `x-stack-sm`: Small gap stack
- `x-stack-md`: Medium gap stack
- `x-stack-lg`: Large gap stack
- `x-stack-xl`: Extra large gap stack

## Color Classes

### Text Colors

- `x-text-slate`, `x-text-gray`, `x-text-zinc`, `x-text-neutral`, `x-text-stone`: Grayscale colors
- `x-text-red`, `x-text-orange`, `x-text-amber`, `x-text-yellow`, `x-text-lime`: Warm colors
- `x-text-green`, `x-text-emerald`, `x-text-teal`, `x-text-cyan`: Cool colors
- `x-text-sky`, `x-text-blue`, `x-text-indigo`, `x-text-violet`: Blue colors
- `x-text-purple`, `x-text-fuchsia`, `x-text-pink`, `x-text-rose`: Purple colors
- `x-text-white`, `x-text-black`: Base colors

### Background Colors

- `x-bg-slate`, `x-bg-gray`, `x-bg-zinc`, `x-bg-neutral`, `x-bg-stone`: Grayscale backgrounds
- `x-bg-red`, `x-bg-orange`, `x-bg-amber`, `x-bg-yellow`, `x-bg-lime`: Warm backgrounds
- `x-bg-green`, `x-bg-emerald`, `x-bg-teal`, `x-bg-cyan`: Cool backgrounds
- `x-bg-sky`, `x-bg-blue`, `x-bg-indigo`, `x-bg-violet`: Blue backgrounds
- `x-bg-purple`, `x-bg-fuchsia`, `x-bg-pink`, `x-bg-rose`: Purple backgrounds
- `x-bg-white`, `x-bg-black`: Base backgrounds

## Layout Row Classes

- `x-layout-row`: Horizontal row layout
- `x-layout-row-start-center`: Row with start alignment and center vertical alignment
- `x-layout-row-space-around-center`: Row with space-around and center alignment
- `x-layout-row-space-between-center`: Row with space-between and center alignment
