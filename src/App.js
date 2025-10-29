import { useState } from "react";
import JsonInput from "./components/JsonInput";
import TreeVisualizer from "./components/TreeVisualizer";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import { jsonToTree } from "./utils/jsonToTree";
import { getLayoutedElements } from "./utils/layout"; 

export default function App() {
  const [tree, setTree] = useState({ nodes: [], edges: [] });
  const [highlightId, setHighlightId] = useState(null);

  const handleVisualize = (json) => {
    const data = jsonToTree(json);
    const layouted = getLayoutedElements(data.nodes, data.edges, "TB"); 
    setTree(layouted);
  };

  const handleClear = () => {
    setTree({ nodes: [], edges: [] });
    setHighlightId(null);
  };

  const handleSearch = (path) => {
    const node = tree.nodes.find((n) => n.data.path === path);
    setHighlightId(node ? node.id : null);
    alert(node ? "Match Found" : "No Match Found");
  };

  return (
    <div className="min-h-screen p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-2 text-center">
        JSON Tree Visualizer
      </h1>

      <div className="flex justify-between items-center mb-4">
        <ThemeToggle />
      </div>

      <JsonInput onVisualize={handleVisualize} onClear={handleClear} />
      <SearchBar onSearch={handleSearch} />

      <TreeVisualizer
        nodes={tree.nodes}
        edges={tree.edges}
        highlightNodeId={highlightId}
      />
    </div>
  );
}
