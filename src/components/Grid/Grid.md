https://getuikit.com/docs/width

### Define the width of elements for different viewport sizes.
UIkit's Width component is often used in combination with grids to split content into responsive columns.
You can apply fractions, automatic width or expand units to fill the remaining space and combine these modes.

### Usage
Add one of the width* (width, widthS, widthM, widthL, widthXL) props to an element to determine its size.
Typically, you would use a grid from the Grid component and its child elements to create the units.

### Style modifiers
xxx

```jsx
import Card from '../Card';
<React.Fragment>
    <Grid>
        <Card>item</Card>
        <Card>item</Card>
        <Card>item</Card>
    </Grid>
</React.Fragment>
```
xxx

### Size modifiers
xxx

```jsx
import Width from '../Width';
<React.Fragment>
    <Grid>
        <Width auto>
            <div class="uk-width-auto uk-card uk-card-default uk-card-body">Auto</div>
        </Width>
        <Width expand>
            <div class="uk-width-expand uk-card uk-card-default uk-card-body">Expand</div>
        </Width>
    </Grid>
</React.Fragment>
```
