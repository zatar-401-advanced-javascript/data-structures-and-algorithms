'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(vertex) {
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (
      !this.adjacencyList.has(startVertex) ||
      !this.adjacencyList.has(endVertex)
    ) {
      throw new Error('Invalid Vertex!!!');
    }
    const list = this.adjacencyList.get(startVertex);
    list.push(new Edge(endVertex, weight));
  }

  getNodes() {
    const list = [];
    for (const [vertex] of this.adjacencyList.entries()) {
      list.push(vertex);
    }

    if(list.length == 0){
      return null;
    }
    return list;
  }

  getNeighbors(vertex){
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('Invalid Vertex!!!');
    }
    const neighbors = this.adjacencyList.get(vertex);
    return neighbors;
  }

  size(){
    return this.adjacencyList.size;
  }
}

module.exports = {Vertex,Graph};

// const graph = new Graph();

// const one = new Vertex(1);
// const six = new Vertex(6);
// const seven = new Vertex(7);
// const eight = new Vertex(8);
// const three = new Vertex(3);
// const two = new Vertex(2);

// graph.addNode(one);
// graph.addNode(six);
// graph.addNode(seven);
// graph.addNode(eight);
// graph.addNode(three);
// graph.addNode(two);

// graph.addEdge(one, six);

// graph.addEdge(one, seven);

// graph.addEdge(one, eight);

// graph.addEdge(one, three);

// graph.addEdge(one, two);

// graph.addEdge(six, seven);
// graph.addEdge(seven, eight);
// graph.addEdge(eight, three);
// graph.addEdge(three, two);
// console.log(graph.getNodes());
// console.log(graph.getNeighbors(one));
// console.log(graph.size());
