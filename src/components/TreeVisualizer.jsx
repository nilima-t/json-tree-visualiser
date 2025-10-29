import ReactFlow, { Controls, MiniMap, Background } from "reactflow";
import "reactflow/dist/style.css";
import html2canvas from "html2canvas";

export default function TreeVisualizer({ nodes, edges, highlightNodeId }) {
    const downloadImage = async () => {
        const canvas = await html2canvas(document.querySelector(".react-flow__renderer"));
        const link = document.createElement("a");
        link.download = "json-tree.png";
        link.href = canvas.toDataURL();
        link.click();
    };

    return (
        <div className="h-[600px] border rounded relative">
            <button
                onClick={downloadImage}
                className="absolute top-2 right-2 bg-purple-500 text-white px-3 py-1 rounded z-10"
            >
                Download Image
            </button>

            <ReactFlow
                nodes={nodes.map((n) =>
                    highlightNodeId === n.id
                        ? { ...n, style: { ...n.style, border: "3px solid red" } }
                        : n
                )}
                edges={edges}
                fitView
                onNodeClick={(e, node) => {
                    navigator.clipboard.writeText(node.data.path);
                    alert(`Copied path: ${node.data.path}`);
                }}
                onNodeMouseEnter={(e, node) => {
                    const tip = document.getElementById("tooltip");
                    tip.innerText = `${node.data.path} = ${node.data.label}`;
                    tip.style.display = "block";
                    tip.style.left = e.clientX + 10 + "px";
                    tip.style.top = e.clientY + 10 + "px";
                }}
                onNodeMouseLeave={() => {
                    const tip = document.getElementById("tooltip");
                    tip.style.display = "none";
                }}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>

            <div
                id="tooltip"
                className="absolute bg-black text-white text-xs p-1 rounded hidden pointer-events-none z-20"
            ></div>
        </div>
    );
}
