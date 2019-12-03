https://getuikit.com/docs/grid

### Create a fully responsive, fluid and nestable grid layout.
The Grid system of react-uikit allows you to arrange block elements in columns.
It works closely together with the <a href='#/Width' target='blank'>Width component</a> to determine how much space of the container each item will take up,
and it can also be combined with the <a href='#/Flex' target='blank'>Flex component</a> to align and order grid items.

------

### Usage
To create the grid container, use the Grid component.
Add child <a href='#/Grid' target='blank'>Grid components</a> to create the cells.
By default, all grid cells are stacked.
To place them side by side, add one of the props from the <a href='#/Width' target='blank'>Width component</a>.
Using `widthExpand` property will automatically apply equal width to items, regardless of how many there are.

Often cards from the <a href='#/Card' target='blank'>Card component</a> are used inside a grid. This also goes for the following examples for visualization.

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid childWidthExpandSmall textCenter>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
    </Grid>
</React.Fragment>
```

------

### Gap modifiers
The Grid component comes with a default gap that is decreased automatically from a certain breakpoint usually on a smaller desktop viewport width.
To apply a different gap, add one of the following props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">small</span> | Add this class to apply a small gap. |
| <span style="color:salmon">medium</span> | Add this class to apply a medium gap like the default one, but without a breakpoint. |
| <span style="color:salmon">large</span> | Add this class to apply a large gap with breakpoints. |
| <span style="color:salmon">collapse</span> | Add this class to remove the grid gap entirely. |

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid small childWidthExpandSmall textCenter>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
    </Grid>
    <Grid medium childWidthExpandSmall textCenter>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
    </Grid>
    <Grid large childWidthExpandSmall textCenter>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
    </Grid>
    <Grid collapse childWidthExpandSmall textCenter marginTopLarge>
        <Panel>
            <Card backgroundMuted body>Item</Card>
        </Panel>
        <Panel>
            <Card backgroundPrimary body>Item</Card>
        </Panel>
        <Panel>
            <Card backgroundSecondary body>Item</Card>
        </Panel>
    </Grid>
</React.Fragment>
```

------

#### Column and Row
To apply a different gap to just the column or row, add one of the following props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <div style="color:salmon">columnSmall</div><div style="color:salmon">rowSmall</div> | Add one of these props to apply a small gap to the column or row. |
| <div style="color:salmon">columnMedium</div><div style="color:salmon">rowMedium</div> | Add one of these props to apply a medium gap to the column or row. |
| <div style="color:salmon">columnLarge</div><div style="color:salmon">rowLarge</div> | Add one of these props to apply a large gap to the column or row. |
| <div style="color:salmon">columnCollapse</div><div style="color:salmon">rowCollapse</div> | Add one of these props to remove the grid gap entirely from the column or row. |

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid columnSmall rowLarge childWidthSmall="1-3" textCenter>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
    </Grid>
</React.Fragment>
```

------

### Nested grid
You can easily extend your grid layout with nested grids.

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid childWidth="1-2" textCenter>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Grid childWidth="1-2" textCenter>
            <Panel>
                <Card primary body>Item</Card>
            </Panel>
            <Panel>
                <Card primary body>Item</Card>
            </Panel>
        </Grid>
    </Grid>
</React.Fragment>
```

------

### Divider modifier
Add the `divider` prop to separate grid cells with lines. This class can be combined with the gap modifiers. As soon as the grid stacks, the divider lines will become horizontal.

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid divider childWidthExpandSmall>
        <Card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
        <Card>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
        <Card>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Card>
    </Grid>
</React.Fragment>
```

------

### Match height
To match the height of the direct child of each cell, add the `match` prop. This is needed to match the height of cards from the <a href='#/Card' target='blank'>Card component</a>.

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid match childWidthExpandSmall textCenter>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item<br/>...</Card>
        </Panel>
        <Panel>
            <Card default body>Item<br/>...<br/>...</Card>
        </Panel>
    </Grid>
</React.Fragment>
```

------

#### Match only one cell
You can also match the height of the direct child of just one cell. To do so, use `<Grid.ItemMatch/>` component to the grid item whose child you want to match.

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid childWidthExpandSmall textCenter>
        <Grid.ItemMatch>
            <Card default body>
                <h3>Heading</h3>
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
            </Card>
        </Grid.ItemMatch>
        <Panel>
            <h3>Heading</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </Panel>
    </Grid>
</React.Fragment>
```

------

#### Targets
For a more specific selection of the elements whose heights should be matched, add the target: SELECTOR option to the <a href='#/Height' target='blank'>Height component</a>.
IMPORTANT!TODO Fix this part once <a href='#/Height' target='blank'>Height component</a> is ready
```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid childWidthExpandSmall textCenter>
        <Grid.ItemMatch>
            <Card default body>
                <h3>Heading</h3>
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
            </Card>
        </Grid.ItemMatch>
        <Panel>
            <h3>Heading</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </Panel>
    </Grid>
</React.Fragment>
```

------

### Grid and width
The grid is mostly used in combination with the <a href='#/Width' target='blank'>Width component</a>. This allows for great flexibility when determining the column widths.

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid textCenter>
        <Panel widthAutoMedium>
            <Card default body>Auto</Card>
        </Panel>
        <Panel widthMedium="1-3">
            <Card default body>1-3</Card>
        </Panel>
        <Panel widthExpandMedium>
            <Card default body>Expand</Card>
        </Panel>
    </Grid>
</React.Fragment>
```

------

#### Child width
If the grid columns are evenly split, you can add one of the `childWidth*` props to the grid container instead of adding a class to each of the items.

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid childWidthSmall="1-2" childWidthMedium="1-3" textCenter>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
    </Grid>
</React.Fragment>
```
For more detailed information, take a look at the <a href='#/Width' target='blank'>Width component</a>.

------

### Grid and flex
You can easily combine the grid with the <a href='#/Flex' target='blank'>Flex component</a>.
That way you can modify the items' alignment, ordering, direction and wrapping.
This allows you, for example, to flip the cells' display order for wider viewports.
All this works together with the gap and divider modifiers.

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid small childWidthSmall="1-4" flexCenter textCenter>
        <Panel>
            <Card default body>Item 1</Card>
        </Panel>
        <Panel flexLast>
            <Card secondary body>Item 2</Card>
        </Panel>
        <Panel>
            <Card default body>Item 3</Card>
        </Panel>
        <Panel>
            <Card default body>Item 4</Card>
        </Panel>
        <Panel flexFirst>
            <Card primary body>Item 5</Card>
        </Panel>
        <Panel>
            <Card default body>Item 6</Card>
        </Panel>
    </Grid>
</React.Fragment>
```

------

### Masonry
If grid cells have different heights, a layout free of gaps can be created by adding `masonry="<BOOLEAN>"` attribute.
IMPORTANT!TODO Fix this part once <a href='#/Height' target='blank'>Height component</a> is ready
```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid small childWidthSmall="1-2" childWidthMedium="1-3" masonry="true">
        <Panel>
            <Card default flex flexCenter flexMiddle style="height: 100px">Item</Card>
        </Panel>
        <Panel>
            <Card default flex flexCenter flexMiddle style="height: 130px">Item</Card>
        </Panel>
        <Panel>
            <Card default flex flexCenter flexMiddle style="height: 150px">Item</Card>
        </Panel>
        <Panel>
            <Card default flex flexCenter flexMiddle style="height: 160px">Item</Card>
        </Panel>
        <Panel>
            <Card default flex flexCenter flexMiddle style="height: 120px">Item</Card>
        </Panel>
        <Panel>
            <Card default flex flexCenter flexMiddle style="height: 140px">Item</Card>
        </Panel>
        <Panel>
            <Card default flex flexCenter flexMiddle style="height: 200px">Item</Card>
        </Panel>
        <Panel>
            <Card default flex flexCenter flexMiddle style="height: 180px">Item</Card>
        </Panel>
        <Panel>
            <Card default flex flexCenter flexMiddle style="height: 140px">Item</Card>
        </Panel>
    </Grid>
</React.Fragment>
```
NOTE: You can view more examples in the tests for the <a href="https://getuikit.com/assets/uikit/tests/grid-masonry.html">Grid Masonry</a>.

------

### Filter and order
Grid items can also be filtered and sorted by category, date or other meta data.
Take a look at the <a href='#/Filter' target='blank'>Filter component</a>.

------

### Parallax
To move single columns of a grid at different speeds while scrolling, just add `parallax="<NUMBER>"` attribute.
The number sets the parallax translation in pixels.
This effect can be applied to two types of markup.
The following example uses three defined columns with three items each.

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid childWidthExpandSmall textCenter parallax="150">
        <Panel>
            <Card default body>Item</Card>
            <Card default body>Item</Card>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
            <Card default body>Item</Card>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
            <Card default body>Item</Card>
            <Card default body>Item</Card>
        </Panel>
    </Grid>
</React.Fragment>
```
The parallax effect is also applied if grid columns wrap into the next row, as shown in the next example.

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid childWidthSmall="1-2" childWidthMedium="1-3" childWidthLarge="1-4"textCenter parallax="150">
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
        <Panel>
            <Card default body>Item</Card>
        </Panel>
    </Grid>
</React.Fragment>
```
NOTE: You can view more examples in the <a href='#/Grid' target='blank'>Grid Parallax</a> tests.

------

### Component options
Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. <a href='https://getuikit.com/docs/javascript#component-configuration' target='blank'>Learn more</a>

| OPTION  | VALUE       | DEFAULT     | DESCRIPTION  |
| ------- | ----------- | ----------- | ------------ |
| <span style="color:salmon">margin</span> | String | uk-grid-margin | This class is added to items that break into the next row, typically to create margin to the previous row. |
| <span style="color:salmon">first-column</span> | String | uk-first-column | This class is added to the first element in each row. |
| <span style="color:salmon">masonry</span> | Boolean | false | Enables masonry layout for this grid. |
| <span style="color:salmon">parallax</span> | Number | 0 | Parallax translation value. The value must be a positive integer. Falsy disables the parallax effect (default). |

------

### JavaScript
Learn more about <a href='https://getuikit.com/docs/javascript#programmatic-use' target='blank'>JavaScript components</a>.
