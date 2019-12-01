https://getuikit.com/docs/height

#### Utilize the power of flexbox to create a wide range of layouts.
Define the height of elements depending on the viewport or match the heights of different elements.

### Usage
react-uikit provides a number of useful classes to alter an element's height.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">height1_1</span> | This class applies a height of 100%. This only works if the parent element has a set height. |
| <span style="color:salmon">heightSmall</span><br /><span style="color:salmon">heightMaxSmall</span> | These prop apply a height or max-height of <span style="color:salmon">150px</span>. |
| <span style="color:salmon">heightMedium</span><br /><span style="color:salmon">heightMaxMedium</span> | These prop apply a height or max-height of <span style="color:salmon">300px</span>. |
| <span style="color:salmon">heightLarge</span><br /><span style="color:salmon">heightMaxLarge</span> | These prop apply a height or max-height of <span style="color:salmon">450px</span>. |

```jsx
import { Card, Grid, Panel } from '../';

<React.Fragment>
    <Grid childWidthSmall="1-3">
        <Panel>
            <Card default body heightSmall flex>Small</Card>
        </Panel>
        <Panel>
            <Card default body heightMedium>Medium</Card>
        </Panel>
        <Panel>
            <Card default body heightLarge>Large</Card>
        </Panel>
    </Grid>
</React.Fragment>
```