import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

// function createData(name, club, age) {
//   return { name, club, age };
// }

// const rows = [
//   createData('Jonatas', 'Desterro', 29),
//   createData('Dani', 'Desterro', 40),
//   createData('Drude', 'Spac', 41),
//   createData('João', 'Band', 22),
//   createData('Alemão', 'Spac', 38),
//   createData('Roger', 'Desterro', 18),
// ];

export default function DataTable({data}) {
  const classes = useStyles();
  
  return (
  <React.Fragment>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Club</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {item.key}
              </TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.age}</TableCell>
              <TableCell align="right">{item.club}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
}