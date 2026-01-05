# VectorShift Frontend Technical Assessment

This project is a simplified pipeline editor inspired by VectorShift.  
It allows users to visually build a pipeline using different node types, connect them, and validate the pipeline structure using a backend service.

The focus of this project is:
- Scalable node abstraction
- Clean and unified UI
- Dynamic Text node behavior
- Frontend–backend integration with DAG validation

---

## Tech Stack

### Frontend
- React
- React Flow
- Zustand
- JavaScript

### Backend
- Python
- FastAPI

---

## Project Structure

vectorshift_assessment/
├── backend/
│ ├── main.py
│ └── venv/
├── frontend/
│ ├── src/
│ │ ├── nodes/
│ │ ├── App.js
│ │ ├── ui.js
│ │ ├── toolbar.js
│ │ ├── submit.js
│ │ └── store.js
│ ├── package.json
│ └── node_modules/
└── README.md

---

## Setup Instructions

### Prerequisites
Make sure you have the following installed:
- Node.js (v16+)
- Python (v3.9+)
- npm

---

## Backend Setup (FastAPI)

1. Navigate to the backend folder:
   ```bash
   cd backend

2. Activate the virtual environment:
   ```bash
   source venv/bin/activate

3. Install dependencies (if not already installed):
   ```bash
   pip install fastapi uvicorn pydantic

4. Start the backend server:
   ```bash
   uvicorn main:app --reload

Backend will run at:
   ```arduino
   http://localhost:8000

Frontend Setup (React)

1. Open a new terminal and navigate to frontend:
    ```bash
    cd frontend

2. Install dependencies:
    ```bash
    npm install

3. Start the frontend:
    ```bash
    npm start


Frontend will run at:
    ```arduino
    http://localhost:3000


How to Use the App

1. Drag nodes from the toolbar onto the canvas.

2. Available node types include:

- Input

- Text

- LLM

- Output

- Condition

- Merge

- Delay

- JSON

- Math

3. Connect nodes to form a pipeline.

4. In the Text node, you can define variables using:

    {{variableName}}


5. This will dynamically create new input handles.

6. Click the Submit button to validate the pipeline.

Backend Validation Logic
When you click Submit:
    - The frontend sends all nodes and edges to the backend.
    - The backend:

        - Counts the number of nodes

        - Counts the number of edges

        - Checks whether the pipeline is a Directed Acyclic Graph (DAG)

You will see an alert like:
    ```vbnet
    Nodes: 5
    Edges: 4
    DAG: true
