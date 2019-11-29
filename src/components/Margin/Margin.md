https://getuikit.com/docs/margin

### Define the width of elements for different viewport sizes.
UIkit's Width component is often used in combination with grids to split content into responsive columns.
You can apply fractions, automatic width or expand units to fill the remaining space and combine these modes.

### Usage
Add one of the <span style="color:darkturquoise">values</span> to the responsive <span style="color:salmon">width props</span> on an element to determine its size.
Typically, you would use a grid from the Grid component and its child elements to create the units.

| VALUE  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:darkturquoise">1-1</span> | Fills 100% of the available width. |
| <span style="color:darkturquoise">1-2</span> | The element takes up halves of its parent container. |
| <span style="color:darkturquoise">1-3 to 2-3</span> | The element takes up thirds of its parent container. |
| <span style="color:darkturquoise">1-4 to 3-4</span> | The element takes up fourths of its parent container. |
| <span style="color:darkturquoise">1-5 to 4-5</span> | The element takes up fifths of its parent container. |
| <span style="color:darkturquoise">1-6 to 5-6</span> | The element takes up sixths of its parent container. |

<span style="color:blue">We remove redundancy into each set of unit classes, so that for instance instead of </span><span style="color:salmon">width="</span><span style="color:darkturquoise">3-6</span><span style="color:salmon">" </span> <span style="color:blue"> you should use </span><span style="color:salmon">width="</span><span style="color:darkturquoise">1-2</span><span style="color:salmon">"</span><br /><br />

### Responsive Width
React-uikit provides a number of responsive width props.
Basically they work just like the usual width props, except that they have suffixes width* (widthS, widthM, widthL, widthXL) that represent the breakpoint from which they come to effect.
These classes can be combined with the Visibility component.
This is great to adjust your layout and content for different device sizes.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">width</span> | Affects all device widths, grid columns stay side by side. |
| <span style="color:salmon">widthSmall</span> | Affects device widths of <span style="color:salmon">640px</span> and larger. Grid columns will stack on smaller sizes. |
| <span style="color:salmon">widthMedium</span> | Affects device widths of <span style="color:salmon">960px</span> and larger. Grid columns will stack on smaller sizes. |
| <span style="color:salmon">widthLarge</span> | Affects device widths of <span style="color:salmon">1200px</span> and larger. Grid columns will stack on smaller sizes. |
| <span style="color:salmon">widthXLarge</span> | Affects device widths of <span style="color:salmon">1600px</span> and larger. Grid columns will stack on smaller sizes. |

```jsx
import { Card, Grid, Panel } from '../';

<React.Fragment>
    <Grid>
        <Panel width="1-3">
            <Card default body>item</Card>
        </Panel>
        <Panel width="1-3">
            <Card default body>item</Card>
        </Panel>
        <Panel width="1-3">
            <Card default body>item</Card>
        </Panel>
    </Grid>
    <Grid>
        <Panel width="1-2">
            <Card default body>item</Card>
        </Panel>
        <Panel width="1-2">
            <Card default body>item</Card>
        </Panel>
    </Grid>
    <Grid>
        <Panel width="1-4">
            <Card default body>item</Card>
        </Panel>
        <Panel width="3-4">
            <Card default body>item</Card>
        </Panel>
    </Grid>
</React.Fragment>
```
