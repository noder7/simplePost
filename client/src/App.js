import React from 'react';
import './App.css';
import PostList from './components/post/post-list';
import InputGroup from './components/inputs/input';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className='App'>
      <Box className='nav-container' boxShadow={2} p={5}>
        <h3>Simple Post</h3>
        <h4>Read and write data from local storage</h4>
      </Box>
      <Box className='post-container' boxShadow={2} p={5}>
        <PostList />
        <InputGroup />
      </Box>
    </div>
  );
}

export default App;
