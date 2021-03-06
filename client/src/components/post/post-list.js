import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ChildPost from './ch_post_list';

import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './post-list.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

function PostList({setRefresh, refresh}) {
  
  const [ posts, setPost ] = useState([]);
  const [ title, setTitle ] = useState("");

  console.log(refresh);
  
  console.log('before useEffect');
  
  async function fetchData(){
    console.log("PostList fetchData runs");
    
    let res = await fetch('/post_list');
    res
      .json()
      .then( posts => {setPost(posts)
              console.log(posts);} )
      .catch( err => console.log(err) )
  }

  useEffect(() => {
    console.log("useEffect in post-list.js runs");
    
    if(refresh){
      fetchData();
    }
    setRefresh(false);
  }, [refresh])

  let min = Math.round((new Date().getTime()) / 1000);
  console.log(min);
  console.log("after useEffect", posts);

  return (
    
    <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='right'>id</TableCell>
              <TableCell align='right'>title</TableCell>
              <TableCell align='right'>views</TableCell>
              <TableCell align='right'>date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {posts.map(post => <TableRow key={post.id}>
                <TableCell align='right'>{post.id}</TableCell>
                <TableCell align='right'>{post.title}</TableCell>
                <TableCell align='right'>{post.views}</TableCell>
                <TableCell align='right'>{post.date}</TableCell>
                <TableCell align='right'></TableCell>
              </TableRow>)}
              {/* child component here */}
              {/* <ChildPost setChildPost={}/> */}
          </TableBody>
        </Table>
    </div>
  );
}

export default PostList;
