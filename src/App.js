import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Button,IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
function App() {
  return (
    <div className="App">

      <FacebookIcon 
      fontSize="large"
      color='primary'
      />
      <Button
        variant='contained'
        color='secondary'
        startIcon={<DeleteIcon/>}
      >
        Delete 
      </Button>

      <IconButton
      aria-label='delete'
      >
        <DeleteIcon color='secondary'/>

      </IconButton>


    </div>
  );
}

export default App;
