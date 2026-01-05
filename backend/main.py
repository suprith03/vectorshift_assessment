from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    graph = {n.id: [] for n in pipeline.nodes}
    for e in pipeline.edges:
        graph[e.source].append(e.target)

    visited, stack = set(), set()

    def dfs(v):
        visited.add(v)
        stack.add(v)
        for n in graph[v]:
            if n not in visited:
                if dfs(n):
                    return True
            elif n in stack:
                return True
        stack.remove(v)
        return False

    is_dag = not any(dfs(n) for n in graph if n not in visited)

    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag
    }
