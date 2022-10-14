# An experiment in variants.

An experiment in taking the best from [css modules](https://github.com/css-modules/css-modules), [tailwind](https://tailwindcss.com/) & a [stitches](https://stitches.dev/docs/variants) like api approach to create a composable design system with the added benefits of generated tokens & utilities.

Mixing variants/ variantProps & styled from [classname-variants](https://www.npmjs.com/package/classname-variants) and cx from [cva](https://github.com/joe-bell/cva) we can compose components in several ways.

## Why

We believe at a atomic/design system level the variants of a component should be easy to read, making matching props in design components & code components a breeze. Whilst at the layout or template end of the spectrum, utility classes are great as mostly layouts are custom or one off.

Tailwind creates a great base of tokens & utilities which are great for building layouts and singular elements but as soon as you need a component with multiple variants tailwinds inline styles can become very difficult to manage.

Css is the foundation of styling and css modules gives us a great way to have locally scoped styles. Using tailwinds theme("") function in css modules allows us to use the tokens from the tailwind config in plain css. css modules also means that the styles can be swapped out for vanilla css/ sass or any other solution easily.

Stitches api is great for composing variants of a component in an easy to read way but there seems to be a current shift away from css-in-js solutions in react 18. There are a few libraries such as classname-variants & cva that give us the stitches style api whilst just generating a string for the className. We could use tailwind alone with this method but again it becomes more difficult to read and personally we hate writing states like this `hover:bg-black hover:text-white hover:etc...`.

## Examples

**01 - Button**
Using the simple _cx function_.
**02 - Card**
Using the _variant function_ with tailwind only.
**03 - Dropdown**
Using the _styled function_ to wrap a radix component.
**04 - Switch**
Using the _variantProps function_ for a stitches style api whilst passing through props. Does not allow for adding a colorway or other classes currently.

## A note on colorways

For a while now we have come to the conclusion that colorways should be seperated from the compoenent styles. A component should use generic/semantic tokens for ui. i.e:
`background: var(--ui-bold-1)`
we can then prefix the classes with the colorway which is defined in the global styles:

```
.primary {
--ui-bold-1: theme("colors.purple.500");
}
.neutral: {
--ui-bold-1: theme("colors.gray.500");
}
```

We have created them as tailwind utilities in global styles that can be used throughout app to style something to a particular colorway.

We haven't found a component yet that couldn't be designed using this pattern and can be used in conjunction with somethign like [Figma Tokens](https://www.figma.com/community/plugin/843461159747178978) to mirror design and code. It also makes switching out the theme rediculously easy.

## Tailwind Intellisense

Add the following to your VsCode settings.json to get intellisense for tailwind within the variants/variantProps or styled functions:

```
"tailwindCSS.experimental.classRegex": [
    ["styled\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["variants\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["variantProps\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
]
```

## Feedback

We would love to start a discussion around this so feel free to give feedback or craete pull requests.
