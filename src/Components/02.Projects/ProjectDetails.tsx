import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerProjectTable from "./ProjectTable";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const ProjectDetails = () => {
  const { projectId } = useParams();

  return (
    <Routes>
        <Route path="/" element={<CustomerProjectTable />} />
      </Routes>
  );
};

export default ProjectDetails;