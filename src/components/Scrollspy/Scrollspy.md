https://getuikit.com/docs/animation

#### Trigger events and animations while scrolling your page.

### Usage
The Scrollspy component listens to page scrolling and trigger events based on the scroll position.
For example, if you scroll down a page, and an element appears in the viewport for the first time, you can trigger a smooth animation to fade in the element.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon"></span> |  |
| <span style="color:salmon"></span> |  |

```jsx
import { Animation, Card, Grid, Paragraph, Panel, Scrollspy } from '../';

<React.Fragment>
    <Grid match childWidthMedium="1-2">
        <Panel>
            <Scrollspy>
                <Animation slide left>
                    <Card default body>
                        <Card.Title class="uk-card-title">Left</Card.Title>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                    </Card>
                </Animation>
            </Scrollspy>
        </Panel>
        <Panel>
            <Scrollspy>
                <Animation slide right>
                    <Card default body>
                        <Card.Title class="uk-card-title">Right</Card.Title>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                    </Card>
                </Animation>
            </Scrollspy>
        </Panel>
    </Grid>
</React.Fragment>
```
