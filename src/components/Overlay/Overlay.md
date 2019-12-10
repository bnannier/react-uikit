### Overlay
https://getuikit.com/docs/overlay

#### Create an image overlay, which comes in different styles.
Add the overlay props to an element following an image to create the overlay panel.
To create a position context, add the inline prop from the Utility component to a container element around both.
Finally, add one of the position* prop from the Position component to align the overlay.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">overlay</span> | Add the overlay prop to an element following an image to create the overlay panel. |
| <span style="color:salmon">overlayDefault</span> | Used for a simple background color. |
| <span style="color:salmon">overlayPrimary</span> | Used for a prominent background color. |

```jsx
import { Image, Panel, Paragraph } from '../';

<React.Fragment>
    <Panel inline>
        <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
        <Panel overlay light positionBottom>
            <Paragraph>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </Panel>
    </Panel>
</React.Fragment>
```

### Style Modifiers
By default, the overlay has padding, but no additional styling.
Add one of these modifier props to add a background color to the overlay.

```jsx
import { Grid, Image, Panel, Paragraph } from '../';

<React.Fragment>
    <Grid childWidthMedium="1-2">
        <Panel>
            <Panel inline>
                <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
                <Panel overlay overlayDefault positionBottom>
                    <Paragraph>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline>
                <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
                <Panel overlayDefault positionCover></Panel>
                <Panel overlay positionBottom dark>
                    <Paragraph>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                </Panel>
            </Panel>
        </Panel>
    </Grid>
</React.Fragment>
```

### Primary
For a prominent background color, add the overlayPrimary prop.

```jsx
import { Grid, Image, Panel, Paragraph } from '../';

<React.Fragment>
    <Grid childWidthMedium="1-2">
        <Panel>
            <Panel inline>
                <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
                <Panel overlay overlayPrimary positionBottom>
                    <Paragraph>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline>
                <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
                <Panel overlayPrimary positionCover></Panel>
                <Panel overlay positionBottom light>
                    <Paragraph>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                </Panel>
            </Panel>
        </Panel>
    </Grid>
</React.Fragment>
```

### Overlay Icon
To display an overlay icon, add the overlayIcon attribute to a <span> element inside the overlay.

```jsx
import { Grid, Image, Panel, Paragraph } from '../';

<React.Fragment>
    <Grid childWidthMedium="1-2">
        <Panel>
            <Panel inline light>
                <Image src="https://getuikit.com/docs/images/dark.jpg" alt="" />
                <Panel positionCenter>
                    <Panel overlayIcon />
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline dark>
                <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
                <Panel overlayDefault positionCover>
                    <Panel positionCenter>
                        <Panel overlayIcon />
                    </Panel>
                </Panel>
            </Panel>
        </Panel>
    </Grid>
</React.Fragment>
```

### Position
Add one of the position* props from the Position component to align the overlay.

```jsx
import { Grid, Image, Panel, Paragraph } from '../';

<React.Fragment>
    <Grid childWidthMedium="1-2">
        <Panel>
            <Panel inline>
                <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
                <Panel overlay overlayDefault positionTop>
                    <Paragraph overlayIcon>Top</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline>
                <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
                <Panel overlay overlayDefault positionCenter>
                    <Paragraph overlayIcon>Center</Paragraph>
                </Panel>
            </Panel>
        </Panel>
    </Grid>
</React.Fragment>
```
