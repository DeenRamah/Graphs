// AdjacencyMatrixGraph.ts
export class AdjacencyMatrixGraph {
  private matrix: number[][];
  private numVertices: number;

  constructor(numVertices: number) {
    this.numVertices = numVertices;
    this.matrix = Array.from({ length: numVertices }, () =>
      Array(numVertices).fill(0)
    );
  }

  addEdge(src: number, dest: number): void {
    if (src < this.numVertices && dest < this.numVertices) {
      this.matrix[src][dest] = 1;
      this.matrix[dest][src] = 1; // For undirected graph
    }
  }

  removeEdge(src: number, dest: number): void {
    if (src < this.numVertices && dest < this.numVertices) {
      this.matrix[src][dest] = 0;
      this.matrix[dest][src] = 0; // For undirected graph
    }
  }

  display(): void {
    console.log("Adjacency Matrix:");
    this.matrix.forEach(row => console.log(row.join(" ")));
  }
}

// Example usage:
// const graph = new AdjacencyMatrixGraph(3);
// graph.addEdge(0, 1);
// graph.addEdge(1, 2);
// graph.display();
