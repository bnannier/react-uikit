https://getuikit.com/docs/margin

#### A collection of utility classes to add spacing between elements.

### Margin
Add one or more of the following props to any element to create the same vertical and/or horizontal margin that a paragraph usually has.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">margin</span> | Adds margin, if it is preceded by another element, and always bottom margin. |
| <span style="color:salmon">marginTop</span> | Adds top margin. |
| <span style="color:salmon">marginBottom</span> | Adds bottom margin. |
| <span style="color:salmon">marginLeft</span> | Adds left margin. |
| <span style="color:salmon">marginRight</span> | Adds right margin. |

```jsx
import { Card } from '../';

<React.Fragment>
    <Card margin default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
    <Card margin default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
</React.Fragment>
```

<br /><br /><hr />

### Small Margin
Add one of the following props to add small spacing to block elements.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">marginSmall</span> | Adds margin, if it is preceded by another element, and always bottom margin. |
| <span style="color:salmon">marginTopSmall</span> | Adds top margin. |
| <span style="color:salmon">marginSmallBottom</span> | Adds bottom margin. |
| <span style="color:salmon">marginSmallLeft</span> | Adds left margin. |
| <span style="color:salmon">marginSmallRight</span> | Adds right margin. |

```jsx
import { Card } from '../';

<React.Fragment>
    <Card marginSmall default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
    <Card marginSmall default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
</React.Fragment>
```

<br /><br /><hr />

### Medium Margin
Add one of the following props to add medium spacing to block elements.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">marginMedium</span> | Adds medium margin, if it is preceded by another element, and always bottom margin. |
| <span style="color:salmon">marginMediumTop</span> | Adds medium top margin. |
| <span style="color:salmon">marginMediumBottom</span> | Adds medium bottom margin. |
| <span style="color:salmon">marginMediumLeft</span> | Adds medium left margin. |
| <span style="color:salmon">marginMediumRight</span> | Adds medium right margin. |

```jsx
import { Card } from '../';

<React.Fragment>
    <Card marginMedium default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
    <Card marginMedium default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
</React.Fragment>
```

<br /><br /><hr />

### Large Margin
Add one of the following props to add large spacing to block elements.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">marginLarge</span> | Adds large margin, if it is preceded by another element, and always bottom margin. |
| <span style="color:salmon">marginLargeTop</span> | Adds large top margin. |
| <span style="color:salmon">marginLargeBottom</span> | Adds large bottom margin. |
| <span style="color:salmon">marginLargeLeft</span> | Adds large left margin. |
| <span style="color:salmon">marginLargeRight</span> | Adds large right margin. |

```jsx
import { Card } from '../';

<React.Fragment>
    <Card marginLarge default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
    <Card marginLarge default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
</React.Fragment>
```

<br /><br /><hr />

### X-Large Margin
Add one of the following props to add very large spacing to block elements.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">marginXLarge</span> | Adds larger margin, if it is preceded by another element, and always bottom margin. |
| <span style="color:salmon">marginXLargeTop</span> | Adds larger top margin. |
| <span style="color:salmon">marginXLargeBottom</span> | Adds larger bottom margin. |
| <span style="color:salmon">marginXLargeLeft</span> | Adds larger left margin. |
| <span style="color:salmon">marginXLargeRight</span> | Adds larger right margin. |

```jsx
import { Card } from '../';

<React.Fragment>
    <Card marginXLarge default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
    <Card marginXLarge default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
</React.Fragment>
```

<br /><br /><hr />

### Remove Margin
Add one of the following props to remove margin from block elements.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">marginRemoveSmallLeft</span> | Removes all margins. |
| <span style="color:salmon">marginRemoveTop</span> | Removes top margin. |
| <span style="color:salmon">marginRemoveBottom</span> | Removes bottom margin. |
| <span style="color:salmon">marginRemoveLeft</span> | Removes left margin. |
| <span style="color:salmon">marginRemoveRight</span> | Removes right margin. |
| <span style="color:salmon">marginRemoveVertical</span> | Removes all vertical margins. |
| <span style="color:salmon">marginRemoveAdjacent</span> | Removes the top margin of the directly succeeding element. |
| <span style="color:salmon">marginRemoveFirstChild</span> | Removes the top margin of the first child element. |
| <span style="color:salmon">marginRemoveLastChild</span> | Removes the bottom margin of the last child element. |

<br /><br /><hr />

### Responsive Margin
React-uikit provides a number of responsive props to remove margin.
Basically, they work just like the usual margin remove props, except that they have suffixes that represent the breakpoint from which they come to effect.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">marginRemoveSmallLeft</span><br /><span style="color:salmon">marginRemoveSmallRight</span> | Affects device widths of <span style="color:salmon">640px</span> and larger. |
| <span style="color:salmon">marginRemoveMediumLeft</span><br /><span style="color:salmon">marginRemoveMediumRight</span> | Affects device widths of <span style="color:salmon">960px</span> and larger. |
| <span style="color:salmon">marginRemoveLargeLeft</span><br /><span style="color:salmon">marginRemoveLargeRight</span> | Affects device widths of <span style="color:salmon">1200px</span> and larger. |
| <span style="color:salmon">marginRemoveXLargeLeft</span><br /><span style="color:salmon">marginRemoveXLargeRight</span> | Affects device widths of <span style="color:salmon">1600px</span> and larger. |

<br /><br /><hr />

### Auto Margin
Add one of the following props to set auto margin. This can be useful to center or otherwise align block elements with a fixed width as well as flex elements.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">marginAuto</span> | Sets left and right margin to auto, horizontally centering block and flex elements. |
| <span style="color:salmon">marginAutoTop</span> | Sets top margin to auto, pushing block and flex elements to the bottom. |
| <span style="color:salmon">marginAutoBottom</span> | Sets bottom margin to auto, pushing block and flex elements to the top. |
| <span style="color:salmon">marginAutoLeft</span> | Sets left margin to auto, pushing block and flex elements to the right. |
| <span style="color:salmon">marginAutoRight</span> | Sets right margin to auto, pushing block and flex elements to the left |
| <span style="color:salmon">marginAutoVerticle</span> | Sets top and bottom margin to auto, vertically centering only flex elements. |

```jsx
import { Card, Panel } from '../';

<React.Fragment>
    <Card margin marginAutoLeft widthSmall="1-2" default body textCenter>Block element</Card>
    
    <Panel flex heightMedium backgroundMuted margin textCenter>
        <Card marginAuto marginAutoVertical widthSmall="1-2" default body>Flex item</Card>
    </Panel>

</React.Fragment>
```

<br /><br /><hr />

### Responsive Auto Margin
React-uikit provides a number of responsive margin auto props.
Basically, they work just like the usual margin auto classes, except that they have suffixes that represent the breakpoint from which they come to effect.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">marginAutoSmallLeft</span><br /><span style="color:salmon">marginAutoSmall</span><br /><span style="color:salmon">marginAutoSmallRight</span> | Affects device widths of <span style="color:salmon">640px</span> and larger. |
| <span style="color:salmon">marginAutoMediumLeft</span><br /><span style="color:salmon">marginAutoMedium</span><br /><span style="color:salmon">marginAutoMediumRight</span> | Affects device widths of <span style="color:salmon">960px</span> and larger. |
| <span style="color:salmon">marginAutoLargeLeft</span><br /><span style="color:salmon">marginAutoLarge</span><br /><span style="color:salmon">marginAutoLargeRight</span> | Affects device widths of <span style="color:salmon">1200px</span> and larger. |
| <span style="color:salmon">marginAutoXLargeLeft</span><br /><span style="color:salmon">marginAutoXLarge</span><br /><span style="color:salmon">marginAutoXLargeRight</span> | Affects device widths of <span style="color:salmon">1600px</span> and larger. |

```jsx
import { Card, Panel } from '../';

<React.Fragment>
    <Card margin marginAutoRight marginAutoMedium widthSmall="1-2" default body textCenter>Block element</Card>
    <Card margin marginAuto marginAutoLeftMedium widthSmall="1-2" default body textCenter>Block element</Card>
    <Card margin marginAutoLeft marginAutoRightMedium widthSmall="1-2" default body textCenter>Block element</Card>
</React.Fragment>
```
