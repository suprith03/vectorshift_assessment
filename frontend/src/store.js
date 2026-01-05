import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges } from 'reactflow';

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  ids: {},
  getNodeID: (type) => {
    const ids = { ...get().ids };
    ids[type] = (ids[type] || 0) + 1;
    set({ ids });
    return `${type}-${ids[type]}`;
  },
  addNode: (node) => set({ nodes: [...get().nodes, node] }),
  onNodesChange: (c) => set({ nodes: applyNodeChanges(c, get().nodes) }),
  onEdgesChange: (c) => set({ edges: applyEdgeChanges(c, get().edges) }),
  onConnect: (c) => set({ edges: addEdge(c, get().edges) })
}));
