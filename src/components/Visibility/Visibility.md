https://getuikit.com/docs/visibility

### Define the width of elements for different viewport sizes.
Use responsive visibility props to display or hide elements on different devices.

<br /><br /><hr />

### Usage
Add one of these props to hide an element.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">hidden</span> | Hides the element on any device. |
| <span style="color:salmon">invisible</span> | Hides the element without removing it from the document flow. |

<br /><br /><hr />

### Responsive
This component provides responsive props to hide or display elements on different viewports.

#### Hidden
Use one of the props to hide the element from screens larger than a specified width.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">hiddenSmall</span> | Only affects device widths of <span style="color:salmon">640px</span> and larger. |
| <span style="color:salmon">hiddenMedium</span> | Only affects device widths of <span style="color:salmon">960px</span> and larger. |
| <span style="color:salmon">hiddenLarge</span> | Only affects device widths of <span style="color:salmon">1200px</span> and larger. |
| <span style="color:salmon">hiddenXLarge</span> | Only affects device widths of <span style="color:salmon">1600px</span> and larger. |


In this example the green elements are hidden on screens that are larger than the defined breakpoint.
Resize your browser window to see the effect.

```jsx
import { Card, Grid, Panel } from '../';
<React.Fragment>
    <Grid small childWidth="1-2" childWidthSmall="1-4" textCenter>
        <Panel panel>
            <Card default body>Expand</Card>
        </Panel>
        <Panel panel>
            <Card default body>width="1-3"</Card>
        </Panel>
        <Panel panel>
            <Card default body>Expand</Card>
        </Panel>
        <Panel panel>
            <Card default body>Expand</Card>
        </Panel>
    </Grid>
</React.Fragment>
```
