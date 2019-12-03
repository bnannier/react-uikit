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
import { Card, Grid, Panel } from '../';

<React.Fragment>
    <Grid childWidth="1-2" childWidthSmall="1-4" match>
        <Panel animationToggle>
            <Card default body animationFade textCenter>Fade</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationScaleUp textCenter>Scale Up</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationScaleDown textCenter>Scale Down</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationShake textCenter>Shake</Card>
        </Panel>

        <Panel animationToggle>
            <Card default body animationSlideLeft textCenter>Left</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideTop textCenter>Top</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideBottom textCenter>Bottom</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideRight textCenter>Right</Card>
        </Panel>

        <Panel animationToggle>
            <Card default body animationSlideLeftSmall textCenter>Left Small</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideTopSmall textCenter>Top Small</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideBottomSmall textCenter>Bottom Small</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideRightSmall textCenter>Right Small</Card>
        </Panel>

        <Panel animationToggle>
            <Card default body animationSlideLeftMedium textCenter>Left Medium</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideTopMedium textCenter>Top Medium</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideBottomMedium textCenter>Bottom Medium</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideRightMedium textCenter>Right Medium</Card>
        </Panel>
    </Grid>
</React.Fragment>
```

### Reverse Modifier
By default, all animations are incoming. To reverse any animation, add the animationReverse prop.


```jsx
import { Card, Grid, Panel } from '../';

<React.Fragment>
    <Grid childWidth="1-2" childWidthSmall="1-4" match>
        <Panel animationToggle>
            <Card default body animationFade animationReverse textCenter>Fade</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationScaleUp animationReverse textCenter>Scale Up</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationScaleDown animationReverse textCenter>Scale Down</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationShake animationReverse textCenter>Shake</Card>
        </Panel>

        <Panel animationToggle>
            <Card default body animationSlideLeft animationReverse textCenter>Left</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideTop animationReverse textCenter>Top</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideBottom animationReverse textCenter>Bottom</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideRight animationReverse textCenter>Right</Card>
        </Panel>

        <Panel animationToggle>
            <Card default body animationSlideLeftSmall animationReverse textCenter>Left Small</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideTopSmall animationReverse textCenter>Top Small</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideBottomSmall animationReverse textCenter>Bottom Small</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideRightSmall animationReverse textCenter>Right Small</Card>
        </Panel>

        <Panel animationToggle>
            <Card default body animationSlideLeftMedium animationReverse textCenter>Left Medium</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideTopMedium animationReverse textCenter>Top Medium</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideBottomMedium animationReverse textCenter>Bottom Medium</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationSlideRightMedium animationReverse textCenter>Right Medium</Card>
        </Panel>
    </Grid>
</React.Fragment>
```

### Fast Modifier
To play animations at a faster speed, add the animationFast prop to the element.

```jsx
import { Card, Panel } from '../';

<React.Fragment>
    <Panel widthSmall="1-3">
        <Panel animationToggle>
            <Card default body animationFast animationFade>Fade</Card>
        </Panel>
    </Panel>
</React.Fragment>
```

### Origin Modifiers
By default, scaling animations originate from the center.
To modify this behavior, add one of the transformOrigin* prop from the Utility component.
