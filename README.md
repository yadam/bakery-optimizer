# Bakery Oven Optimizer

## Overview

A single page application to optimize oven usage for a fictional bakery. Oven usage is optimized based on the following rules:

1. One batch of each bread type will be baked in either pan or round loaves
1. Each customer must get at least one item of their preference
1. Prefer pan loaves over round loaves in order to optimize oven space

## Architecture

This application builds out several components in order to assemble the UI and perform the operations. It utilized a starter template using Next.js and Material-UI. In a larger application I would separate these files into appropriate folders in order to separate concerns and make things easier to find. In an application this small, however, I didn't feel that was necessary.

- AppContext
  - Contains a React context that the application uses to share data while avoiding prop drilling
- Breads
  - The component to add and display bread types
- Copyright
  - This component came with the provided starter template and provides a convenient footer
- Customers
  - The component to add and display customer orders
- optimizer
  - The service that performs the depth-first-search of the tree to find the optimal solution
- Result
  - The component that displays the results of the optimizer calculation

## Installation and Running

### Install Dependencies

```bash
$ yarn install
```

### Start Developer Mode

```bash
$ yarn dev
```

### Run Unit Tests

```bash
$ yarn test
```
