# react-asset v1.0.1

[react-asset] react-asset is a React package designed to automatically generate constant variables for asset files located in the public folder of a React project.

It scans all files within the public directory and its subdirectories, then creates exportable constants with camelCase naming convention. The generated constants reference the file paths and are stored in the src/assets.ts file.

## Installation

Using npm:

```shell

$ npm i --save-dev react-asset

```

## Usage

To execute the react-asset package, run the following command in your project folder:

```shell

$ npx react-asset

```

See the [package source](https://github.com/lonie12/react-assets) for more details.

## License

[MIT](LICENSE)
