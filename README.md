# GMT Cruise Ship Table

This repository contains a simple application, which fetches cruise ship data from [Global Multi-Resolution Topography Data Synthesis (GMRT)](https://www.gmrt.org/). The cursory data fetched is displayed in a table, which is sortable and filterable by the user.

Since the boilerplate code is already using redux toolkit, it was an easy choice to use RTK Query to do the data fetching. While a tiny application like this could probably stand to store data inside a component, that is rarely a good idea in complex applications.

I brought in material-tailwind to make it quick and easy to set up good-looking components for tables, search bars, etc.

One feature I would have liked to add to this would be a customization dialog, where the user can select what data columns they want to see. I opted to only show the few columns that made sense to me, but allowing users to customize complex tables would probably be worthwhile.

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
