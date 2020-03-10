https://getuikit.com/docs/animation

#### A collection of smooth animations to use within your page.

### Usage
Add one of the animation props to any element.
The animation is shown when the prop is added, so usually immediately on page load.
To show the animation at another point, for example when the element enters the viewport, you would add the class using JavaScript — with the Scrollspy component for instance.
This is what happens in many of react-uikit's components that make use of animations.
All animations themselves are implemented with CSS, so they do not require JavaScript to play.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">animationToggle</span> | To toggle an animation on hover or focus, add the animationToggle prop to a parent element. |
| <span style="color:salmon">animationFade</span> | The element fades in. |
| <span style="color:salmon">animationScaleUp</span><br /><span style="color:salmon">animationScaleDown</span> | The element fades in and scales up or down. |
| <span style="color:salmon">animationSlideTop</span><br /><span style="color:salmon">animationSlideBottom</span><br /><span style="color:salmon">animationSlideLeft</span><br /><span style="color:salmon">animationSlideRight</span> | The element fades and slides in from the top, bottom, left or right by its own height or width. |
| <span style="color:salmon">animationSlideTopSmall</span><br /><span style="color:salmon">animationSlideBottomSmall</span><br /><span style="color:salmon">animationSlideLeftSmall</span><br /><span style="color:salmon">animationSlideRightSmall</span> | The element fades and slides in from the top, bottom, left or right with a smaller distance which is specified by a fixed pixel value. |
| <span style="color:salmon">animationSlideTopMedium</span><br /><span style="color:salmon">animationSlideBottomMedium</span><br /><span style="color:salmon">animationSlideLeftMedium</span><br /><span style="color:salmon">animationSlideRightMedium</span> | The element fades and slides in from the top, bottom, left or right with a medium distance which is specified by a fixed pixel value. |
| <span style="color:salmon">animationKenBurns</span> | The element scales very slowly up without fading in. |
| <span style="color:salmon">animationShake</span> | The element shakes. |
| <span style="color:salmon">animationStroke</span> | The SVG element strokes are drawn. |

### Size Modifiers
Add one of the following classes to the container to apply a different max-width.

```jsx
import { Animation, Card, Grid } from '../';

<React.Fragment>
    <Grid childWidth="1-2" childWidthSmall="1-4" match>
        <Animation fade>
            <Card default body textCenter>Fade</Card>
        </Animation>
        <Animation scale up>
            <Card default body textCenter>Scale Up</Card>
        </Animation>
        <Animation scale down>
            <Card default body textCenter>Scale Down</Card>
        </Animation>
        <Animation shake>
            <Card default body textCenter>Shake</Card>
        </Animation>

        <Animation slide left>
            <Card default body textCenter>Left</Card>
        </Animation>
        <Animation slide top>
            <Card default body textCenter>Top</Card>
        </Animation>
        <Animation slide bottom>
            <Card default body textCenter>Bottom</Card>
        </Animation>
        <Animation slide right>
            <Card default body textCenter>Right</Card>
        </Animation>

        <Animation small slide left>
            <Card default body textCenter>Left Small</Card>
        </Animation>
        <Animation small slide top>
            <Card default body textCenter>Top Small</Card>
        </Animation>
        <Animation small slide bottom>
            <Card default body textCenter>Bottom Small</Card>
        </Animation>
        <Animation small slide right>
            <Card default body textCenter>Right Small</Card>
        </Animation>

        <Animation medium slide left>
            <Card default body textCenter>Left Medium</Card>
        </Animation>
        <Animation medium slide top>
            <Card default body textCenter>Top Medium</Card>
        </Animation>
        <Animation medium slide bottom>
            <Card default body textCenter>Bottom Medium</Card>
        </Animation>
        <Animation medium slide right>
            <Card default body textCenter>Right Medium</Card>
        </Animation>
    </Grid>
</React.Fragment>
```

### Reverse Modifier
By default, all animations are incoming. To reverse any animation, add the animationReverse prop.

```jsx
import { Animation, Card, Grid } from '../';

<React.Fragment>
    <Grid childWidth="1-2" childWidthSmall="1-4" match>
        <Animation fade reverse>
            <Card default body textCenter>Fade</Card>
        </Animation>
        <Animation scale up reverse>
            <Card default body textCenter>Scale Up</Card>
        </Animation>
        <Animation scale down reverse>
            <Card default body textCenter>Scale Down</Card>
        </Animation>
        <Animation shake reverse>
            <Card default body textCenter>Shake</Card>
        </Animation>

        <Animation slide left reverse>
            <Card default body textCenter>Left</Card>
        </Animation>
        <Animation slide top reverse>
            <Card default body textCenter>Top</Card>
        </Animation>
        <Animation slide bottom reverse>
            <Card default body textCenter>Bottom</Card>
        </Animation>
        <Animation slide right reverse>
            <Card default body textCenter>Right</Card>
        </Animation>

        <Animation small slide left reverse>
            <Card default body textCenter>Left Small</Card>
        </Animation>
        <Animation small slide top reverse>
            <Card default body textCenter>Top Small</Card>
        </Animation>
        <Animation small slide bottom reverse>
            <Card default body textCenter>Bottom Small</Card>
        </Animation>
        <Animation small slide right reverse>
            <Card default body textCenter>Right Small</Card>
        </Animation>

        <Animation medium slide left reverse>
            <Card default body textCenter>Left Medium</Card>
        </Animation>
        <Animation medium slide top reverse>
            <Card default body textCenter>Top Medium</Card>
        </Animation>
        <Animation medium slide bottom reverse>
            <Card default body textCenter>Bottom Medium</Card>
        </Animation>
        <Animation medium slide right reverse>
            <Card default body textCenter>Right Medium</Card>
        </Animation>
    </Grid>
</React.Fragment>
```

### Fast Modifier
To play animations at a faster speed, add the animationFast prop to the element.

```jsx
import { Animation, Card, Panel } from '../';

<React.Fragment>
    <Panel widthSmall="1-3">
        <Animation fade fast>
            <Card default body>Fade</Card>
        </Animation>
    </Panel>
</React.Fragment>
```

### Origin Modifiers
By default, scaling animations originate from the center.
To modify this behavior, add one of the transformOrigin* prop from the Utility component.

```jsx
import { Animation, Card, Grid, Paragraph } from '../';

<React.Fragment>
    <Grid childWidthSmall="1-3">
        <Animation sclae up origin top left>
            <Card default body>
                <Paragraph textCenter>Top Left</Paragraph>
            </Card>
        </Animation>
        <Animation sclae up origin top center>
            <Card default body>
                <Paragraph textCenter>Top Center</Paragraph>
            </Card>
        </Animation>
        <Animation sclae up origin top right>
            <Card default body>
                <Paragraph textCenter>Top Right</Paragraph>
            </Card>
        </Animation>
    </Grid>
    <Grid childWidthSmall="1-3">
        <Animation sclae up origin bottom left>
            <Card default body>
                <Paragraph textCenter>Bottom Left</Paragraph>
            </Card>
        </Animation>
        <Animation sclae up origin bottom center>
            <Card default body>
                <Paragraph textCenter>Bottom Center</Paragraph>
            </Card>
        </Animation>
        <Animation sclae up origin bottom right>
            <Card default body>
                <Paragraph textCenter>Bottom Right</Paragraph>
            </Card>
        </Animation>
    </Grid>
</React.Fragment>
```

### Ken Burns
To add a simple Ken Burns effect, add the animationKenburns prop to any image.
You can also apply the animationReverse or one of the transformOrigin* props from the Utility component to modify the effect.

```jsx
import { Animation, Grid, Image, Overflow, Panel, Scrollspy } from '../';

<React.Fragment>
    <Grid small childWidthSmall="1-2">
        <Panel>
            <Overflow hidden>
                <Scrollspy>
                    <Animation kenBurns>
                        <Image src="https://getuikit.com/docs/images/dark.jpg" alt="Example image" />
                    </Animation>
                </Scrollspy>
            </Overflow>
        </Panel>
        <Panel>
            <Overflow hidden>
                <Scrollspy>
                    <Animation kenBurns reverse>
                        <Image src="https://getuikit.com/docs/images/dark.jpg" alt="Example image" />
                    </Animation>
                </Scrollspy>
            </Overflow>
        </Panel>
    </Grid>
</React.Fragment>
```
