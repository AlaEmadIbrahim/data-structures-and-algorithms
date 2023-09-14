class GraphDepthFirst {
  constructor() {
    this.graph = {};
  }

  addEdge(node, neighbors) {
    this.graph[node] = neighbors;
  }

  depthFirst(start) {
    const visited = new Set();
    const result = [];

    const dfs = (node) => {
      visited.add(node);
      result.push(node);

      if (this.graph[node]) {
        for (const neighbor of this.graph[node]) {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        }
      }
    };

    dfs(start);
    return result;
  }
}
