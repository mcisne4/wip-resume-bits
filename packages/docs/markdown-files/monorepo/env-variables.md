## Environmental Variables

Various environment variables are available to change the behavior of the different packages.

### Location:

The ideal location for these environment variables is in an `.env` file located in the root of the project. The different package scripts will look for this file and read its contents.

### Available Environment Variables:

| Environment Variable        | Data Type         | Description                                                   |
| --------------------------- | ----------------- | ------------------------------------------------------------- |
| `LOG`                       | `Boolean`         | Enables or disables logging. <sup>1 , 2</sup>                 |
| `INFO_TIMESTAMP_STYLE`      | `Console Styling` | The logging style for the `INFO` timestamp. <sup>3</sup>      |
| `WARN_TIMESTAMP_STYLE`      | `Console Styling` | The logging style for the `WARN` timestamp. <sup>3</sup>      |
| `ERROR_TIMESTAMP_STYLE`     | `Console Styling` | The logging style for the `ERROR` timestamp. <sup>3</sup>     |
| `TITLE_MESSAGE_STYLE`       | `Console Styling` | The logging style for the `TITLE` message. <sup>3</sup>       |
| `STATUS_MESSAGE_STYLE`      | `Console Styling` | The logging style for the `STATUS` message. <sup>3</sup>      |
| `PASS_MESSAGE_STYLE`        | `Console Styling` | The logging style for the `PASS` message. <sup>3</sup>        |
| `FAIL_MESSAGE_STYLE`        | `Console Styling` | The logging style for the `FAIL` message. <sup>3</sup>        |
| `ERROR_MESSAGE_STYLE`       | `Console Styling` | The logging style for the `ERROR` message. <sup>3</sup>       |
| `ERROR_TITLE_MESSAGE_STYLE` | `Console Styling` | The logging style for the `ERROR` title message. <sup>3</sup> |
| `PASS_SYMBOL_STYLE`         | `Console Styling` | The logging style for the `PASS` symbol. <sup>3</sup>         |
| `FAIL_SYMBOL_STYLE`         | `Console Styling` | The logging style for the `FAIL` symbol. <sup>3</sup>         |
| `ERROR_SYMBOL_STYLE`        | `Console Styling` | The logging style for the `ERROR` symbol. <sup>3</sup>        |
| `PASS_SYMBOL`               | `String`          | A string that represents the `PASS` symbol. <sup>4</sup>      |
| `FAIL_SYMBOL`               | `String`          | A string that represents the `FAIL` symbol. <sup>4</sup>      |
| `ERROR_SYMBOL`              | `String`          | A string that represents the `ERROR` symbol. <sup>4</sup>     |

**Notes:**

1. Values are case-insensitive.
2. `Boolean` values can be `true`, `false`, `0`, or `1`.
3. See `Console Styling` below for more information.
4. The value can be wrapped in double quotes if desired, which will then be removed during parsing.

### Console Styling:

**_Console Styling_** is a string that represents one or more _styling elements_ used to customize the `Logger`'s output to the console. The available styling elements are: _`Color Keywords`_, _`Modifier Keywords`_, _`RGB Strings`_, _`HSL Strings`_, and _`Hex Strings`_. Use the pipe (`|`) character to separate multiple styling elements.

#### Color Keywords:

```ini
# Color Keyword Syntax:
ENVIRONMENT_VARIABLE=[Bg|Fg][color][Bright]

# Examples:
INFO_TIMESTAMP_STYLE=BgGreenBright|White
INFO_TIMESTAMP_STYLE=bg:green-bright|fg:white
INFO_TIMESTAMP_STYLE=bg green bright | white
```

- `Bg` | `Fg` - **Optional** - Specify if the color should be applied as the _background_ or _foreground_ color
  - By default, the styling is applied as the _foreground_ color.
  - If omitted, the styling is applied as the _foreground_ color.
- `color` - **Required** - The name of one of the predefined colors
  - Available colors are: `Black`, `Red`, `Green`, `Yellow`, `Blue`, `Magenta`, `Cyan`, `White`, `Gray`, `Grey`
- `Bright` - **Optional** - Specify if the color should be applied as the _bright_ color variant
  - **Note:** The `Gray` and `Grey` colors do not have a _bright_ variant.
- **Case-Insensitive** - The color keywords are case-insensitive. Use any combination of uppercase and lowercase characters to better visualize the color keywords.
- **Ignored-Characters** - The following characters are ignored: ` `, `_`, `;`, `:`, `-`, `.`, `"`
  - Use any combination of these characters to visually separate content

#### Modifier Keywords:

```ini
# Modifier Keyword Syntax:
ENVIRONMENT_VARIABLE=[modifier]

# Examples:
INFO_TIMESTAMP_STYLE=italic
INFO_TIMESTAMP_STYLE=UnderLine
INFO_TIMESTAMP_STYLE=BOLD
```

- `modifier` - **Required** - The name of one of the predefined modifiers
  - Available modifiers are: `Bold`, `Italic`, `Underline`
- **Case-Insensitive** - The modifier keywords are case-insensitive. Use any combination of uppercase and lowercase characters to better visualize the modifier keywords.
- **Ignored-Characters** - The following characters are ignored: ` `, `_`, `;`, `:`, `-`, `.`, `"`
  - Use any combination of these characters to visually separate content

#### RGB Strings:

```ini
# RGB String Syntax:
ENVIRONMENT_VARIABLE=[Bg|Fg][Rgb(R, G, B)]

# Examples:
INFO_TIMESTAMP_STYLE=Rgb(0,255,0)|BgRgb(0,255,0)
INFO_TIMESTAMP_STYLE=Fg:Rgb(0,255,0)|Bg_Rgb(0,255,0)
INFO_TIMESTAMP_STYLE=Bg Rgb (0, 255, 0) | Fg Rgb (0, 255, 0)
```

- `Bg` | `Fg` - **Optional** - Specify if the color should be applied as the _background_ or _foreground_ color
  - By default, the styling is applied as the _foreground_ color.
  - If omitted, the styling is applied as the _foreground_ color.
- `Rgb(R,G,B)` - **Required** - A CSS-like representation of an RGB color
  - `R` , `G` , `B` - **Required** - An integer between `0` and `255` representing the red, green, and blue components of the color
- **Case-Insensitive** - The RGB strings are case-insensitive. Use any combination of uppercase and lowercase characters to better visualize the RGB strings.
- **Ignored-Characters** - The following characters are ignored: ` `, `_`, `;`, `:`, `-`, `.`, `"`
  - Use any combination of these characters to visually separate content

#### HSL Strings:

```ini
# HSL String Syntax:
ENVIRONMENT_VARIABLE=[Bg|Fg][Hsl(H, S, L)]

# Examples:
INFO_TIMESTAMP_STYLE=Hsl(0, 255, 0)|BgHsl(0, 255, 0)
INFO_TIMESTAMP_STYLE=Fg:Hsl(0, 255, 0)|Bg_Hsl(0, 255, 0)
INFO_TIMESTAMP_STYLE=Bg Hsl (0, 255, 0) | Fg Hsl (0, 255, 0)
```

- `Bg` | `Fg` - **Optional** - Specify if the color should be applied as the _background_ or _foreground_ color
  - By default, the styling is applied as the _foreground_ color.
  - If omitted, the styling is applied as the _foreground_ color.
- `Hsl(H,S,L)` - **Required** - A CSS-like representation of an HSL color
  - `H` - **Required** - An integer between `0` and `360` representing the hue component of the color
  - `S` , `L` - **Required** - An integer between `0` and `100` representing the saturation and lightness components of the color
    - **Note:** The range represents a percentage from `0%` to `100%`. The `%` character is optional and ignored during parsing.
- **Case-Insensitive** - The HSL strings are case-insensitive. Use any combination of uppercase and lowercase characters to better visualize the HSL strings.
- **Ignored-Characters** - The following characters are ignored: ` `, `_`, `;`, `:`, `-`, `.`, `"`
  - Use any combination of these characters to visually separate content

#### Hex Strings:

```ini
# Hex String Syntax:
ENVIRONMENT_VARIABLE=[Bg|Fg][0x][Hex]

# Examples:
INFO_TIMESTAMP_STYLE=0XA3008F|Bg0X8F36B7
INFO_TIMESTAMP_STYLE=fg:0x.8f.36.b7|bg_0x-8f-36-b7
INFO_TIMESTAMP_STYLE=Bg 0x 8F 36 B7 | Fg 0x 8F 36 B7
```

- `Bg` | `Fg` - **Optional** - Specify if the color should be applied as the _background_ or _foreground_ color
  - By default, the styling is applied as the _foreground_ color.
  - If omitted, the styling is applied as the _foreground_ color.
- `0x` - **Required** - Defines the start of the hex string
- `Hex` - **Required** - A `6` character hex string
- **Case-Insensitive** - The hex strings are case-insensitive. Use any combination of uppercase and lowercase characters to better visualize the hex strings.
- **Ignored-Characters** - The following characters are ignored: ` `, `_`, `;`, `:`, `-`, `.`, `"`
  - Use any combination of these characters to visually separate content
