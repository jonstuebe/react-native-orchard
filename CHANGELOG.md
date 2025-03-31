# react-native-orchard

## 0.2.0

### Minor Changes

- 307049e: Initial version of `react-native-orchard. The purpose of this ui kit is to quickly and composably create iOS style user interfaces.

  # Design Tokens

  ## Colors

  ### Base Colors

  - `red`
  - `orange`
  - `yellow`
  - `green`
  - `mint`
  - `teal`
  - `cyan`
  - `blue`
  - `indigo`
  - `purple`
  - `pink`
  - `brown`
  - `black`
  - `white`

  ### Label Colors

  - `labelPrimary`
  - `labelSecondary`
  - `labelTertiary`
  - `labelQuaternary`
  - `labelVibrantPrimary`
  - `labelVibrantSecondary`
  - `labelVibrantTertiary`
  - `labelVibrantQuaternary`

  ### Gray Shades

  - `gray`
  - `gray2`
  - `gray3`
  - `gray4`
  - `gray5`
  - `gray6`

  ### Background Colors

  - `backgroundPrimary`
  - `backgroundSecondary`
  - `backgroundTertiary`
  - `backgroundGroupedPrimary`
  - `backgroundGroupedSecondary`
  - `backgroundGroupedTertiary`

  ### Text Colors

  - `textPrimary`
  - `textSecondary`
  - `textTertiary`

  ### Fill Colors

  - `fillPrimary`
  - `fillSecondary`
  - `fillTertiary`
  - `fillQuaternary`
  - `fillVibrantPrimary`
  - `fillVibrantSecondary`
  - `fillVibrantTertiary`

  ### Separator Colors

  - `separatorOpaque`
  - `separatorNonOpaque`

  ### Material Colors

  - `materialThick`
  - `materialRegular`
  - `materialThin`
  - `materialUltraThin`
  - `materialChrome`

  ### Container Colors

  - `rowContainer`

  ## Typography

  ### Large Title

  - `largeTitleRegular`
  - `largeTitleEmphasized`

  ### Title 1

  - `title1Regular`
  - `title1Emphasized`

  ### Title 2

  - `title2Regular`
  - `title2Emphasized`

  ### Title 3

  - `title3Regular`
  - `title3Emphasized`

  ### Headline

  - `headlineRegular`
  - `headlineItalic`

  ### Body

  - `bodyRegular`
  - `bodyEmphasized`
  - `bodyItalic`
  - `bodyEmphasizedItalic`

  ### Callout

  - `calloutRegular`
  - `calloutEmphasized`
  - `calloutItalic`
  - `calloutEmphasizedItalic`

  ### Subheadline

  - `subheadlineRegular`
  - `subheadlineEmphasized`
  - `subheadlineItalic`
  - `subheadlineEmphasizedItalic`

  ### Footnote

  - `footnoteRegular`
  - `footnoteEmphasized`
  - `footnoteItalic`
  - `footnoteEmphasizedItalic`

  ### Caption 1

  - `caption1Regular`
  - `caption1Emphasized`
  - `caption1Italic`
  - `caption1EmphasizedItalic`

  ### Caption 2

  - `caption2Regular`
  - `caption2Emphasized`
  - `caption2Italic`
  - `caption2EmphasizedItalic`

  ### Row Label

  - `rowLabelTitle`
  - `rowLabelSubtitle`

  ## Spacing

  - `none`
  - `xxs`
  - `xs`
  - `sm`
  - `md`
  - `lg`
  - `xl`
  - `xxl`
  - `xxxl`

  ## Radius

  - `none`
  - `xs`
  - `sm`
  - `md`
  - `lg`
  - `xl`
  - `xxl`
  - `circle`
  - `rowContainer`

  ## Shadow

  - `small`
  - `medium`
  - `large`

  Each category can be accessed via the main `tokens` object, for example: `tokens.colors.blue`, `tokens.typography.bodyRegular`, `tokens.spacing.md`, etc.

  # Components

  ## Button

  A customizable button component with:

  - Primary and secondary variants
  - Support for loading states
  - Custom styling options
  - Accessibility features
  - Press opacity feedback

  ## PressableOpacity

  A base pressable component that:

  - Provides opacity feedback on press
  - Handles press interactions
  - Customizable opacity levels

  ## Typography

  A text component that:

  - Implements consistent typography styles
  - Uses system font styles
  - Supports various text weights and styles

  ## List

  A directory containing list-related components (contents not visible in provided files)

  # Hooks

  ## useTheme

  A custom hook that:

  - Provides access to the current theme
  - Returns theme values for the active color scheme (light/dark)
  - Gives typed access to theme properties

  # Theme

  ## Theme Types

  Defines the structure for the theme with:

  - Color scheme boolean (`dark`)
  - Core colors (primary, background, card, text, border, notification)
  - Font styles (regular, medium, bold, heavy)

  ## Font Styles

  Defines system fonts with weights:

  - `regular`: 400 weight
  - `medium`: 500 weight
  - `bold`: bold weight
  - `heavy`: 900 weight

  ## Theme Variants

  Provides two theme configurations:

  ### Light Theme

  - Non-dark color scheme
  - Light background colors
  - System-based light mode colors

  ### Dark Theme

  - Dark color scheme
  - Dark background colors
  - System-based dark mode colors

  Each theme includes:

  - Color palette
  - Typography system
  - Font configurations

  The theme can be accessed through the exported `theme` object which contains both `light` and `dark` variants.

- Fixed up more text styles and got things in a pretty good place!
