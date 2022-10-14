# Spinoff CSS

An idea for the perfect css.

_spinoff.config.ts_

```
module.exports = {
    themes: ["light", "dark"],
    tokens: {
        colors: {
          black: rgb(0,0,0),
          white: rgb(255,255,255),
          blue: rgb(0,0,255),
          cyan: rgb(0,200,255),
          red: rgb(255,0,0),
          orange: rgb(255,100,0),
          primary: {
            accent: [blue, cyan]
          },
          secondary: {
            accent: [red, orange]
          }
        },
        sizes: {
            0: 0px,
            1: 1px,
            1.5: 0.375rem,
            2: 0.5rem,
            3: 0.75rem,
            4: 1rem,
        }
    },
    utilities: {
        p: padding,
        px: [padding-left, padding-right]
        m: margin,
    }
}
```

Generates the following css:
_globals.css_

```
/* Tokens */
:root {
--color-black: black;
--color-white: white;
--color-blue: blue;
--color-cyan: cyan;
--color-red: red;
--color-orange: orange;

--size-0: 0px;
--size-px: 1px;
--size-1: 0.25rem;
--size-1.5: 0.375rem;
--size-2: 0.5rem;
--size-3: 0.75rem;
--size-4: 1rem;
}

/* Themes */
.light {
--theme-locontrast: var(--color-white)
--theme-hiContrast: var(--color-black)
}
.dark {
--theme-locontrast: var(--color-black)
--theme-hiContrast: var(--color-white)
}

.primary {
--theme-accent: var(--color-blue)
}
dark.primary {
--theme-accent: var(--color-cyan)
}

.secondary {
--theme-accent: var(--color-red)
}
.dark.secondary {
--theme-accent: var(--color-orange)
}

```

## Variant Api

A _button.spinoff.json_ file

```
{
    base: "base",
    variants: {
        kind: ["solid", "outline"],
        size: ["sm", "md", "lg"]
    },
    defaultVariants: {
        kind: "solid",
        size: "md"
    }
}
```

This would be in a component scoped css module:

```
.button {
    border-size: 1px;
    border-style: solid;
}
.solid {
    color: var(--theme-loContrast);
    border-color: transparent;
     background: var(--theme-accent);
}
.outline {
    color: var(--theme-accent);
    border-color: var(--theme-accent);
    background: transparent;
}

.sm {
    padding: var(--size-1);
}
.md {
    padding: var(--size-2);
}
.lg {
    padding: var(--size-3);
}
```

Spinoff file would generate props from classnames and cx would inject the styles:

```
import styles from "button.module.css"

type Props =  variantPropsOf<styles>
...
<button className={cx(
    styles.button,
    kind && styles[kind],
    size && styles[size]
)}>
```

## Inline styles

```
<div className="p-2 hover(p-4)" />
```

Will generate css:

```
.p-2 {
   padding: var(--size-2);
}
/* States need more thought */
._aBcASd:hover {
    padding: var(--size-4);
}
```
