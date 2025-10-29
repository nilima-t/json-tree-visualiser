export function jsonToTree(json) {
    let id = 0;
    const nodes = [];
    const edges = [];

    function traverse(value, parentId = null, path = "$") {
        const nodeId = `${id++}`;
        let label = "";

        if (Array.isArray(value)) {
            label = `${path.split(".").pop()} (Array)`;
        } else if (value !== null && typeof value === "object") {
            label = `${path.split(".").pop()} (Object)`;
        } else {
            label = `${path.split(".").pop()}: ${String(value)}`;
        }

        nodes.push({
            id: nodeId,
            data: { label, path },
            position: { x: 0, y: 0 },
            style: {
                background: Array.isArray(value)
                    ? "#34d399" 
                    : typeof value === "object"
                        ? "#60a5fa"
                        : "#facc15", 
                color: "#111",
                borderRadius: 8,
                padding: 6,
                fontSize: 12,
            },
        });

        if (parentId !== null) {
            edges.push({
                id: `e${parentId}-${nodeId}`,
                source: parentId,
                target: nodeId,
                animated: true,
                style: { stroke: "#999" },
            });
        }

        if (Array.isArray(value)) {
            value.forEach((item, index) =>
                traverse(item, nodeId, `${path}[${index}]`)
            );
        } else if (value !== null && typeof value === "object") {
            Object.entries(value).forEach(([key, val]) =>
                traverse(val, nodeId, `${path}.${key}`)
            );
        }
    }

    traverse(json);
    return { nodes, edges };
}
