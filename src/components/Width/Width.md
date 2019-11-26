https://getuikit.com/docs/width

### Define the width of elements for different viewport sizes.
React-uikit's width component is often used in combination with grids to split content into responsive columns.
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
import { Card, Grid, Width } from '../';

<React.Fragment>
    <Grid textCenter>
        <Width width="1-3" widthSmall="1-2" widthMedium="1-3" widthLarge="1-2" widthXLarge="1-3">
            <Card default body>item</Card>
        </Width>
        <Width width="1-3" widthSmall="1-2" widthMedium="1-3" widthLarge="1-2" widthXLarge="1-3">
            <Card default body>item</Card>
        </Width>
        <Width width="1-3" widthSmall="1-2" widthMedium="1-3" widthLarge="1-2" widthXLarge="1-3">
            <Card default body>item</Card>
        </Width>
    </Grid>
    <Grid textCenter>
        <Width width="1-2">
            <Card default body>item</Card>
        </Width>
        <Width width="1-2">
            <Card default body>item</Card>
        </Width>
    </Grid>
    <Grid textCenter>
        <Width width="1-4">
            <Card default body>item</Card>
        </Width>
        <Width width="3-4">
            <Card default body>item</Card>
        </Width>
    </Grid>
</React.Fragment>
```

### Auto & Expand
The Width component provides additional modifiers to give you more flexibility in the distribution of items.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">auto</span> | The item expands only to the width of its own content. |
| <span style="color:salmon">expand</span> | The item expands to fill up the remaining space of the grid container. |

```jsx
import { Card, Grid, Width } from '../';
<React.Fragment>
    <Grid textCenter>
        <Width widthAuto>
            <Card default body>auto</Card>
        </Width>
        <Width widthExpand>
            <Card default body>expand</Card>
        </Width>
    </Grid>
</React.Fragment>
```

### Equal Child Widths
To create a grid whose child elements' widths are evenly split, you don't have to apply the same props to each list item within the grid.
Just add the width and child props to the grid itself.

| VALUE  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:darkturquoise">1-2</span> | All elements take up half of their parent container. |
| <span style="color:darkturquoise">1-3</span> | All elements take up a third of their parent container. |
| <span style="color:darkturquoise">1-4</span> | All elements take up a fourth of their parent container. |
| <span style="color:darkturquoise">1-5</span> | All elements take up a fifth of their parent container. |
| <span style="color:darkturquoise">1-6</span> | All elements take up a sixth of their parent container. |

<span style="color:blue">Use the width prop (</span><span style="color:salmon">width="</span><span style="color:darkturquoise">1-6</span><span style="color:salmon">" </span> <span style="color:blue">), along with the child prop (</span><span style="color:salmon">child</span><span style="color:blue">) on a Grid</span><br /><br />

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">child</span> | Grid's child elements' are evenly split. |
| <span style="color:salmon">auto</span> | Divides the grid into equal units depending on the content size. |
| <span style="color:salmon">expand</span> | Divides the grid into equal units depending on the available space. |

```jsx
import { Card, Grid, Width } from '../';
<React.Fragment>
    <Grid childWidth="1-4" small textCenter>
        <Width>
            <Card default body>Item</Card>
        </Width>
        <Width>
            <Card default body>Item</Card>
        </Width>
        <Width>
            <Card default body>Item</Card>
        </Width>
        <Width>
            <Card default body>Item</Card>
        </Width>
        <Width>
            <Card default body>Item</Card>
        </Width>
    </Grid>
</React.Fragment>
```

Items that use width props with fractions will break into a new row, if they no longer fit their container's width.
When using one of the expand props, however, the space will be evenly distributed among items that always stay in the same row.

```jsx
import { Card, Grid, Width } from '../';
<React.Fragment>
    <Grid childWidthExpand small textCenter>
        <Width>
            <Card default body>Item</Card>
        </Width>
        <Width>
            <Card default body>Item</Card>
        </Width>
        <Width>
            <Card default body>Item</Card>
        </Width>
        <Width>
            <Card default body>Item</Card>
        </Width>
        <Width>
            <Card default body>Item</Card>
        </Width>
    </Grid>
</React.Fragment>
```

### Fixed width
In addition to the calculated width props, you can also add one of the following props, which apply fixed widths.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">widthSmall</span> | Applies a fixed width of <span style="color:salmon">150px</span>. |
| <span style="color:salmon">widthMedium</span> | Applies a fixed width of <span style="color:salmon">300px</span>. |
| <span style="color:salmon">widthLarge</span> | Applies a fixed width of <span style="color:salmon">450px</span>. |
| <span style="color:salmon">widthXLarge</span> | Applies a fixed width of <span style="color:salmon">600px</span>. |
| <span style="color:salmon">widthXXLarge</span> | Applies a fixed width of <span style="color:salmon">750px</span>. |

```jsx
import { Card, Grid, Width } from '../';
<React.Fragment>
    <Width widthSmall margin>
        <Card default body small>widthSmall</Card>
    </Width>
    <Width widthMedium margin>
        <Card default body small>widthMedium</Card>
    </Width>
    <Width widthLarge margin>
        <Card default body small>widthLarge</Card>
    </Width>
    <Width widthXLarge margin>
        <Card default body small>widthXLarge</Card>
    </Width>
    <Width widthXXLarge margin>
        <Card default body small>widthXXLarge</Card>
    </Width>
</React.Fragment>
```

### Mixing widths
You can also combine the child and expand or auto on the Grid and the width="1-3" classes for individual items.
That way it is possible, for example, to create a grid with one item that has a specific width and all other items expanding to fill the remaining space.

```jsx
import { Card, Grid, Width } from '../';
<React.Fragment>
    <Grid childWidthExpand small textCenter>
        <Width>
            <Card default body>Expand</Card>
        </Width>
        <Width width="1-3">
            <Card default body>width="1-3"</Card>
        </Width>
        <Width>
            <Card default body>Expand</Card>
        </Width>
        <Width>
            <Card default body>Expand</Card>
        </Width>
    </Grid>
</React.Fragment>
```

### Responsive width
React-uikit provides a number of responsive widths props. Basically they work just like the usual width props,
except that they have suffixes that represent the breakpoint from which they come to effect.
These props can be combined with the Visibility component.
This is great to adjust your layout and content for different device sizes.

```jsx
import { Card, Grid, Width } from '../';
<React.Fragment>
    <Grid match small textCenter>
        <Width widthMedium="1-2">
            <Card default body>widthMedium="1-2"</Card>
        </Width>
        <Width widthMedium="1-4">
            <Card default body>widthMedium="1-4"</Card>
        </Width>
        <Width widthMedium="1-4">
            <Card default body>widthMedium="1-4"</Card>
        </Width>
        <Width widthMedium="1-5" hiddenLarge>
            <Card default body>widthMedium="1-5"<br />hiddenLarge</Card>
        </Width>
        <Width widthMedium="1-5" widthLarge="1-3">
            <Card secondary body>widthMedium="1-5"<br />widthLarge="1-3"</Card>
        </Width>
        <Width widthMedium="3-5" widthLarge="2-3">
            <Card default body>widthMedium="3-5"<br />widthLarge="2-3"</Card>
        </Width>
    </Grid>

    <Grid match small textCenter>
        <Width widthAutoMedium visibleLarge>
            <Card primary body>widthAutoMedium<br />visibleLarge</Card>
        </Width>
        <Width widthMedium="1-3">
            <Card default body>widthMedium="1-3"</Card>
        </Width>
        <Width widthExpandMedium>
            <Card default body>widthExpandMedium</Card>
        </Width>
    </Grid>
</React.Fragment>
```
