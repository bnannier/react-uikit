https://getuikit.com/docs/grid

### Create a fully responsive, fluid and nestable grid layout.
The Grid system of react-uikit allows you to arrange block elements in columns.  
It works closely together with the <a href='#/Width' target='blank'>Width component</a> to determine how much space of the container each item will take up, 
and it can also be combined with the <a href='#/Flex' target='blank'>Flex component</a> to align and order grid items.

### Usage
To create the grid container, use the Grid component.
Add child <a href='#/Width' target='blank'>Width component</a> to create the cells.  
By default, all grid cells are stacked.
To place them side by side, add one of the props from the <a href='#/Width' target='blank'>Width component</a>.  
Using .uk-child-width-expand will automatically apply equal width to items, regardless of how many there are.

Often cards from the <a href='#/Card' target='blank'>Card component</a> are used inside a grid. This also goes for the following examples for visualization.

```jsx
import { Card, Panel } from '../';
<React.Fragment>
    <Grid childWidthExpandSmall textCenter>
        <Panel>
            <Card default body>item</Card>
        </Panel>
        <Panel>
            <Card default body>item</Card>
        </Panel>
        <Panel>
            <Card default body>item</Card>
        </Panel>
    </Grid>
</React.Fragment>
```

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
            <Card default body>item</Card>
        </Panel>
        <Panel>
            <Card default body>item</Card>
        </Panel>
        <Panel>
            <Card default body>item</Card>
        </Panel>
    </Grid>
    <Grid medium childWidthExpandSmall textCenter>
        <Panel>
            <Card default body>item</Card>
        </Panel>
        <Panel>
            <Card default body>item</Card>
        </Panel>
        <Panel>
            <Card default body>item</Card>
        </Panel>
    </Grid>
    <Grid large childWidthExpandSmall textCenter>
        <Panel>
            <Card default body>item</Card>
        </Panel>
        <Panel>
            <Card default body>item</Card>
        </Panel>
        <Panel>
            <Card default body>item</Card>
        </Panel>
    </Grid>
    <Grid collapse childWidthExpandSmall textCenter marginLargeTop>
        <Panel>
            <Card backgroundMuted body>item</Card>
        </Panel>
        <Panel>
            <Card backgroundPrimary body>item</Card>
        </Panel>
        <Panel>
            <Card backgroundSecondary body>item</Card>
        </Panel>
    </Grid>
</React.Fragment>
```
