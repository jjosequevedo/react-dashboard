import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, TablePagination, TextField,
} from '@mui/material';

interface Column {
  field: string;
  headerName: string;
}

interface Row {
  id: number;
  [key: string]: any; // Dynamically typed fields
}

interface DataTableProps {
  rows: Row[];
  columns: Column[];
}

const DataTable: React.FC<DataTableProps> = ({ rows, columns }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filter, setFilter] = useState('');
  const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<string>(columns[0].field);

  const handleSortRequest = (columnId: string) => {
    const isAsc = orderBy === columnId && orderDirection === 'asc';
    setOrderDirection(isAsc ? 'desc' : 'asc');
    setOrderBy(columnId);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRows = rows.filter(row => row.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <TextField label="Filter" variant="outlined" onChange={handleFilter} />
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>
                <TableSortLabel
                  active={orderBy === column.field}
                  direction={orderDirection}
                  onClick={() => handleSortRequest(column.field)}
                >
                  {column.headerName}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.field}>{row[column.field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={filteredRows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default DataTable;
