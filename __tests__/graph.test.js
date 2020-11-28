'use strict';

const { Vertex, Graph } = require('../Data-Structures/graph/graph');

describe('Graph', () => {
  it('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    const one = new Vertex(1);
    graph.addNode(one);
    const check = graph.adjacencyList.has(one);
    expect(check).toBeTruthy();
  });
  it('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    const one = new Vertex(1);
    const six = new Vertex(6);
    graph.addNode(one);
    graph.addNode(six);
    graph.addEdge(one, six);
    const check = graph.adjacencyList.get(one);
    expect(check.length).toBe(1);
  });
  it('A collection of all nodes can be properly retrieved from the graph', () => {
    const graph = new Graph();
    const one = new Vertex(1);
    const six = new Vertex(6);
    graph.addNode(one);
    graph.addNode(six);
    const check = graph.getNodes();
    expect(check.length).toBe(2);
  });
  it('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();
    const one = new Vertex(1);
    const two = new Vertex(2);
    const six = new Vertex(6);
    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(six);
    graph.addEdge(one, two);
    const check = graph.getNeighbors(one);
    expect(check.length).toBe(1);
  });
  it('Neighbors are returned with the weight between nodes included', () => {
    const graph = new Graph();
    const one = new Vertex(1);
    const six = new Vertex(6);
    graph.addNode(one);
    graph.addNode(six);
    graph.addEdge(one, six, 5);
    const check = graph.getNeighbors(one);
    expect(check[0].weight).toBe(5);
  });
  it('The proper size is returned, representing the number of nodes in the graph', () => {
    const graph = new Graph();
    const one = new Vertex(1);
    graph.addNode(one);
    const check = graph.size();
    expect(check).toBe(1);
  });
  it('An empty graph properly returns null', () => {
    const graph = new Graph();
    const check = graph.getNodes();
    expect(check).toBeNull();
  });
});
