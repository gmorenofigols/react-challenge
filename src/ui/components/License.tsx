import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core'


const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });


const License = (props) => {
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    const handleDelete = () => {
        props.onDelete(props.license)
    }

    const handleCollapse = () => {
        setOpen(!open)
    }
  
    return (
      <>
        <TableRow className={classes.root}>

            <TableCell 
                component="th" 
                scope="row">
                {props.license.name}
            </TableCell>

            <TableCell align="right">{props.license.queriedAt}</TableCell>

            <TableCell align="right">{props.license.expiresAt}</TableCell>
            
            <TableCell align="right">

                <Button 
                    style={{ margin: 8 }}
                    variant="contained"
                    onClick={handleCollapse}>
                        Info
                </Button>
                
                <Button 
                    style={{ margin: 8 }}
                    variant="contained" 
                    onClick={handleDelete}>
                        Delete
                </Button>

            </TableCell>

        </TableRow>

        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>

                <Typography variant="h6" gutterBottom component="div">
                  Details
                </Typography>

                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Queried At</TableCell>
                      <TableCell>Expires At</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                      <TableRow key={props.license.name}>
                        <TableCell component="th" scope="row">
                          {props.license.queriedAt}
                        </TableCell>
                        <TableCell>{props.license.expiresAt}</TableCell>
                      </TableRow>
                  </TableBody>

                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    )
}

export default License;
