# K-Line Chart Electron App

This is a professional K-Line chart application built with Electron.

## Prerequisites

- [Node.js](https://nodejs.org/) (Recommended version 16 or higher)

## Installation

1.  Open your terminal or command prompt in this directory.
2.  Install dependencies:
    ```bash
    npm install
    ```
    *Note: If you are in China, you might want to use a mirror for faster download:*
    ```bash
    npm config set registry https://registry.npmmirror.com
    npm install
    ```

## Running the App

To start the application:

```bash
npm start
```

## Features

- **Drag & Drop**: You can drag and drop `.xlsx` or `.xls` data files directly into the window.
- **Theme Switching**: Toggle between Dark and Light themes.
- **Interactive Chart**: Zoom, pan, and inspect data points.

## Packaging (Optional)

To package the app for distribution (e.g., .exe or .dmg), you can use `electron-builder`.

1.  **Install electron-builder**:
    ```bash
    npm install electron-builder --save-dev
    ```

2.  **Run Build**:
    ```bash
    npm run build
    ```

    The packaged `.exe` installer will be located in the `dist` folder.

    *Note: You can add an `icon.ico` file to the root directory to customize the application icon.*

