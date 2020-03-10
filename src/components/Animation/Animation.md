https://getuikit.com/docs/animation

#### A collection of smooth animations to use within your page.


### Fade Modifier
| PROPS | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">fade</span> | The element fades in. |

```jsx
import { Animation, Card, Grid } from '../';

<React.Fragment>
    <Grid childWidth="1-2" childWidthSmall="1-4" match>
        <Animation fade>
            <Card default body textCenter>Fade</Card>
        </Animation>
    </Grid>
</React.Fragment>
```


### Scale Modifier
| PROPS | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">scale up</span>| The element fades in and scales up. |
| <span style="color:salmon">scale down</span>| The element fades in and scales down. |

```jsx
import { Animation, Card, Grid } from '../';

<React.Fragment>
    <Grid childWidth="1-2" childWidthSmall="1-4" match>
        <Animation scale up>
            <Card default body textCenter>Scale Up</Card>
        </Animation>
        <Animation scale down>
            <Card default body textCenter>Scale Down</Card>
        </Animation>
    </Grid>
</React.Fragment>
```


### Shake Modifier
| PROPS | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">shake</span> | The element shakes. |

```jsx
import { Animation, Card, Grid } from '../';

<React.Fragment>
    <Grid childWidth="1-2" childWidthSmall="1-4" match>
        <Animation shake>
            <Card default body textCenter>Shake</Card>
        </Animation>
    </Grid>
</React.Fragment>
```


### Slide Modifier
| PROPS | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">slide left</span>| The element fades and slides in from the left. |
| <span style="color:salmon">slide top</span>| The element fades and slides in from the top. |
| <span style="color:salmon">slide bottom</span>| The element fades and slides in from the bottom. |
| <span style="color:salmon">slide right</span>| The element fades and slides in from the right. |

```jsx
import { Animation, Card, Grid } from '../';

<React.Fragment>
    <Grid childWidth="1-2" childWidthSmall="1-4" match>
        <Animation slide left>
            <Card default body textCenter>Slide Left</Card>
        </Animation>
        <Animation slide top>
            <Card default body textCenter>Slide Top</Card>
        </Animation>
        <Animation slide bottom>
            <Card default body textCenter>Slide Bottom</Card>
        </Animation>
        <Animation slide right>
            <Card default body textCenter>Slide Right</Card>
        </Animation>
    </Grid>
</React.Fragment>
```


### Reverse Modifier
| PROPS | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">reverse slide left</span>| The element fades and slides in from the middle to left. |
| <span style="color:salmon">reverse slide top</span>| The element fades and slides in from the middle to top. |
| <span style="color:salmon">reverse slide bottom</span>| The element fades and slides in from the middle to bottom. |
| <span style="color:salmon">reverse slide right</span>| The element fades and slides in from the middle to right. |

```jsx
import { Animation, Card, Grid } from '../';

<React.Fragment>
    <Grid childWidth="1-2" childWidthSmall="1-4" match>
        <Animation reverse slide left>
            <Card default body textCenter>Reverse Slide Left</Card>
        </Animation>
        <Animation reverse slide top>
            <Card default body textCenter>Reverse Slide Top</Card>
        </Animation>
        <Animation reverse slide bottom>
            <Card default body textCenter>Reverse Slide Bottom</Card>
        </Animation>
        <Animation reverse slide right>
            <Card default body textCenter>Reverse Slide Right</Card>
        </Animation>
    </Grid>
</React.Fragment>
```


### Slide Duration Modifier
| PROPS | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">small</span>| The element fades and slides in from the top. |
| <span style="color:salmon">medium</span>| The element fades and slides in from the top. |

```jsx
import { Animation, Card, Grid } from '../';

<React.Fragment>
    <Grid childWidth="1-2" childWidthSmall="1-4" match>
        <Animation small slide left>
            <Card default body textCenter>Slide Left Small</Card>
        </Animation>
        <Animation small slide top>
            <Card default body textCenter>Slide Top Small</Card>
        </Animation>
        <Animation small slide bottom>
            <Card default body textCenter>Slide Bottom Small</Card>
        </Animation>
        <Animation small slide right>
            <Card default body textCenter>Slide Right Small</Card>
        </Animation>
        <Animation medium slide left>
            <Card default body textCenter>Slide Left Medium</Card>
        </Animation>
        <Animation medium slide top>
            <Card default body textCenter>Slide Top Medium</Card>
        </Animation>
        <Animation medium slide bottom>
            <Card default body textCenter>Slide Bottom Medium</Card>
        </Animation>
        <Animation medium slide right>
            <Card default body textCenter>Slide Right Medium</Card>
        </Animation>
    </Grid>
</React.Fragment>
```


### Fast Modifier
| PROPS | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">fast</span>| To play animations at a faster speed, add the fast prop to the element. |

```jsx
import { Animation, Card, Panel } from '../';

<React.Fragment>
    <Panel widthSmall="1-3">
        <Animation fade fast>
            <Card default body>Fade Fast</Card>
        </Animation>
    </Panel>
</React.Fragment>
```


### Origin Modifiers
| PROPS | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">origin top left</span>| Animation originates from the top left. |
| <span style="color:salmon">origin top center</span>| Animation originates from the top center. |
| <span style="color:salmon">origin top right</span>| Animation originates from the top right. |
| <span style="color:salmon">origin bottom left</span>| Animation originates from the bottom left. |
| <span style="color:salmon">origin bottom center</span>| Animation originates from the bottom center. |
| <span style="color:salmon">origin bottom right</span>| Animation originates from the bottom right. |

```jsx
import { Animation, Card, Grid, Paragraph } from '../';

<React.Fragment>
    <Grid childWidthSmall="1-3">
        <Animation sclae up origin top left>
            <Card default body>
                <Paragraph textCenter>Origin Top Left</Paragraph>
            </Card>
        </Animation>
        <Animation sclae up origin top center>
            <Card default body>
                <Paragraph textCenter>Origin Top Center</Paragraph>
            </Card>
        </Animation>
        <Animation sclae up origin top right>
            <Card default body>
                <Paragraph textCenter>Origin Top Right</Paragraph>
            </Card>
        </Animation>
    </Grid>
    <Grid childWidthSmall="1-3">
        <Animation sclae up origin bottom left>
            <Card default body>
                <Paragraph textCenter>Origin Bottom Left</Paragraph>
            </Card>
        </Animation>
        <Animation sclae up origin bottom center>
            <Card default body>
                <Paragraph textCenter>Origin Bottom Center</Paragraph>
            </Card>
        </Animation>
        <Animation sclae up origin bottom right>
            <Card default body>
                <Paragraph textCenter>Origin Bottom Right</Paragraph>
            </Card>
        </Animation>
    </Grid>
</React.Fragment>
```

### Ken Burns Modifier
| PROPS | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">kenBurns</span>| Adds the Ken Burns effect with the kenBurns prop. |
| <span style="color:salmon">kenBurns reverse</span>| Adds the reverse Ken Burns effect with the reverse prop. |

```jsx
import { Animation, Grid, Image, Overflow, Panel, Scrollspy } from '../';

<React.Fragment>
    <Grid small childWidthSmall="1-2">
        <Panel>
            <Overflow hidden>
                <Scrollspy>
                    <Animation kenBurns>
                        </Animation>
                </Scrollspy>
            </Overflow>
        </Panel>
        <Panel>
            <Overflow hidden>
                <Scrollspy>
                    <Animation kenBurns reverse>
                        </Animation>
                </Scrollspy>
            </Overflow>
        </Panel>
    </Grid>
</React.Fragment>
```
