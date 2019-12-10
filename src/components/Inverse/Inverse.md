### Inverse
#### Inverse the style of any component for light or dark backgrounds.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <div style="color:salmon">light</div> | Add the light prop to improve the visibility of objects on dark backgrounds in a light style. |
| <div style="color:salmon">dark</div> | When using a dark style, add the dark class to elements on a light background. |

```jsx
import { Button, Grid, Panel, Paragraph } from '../';

<React.Fragment>
    <Grid childWidthSmall="1-2" >
        <Panel>
            <Panel light backgroundSecondary padding>
                <h3>Light</h3>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
                <Button>Button</Button>
            </Panel>
        </Panel>
        <Panel>
            <Panel dark backgroundMuted padding>
                <h3>Dark</h3>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
                <Button>Button</Button>
            </Panel>
        </Panel>
    </Grid>
</React.Fragment>
```
