// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import DataTable from './components/DataTable';

// Sample data for DataTable
const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name' },
  { field: 'age', headerName: 'Age' },
];

const rows = [
  { id: 1, name: 'John Doe', age: 35 },
  { id: 2, name: 'Jane Doe', age: 42 },
  { id: 3, name: 'John Smith', age: 28 },
  { id: 4, name: 'Emily Johnson', age: 22 },
];

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/datatable"
          element={
            <PrivateRoute>
              <DataTable rows={rows} columns={columns} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
