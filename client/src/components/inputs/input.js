import React, { useState, useEffect } from 'react';
import './input.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function InputGroup() {


    const [ value, setValue ] = useState(true);
    
    function handleChange(e){
        const target = e.target;

        if(!target.value){
            console.log("textField is empty");
            setValue(true);
        }else{
            console.log("textField is not empty");
            setValue(false);
        }
    }

  return (
    <div>
      <form action='/post' method='post'>
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
