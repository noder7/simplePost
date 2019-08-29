import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './post-list.css';

function ChildPostList() {
  
  const [ childPost, setChildPost ] = useState({});
  setChildPost(childPost);

  return (
      <div>
              <TableRow key={childPost.id}>
                <TableCell align='right'>{ childPost.id }</TableCell>
                <TableCell align='right'>{ childPost.title}</TableCell>
                <TableCell align='right'>{ childPost.views }</TableCell>
                <TableCell align='right'>{ childPost.date }</TableCell>
              </TableRow>
      </div>
  )
}

export default ChildPostList;