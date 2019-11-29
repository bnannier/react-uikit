### Usage
React-uikit uses panels to outline certain sections of your content. These can be arranged in grid columns from the Grid component component, for example.

#### Panel

| VALUE  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:darkturquoise">panel</span> | Add the pnael props to a <Panel> component to create a position context, set box-sizing to border-box, apply a clearfix and to remove the bottom margin of its last child element. |

```jsx
import { Card, Grid, Panel } from '../';

<React.Fragment>
    <Grid childWidthSmall="1-3">
        <Panel panel>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
        <Panel panel>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
        <Panel panel>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
    </Grid>
</React.Fragment>
```

<br /><br /><hr />

#### Scrollable Panel

| VALUE  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:darkturquoise">scrollable</span> | Add the scrollable props to give the panel a fixed height and make it scrollable, if its content exceeds the height. You can also add one of the .uk-height-* classes to apply a different height. |

```jsx
import { Card, Grid, Panel } from '../';

<React.Fragment>
    <Panel panel scrollable>s
    </Panel>
</React.Fragment>
```
