# react-asset v1.1.0

`react-asset` is a React package designed to automatically generate constant variables for asset files located in the public folder of a React project.

It scans all files within the public directory and its subdirectories, then creates exportable constants with camelCase naming convention. The generated constants reference the file paths and are stored in the src/assets.ts file.

## Installation

Using npm:

```shell

$ npm i --save-dev react-asset

```

## Usage

** Executing the `react-asset` Package**

To execute the **`react-asset`** package:

**1.** Ensure that you have a **`public`** folder containing your asset files.
**2.** Run the following command in your project folder:

```shell

$ npx react-asset

```

For examples if you have:

```md
├── src
│ ├── ...
├── public
│ ├── images
│ │ ├── image1.png
│ │ ├── image2.jpg
│ ├── logo.svg
```

The `react-asset` package will generate the following constants:

- `rAssetLogoSvg` for`/logo.svg`
- `rAssetImagesImage1Png` for`/images/image1.png`
- `rAssetImagesImage2Jpg` for`/images/image2.jpg`

You can then use the generated constants in your components, assuming that assets.ts is located in src/ folder of your project:

```jsx
import { rAssetLogoSvg } from './assets';

const App = () => {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={rAssetLogoSvg} className="logo react" alt="React logo" />
      </a>
    </div>
  );
};
```

See the [package source](https://github.com/lonie12/react-assets) for more details.

## License

[MIT](LICENSE)
