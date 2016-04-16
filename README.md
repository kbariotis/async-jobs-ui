# Async Jobs UI
This is a project of mine in order to get my hands into [React](https://facebook.github.io/react/)/[Flux](https://facebook.github.io/react/docs/flux-overview.html)/[Webpack](https://webpack.github.io/). It's a UI
that is being updating by async long running jobs for better monitoring. In it's
core is a simple REST API that accepts updates from external jobs and updates a
React/Bootstrap based UI.

Theme inspired from https://dribbble.com/shots/1389890-Admin-Dashboard
Boilerplate used https://github.com/likewinter/react-bootstrap-webpack-boilerplate

**This is still in experimental mode**
TODO:
- [] Figure out the Production build/run process
- [] Add pagination to the Jobs table
- [] Enhance test suite
- Any suggestions? [Open an issue]((https://github.com/kbariotis/async-jobs-ui/issues)

## Usage
To run the server for development
`npm run dev`

To run the test suite
`npm test`

## API
`POST /jobs` - Create a New Job
```
{
  "label": "A long running Job",
  "percent": 20
}
```

`PUT /jobs/:id` - Update a Job
```
 "percent": 20
```

`DELETE /jobs/:id` - Delete a Job

## License
See [LICENSE.md](https://github.com/kbariotis/async-jobs-ui/blob/master/LICENSE.md)
