# GMT Cruise Ship Table

This repository contains a simple application, which fetches cruise ship data from [Global Multi-Resolution Topography Data Synthesis (GMRT)](https://www.gmrt.org/). The cursory data fetched is displayed in a table, which is sortable and filterable by the user.

Since the boilerplate code is already using redux toolkit, it was an easy choice to use RTK Query to do the data fetching. While a tiny application like this could probably stand to store data inside a component, that is rarely a good idea in complex applications.

In an effort not to spend too much time on this, I kept the sort and filter state in the table component itself. This is not ideal, as you may need access to those search/sort/filter parameters outside of the table component - alternatives to this tactic would be to either store the search/sort/filter in redux, or within react-router as part of the page's url parameters. Considering the dataset is so large, these parameters should probably be available on the api, so that search/sort/filter is done on the back end, rather than on the front end.

I brought in material-tailwind to make it quick and easy to set up good-looking components for tables, search bars, etc.

# Original Readme

From (https://github.com/Bedrock-Ocean-Open-Source/tide-pool)

## About

Tide-pool is a sandbox BRX project, built in [Typescript 4.9](https://www.typescriptlang.org) using [React 18](https://reactjs.org/).

**Noteworthy Tooling Included:**

- [Vite](https://github.com/vitejs) - Build tool and dev server
- [Redux-Toolkit](https://redux-toolkit.js.org/) - React/Redux State Management
- [TailwindCSS](https://tailwindcss.com) - CSS utilities
- [React-Map-GL](https://visgl.github.io/react-map-gl/) - React Wrapper for [Mapbox-GL](https://docs.mapbox.com/mapbox-gl-js)

## Developing

The project requires Node 18 to be installed on your local machine, refer to npm for [download instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

1. Install project dependencies

```sh
npm install
```

2. Start the Dev Server

```sh
npm run dev
```

The dev server will launch in your browser at [localhost:4444](localhost:4444) and will automatically reload as you make changes.
