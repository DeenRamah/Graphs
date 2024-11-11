// AdjacencyListGraph.ts
export class AdjacencyListGraph {
  private adjacencyList: Map<number, number[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: number): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(src: number, dest: number): void {
    this.addVertex(src);
    this.addVertex(dest);
    this.adjacencyList.get(src)?.push(dest);
    this.adjacencyList.get(dest)?.push(src); // For undirected graph
  }

  removeEdge(src: number, dest: number): void {
    this.adjacencyList.get(src)?.splice(this.adjacencyList.get(src)!.indexOf(dest), 1);
    this.adjacencyList.get(dest)?.splice(this.adjacencyList.get(dest)!.indexOf(src), 1);
  }

  display(): void {
    console.log("Adjacency List:");
    this.adjacencyList.forEach((edges, vertex) => {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    });
  }
}

// Example usage:
// const graph = new AdjacencyListGraph();
// graph.addEdge(0, 1);
// graph.addEdge(1, 2);
// graph.display();
