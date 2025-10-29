# JSON Tree Visualizer

A modern, interactive web application that visualizes JSON data as an expandable tree structure, making it easier to understand and navigate complex JSON objects.

## Features

- **Interactive Tree Visualization**: Render JSON data as a collapsible tree structure
- **Dark/Light Mode**: Toggle between different color themes for better visibility
- **Search Functionality**: Quickly find specific nodes in large JSON structures
- **Copy to Clipboard**: Easily copy node values or the entire JSON structure
- **Responsive Design**: Works on both desktop and mobile devices
- **Export Options**: Save the visualization as an image

## Technologies Used

- React 18
- React Flow
- Dagre.js (for graph layout)
- Tailwind CSS (for styling)
- html2canvas (for image export)

## Getting Started

### Installation

1. Clone the repository:

   git clone [https://github.com/yourusername/json-tree-visualizer.git](https://github.com/yourusername/json-tree-visualizer.git)
   cd json-tree-visualizer

2. Install dependencies:
  npm install

3. Start the development server:
  npm start

4. Open http://localhost:3000 to view it in your browser.


### Usage
1. Enter or paste your JSON data into the input area
2. Click "Visualize" to generate the tree
3. Use the controls to:
- Expand/collapse nodes
- Search for specific values
- Toggle between dark/light themes
- Copy node values or the entire JSON
- Export the visualization as an image


## Project Structure

json-tree-visualizer/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── TreeVisualizer.jsx
│   │   ├── JsonInput.jsx
│   │   ├── SearchBar.jsx
│   │   └── ThemeToggle.jsx
│   ├── utils/           # Utility functions
│   │   ├── jsonToTree.js
│   │   └── layout.js
│   ├── App.js           # Main application component
│   └── index.js         # Application entry point
├── package.json
└── README.md


