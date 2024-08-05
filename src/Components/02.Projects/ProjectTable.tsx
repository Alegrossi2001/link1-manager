import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const data = [
  { id: 1, customerName: 'Alice', projectName: 'Project A', assignee: 'John Doe', contactInfo: 'alice@example.com' },
  { id: 2, customerName: 'Bob', projectName: 'Project B', assignee: 'Jane Smith', contactInfo: 'bob@example.com' },
  // Add more data as needed
];

const CustomerProjectTable = () => {
  const navigate = useNavigate();

  const handleRowClick = (projectId:any) => {
    navigate(`/Projects/${projectId}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Assignee</TableCell>
            <TableCell>Contact Information</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} hover onClick={() => handleRowClick(row.id)} style={{ cursor: 'pointer' }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.customerName}</TableCell>
              <TableCell>{row.projectName}</TableCell>
              <TableCell>{row.assignee}</TableCell>
              <TableCell>{row.contactInfo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerProjectTable;