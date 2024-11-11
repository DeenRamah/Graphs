// IncidenceMatrixGraph.ts
export class IncidenceMatrixGraph {
  private incidenceMatrix: number[][];
  private numVertices: number;
  private numEdges: number;

  constructor(numVertices: number) {
    this.numVertices = numVertices;
    this.numEdges = 0;
    this.incidenceMatrix = [];
  }

  addEdge(src: number, dest: number): void {
    if (src < this.numVertices && dest < this.numVertices) {
      for (let i = 0; i < this.numVertices; i++) {
        this.incidenceMatrix[i] = this.incidenceMatrix[i] || [];
        this.incidenceMatrix[i][this.numEdges] = 0;
      }
      this.incidenceMatrix[src][this.numEdges] = 1;
      this.incidenceMatrix[dest][this.numEdges] = 1;
      this.numEdges++;
    }
  }

  display(): void {
    console.log("Incidence Matrix:");
    this.incidenceMatrix.forEach((row, vertex) => {
      console.log(`Vertex ${vertex}: ${row.join(" ")}`);
    });
  }
}

// Example usage:
// const graph = new IncidenceMatrixGraph(3);
// graph.addEdge(0, 1);
// graph.addEdge(1, 2);
// graph.display();

