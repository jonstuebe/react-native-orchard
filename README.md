# react-native-orchard

A modern, iOS-style UI component library for React Native applications.

## Installation

```bash
npm install react-native-orchard
# or
yarn add react-native-orchard
# or
bun add react-native-orchard
```

## Features

### Components

- **List Components**

  - `ListContainer` - Container for list-style content
  - `RowContainer` - Container for individual rows
  - `RowContent` - Content wrapper for row items
  - `RowLabel` - Label component for rows
  - `RowTrailing` - Trailing content wrapper for rows
  - `RowTextInput` - Text input component for rows
  - `RowSwitch` - Switch component for rows
  - `RowAccessoryIcon` - Icon component for row accessories
  - `RowAccessoryLabel` - Label component for row accessories
  - `RowTrailingMenu` - Menu component for row trailing content
  - `RowButton` - Button component for rows
  - `SwipeableRowContainer` - Swipeable container for rows

- **Section Components**

  - `SectionContainer` - Container for section content
  - `SectionContent` - Content wrapper for sections

- **Sheet Components**

  - `SheetHeaderContainer` - Container for sheet headers
  - `SheetHeaderCloseButton` - Close button for sheet headers

- **Basic Components**
  - `Button` - Standard button component
  - `Typography` - Typography component
  - `PressableOpacity` - Pressable component with opacity feedback
  - `HeaderButton` - Button component for headers

### Hooks

- `useTheme` - Hook for accessing theme values
- `useRowTextInput` - Hook for managing row text input state
- `useRowSwitch` - Hook for managing row switch state
- `useTrailingMenu` - Hook for managing trailing menu state

### Theme

The package includes a comprehensive theme system with:

- Colors
- Spacing
- Typography
- Border Radius
- And more...

## Usage

### Basic Example

```tsx
import {
  ListContainer,
  RowContainer,
  RowLabel,
  RowTextInput,
  useRowTextInput,
} from "react-native-orchard";

function MyComponent() {
  const textInputProps = useRowTextInput({
    placeholder: "Enter text",
    autoFocus: true,
  });

  return (
    <ListContainer>
      <RowContainer>
        <RowLabel>Label</RowLabel>
        <RowTextInput {...textInputProps} />
      </RowContainer>
    </ListContainer>
  );
}
```

### Using Theme

```tsx
import { useTheme } from "react-native-orchard";

function MyComponent() {
  const { colors, spacing, typography } = useTheme();

  return (
    <View style={{ padding: spacing.md }}>
      <Text style={{ color: colors.textPrimary }}>Hello World</Text>
    </View>
  );
}
```

### Sheet Example

```tsx
import {
  SheetHeaderContainer,
  SheetHeaderCloseButton,
} from "react-native-orchard";

function MySheet() {
  return (
    <SheetHeaderContainer>
      <SheetHeaderCloseButton />
      {/* Sheet content */}
    </SheetHeaderContainer>
  );
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
