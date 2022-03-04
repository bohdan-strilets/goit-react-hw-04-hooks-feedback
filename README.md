# Feedback Widget

Like most companies, Expresso collects feedback from its customers. Your task is
to create an application for collecting statistics. There are only three options
feedback: good, neutral and bad.

## Step 1

The app should display the number of reviews collected for each category. The
application should not save feedback statistics between different sessions (page
refresh).

The application state must be of the following form, add new properties cannot
be.

```bash
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
```

## Step 2

Expand the functionality of the application so that the interface displays more
statistics about the collected reviews. Add a display of the total number of
collected reviews from all categories and the percentage of positive reviews. To
do this, create helper methods that calculate these values based on data in
state (calculated data).

## Step 3

Refactor the application. Application state should remain in root component
`<App>`.

- Move the display of statistics to a separate component
- Move the block of buttons to the component
- Create a `<Section>` component that renders a section with a title and
  children (children)

## Step 4

Extend the functionality of the application so that the statistics block is
rendered only after how at least one review was collected. Missing statistics
message move it to the `<Notification>` component.
