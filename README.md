# mofron-comp-heading
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

heading component for mofron


# Install
```
npm install mofron mofron-comp-heading
```

# Sample
```html
<require>
    <tag module="mofron-comp-heading">Heading</tag>
</require>

<Heading color="#f0e6fa" level=2>Heading</Heading>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | text | mixed | string: heading text contents |
| | | | mofron-comp-text: heading text component |
| ◯  | level | number | text size level [1-6] |
| | mainColor | mixed (color) | string: text color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | key-value | style option |

