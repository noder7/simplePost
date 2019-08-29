import React, { useState, useEffect, createRef } from 'react';
import './input.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function InputGroup({onClick}) {

    const [ value, setValue ] = useState(true);
    const [ title, setTitle ] = useState("");
    console.log(title);
    // console.log('rendered the entire component');
    function handleSubmit(e){
      let min = Math.round((new Date().getTime()) / 1000);
      console.log(min);
      e.preventDefault();
      console.log("button clicked");
      
      fetchData(title);
      console.log("after fetchdata in input");
      
    }
    function handleChange(e){
      const target = e.target;
      setTitle(target.value);
      if(!target.value){
        console.log("empty", target.value.length);
        setValue(true);
      }else{
        console.log("not empty");
        setValue(false);
        setTitle(target.value);
      }
    }
    async function fetchData(title){
      // console.log("fetchData: ", title);
      console.log("inputGroup fetchData runs");

      const options = {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({title: title})
      }
      await fetch('/post', options).catch( err => {
        console.error('Request failed', err)
      })
      console.log("fetch data ends in input");
      
      // onClick wil change the value of refresh to 'true'
      onClick();
    }

  return (
    <div>
      <form action='/post' method='post' onSubmit={handleSubmit}>
        <TextField
        name='title'
          id='outlined-full-width'
          label='title'
          style={{ margin: 10 }}
          placeholder='input title'
          // helperText='Full width!'
          fullWidth
          margin='normal'
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          onChange={ e => handleChange(e)}
          value={title}
        />
        <Button type="submit"
        variant="contained"
        color="primary"
        disabled={value}
          > upload </Button>
      </form>
    </div>
  );
}