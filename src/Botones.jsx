import React from 'react'
import {Button} from '@material-ui/core'

const Botones = () => {
    return ( 
        <>
        <Button color='primary' variant='outlined'>
        outlined
      </Button>
      <br/>
      <br/>
      <Button color='primary' variant='contained'>
        contained
      </Button>
      <br/>
      <br/>
      <Button color='primary' variant='contained' disableElevation>
        disableElevation
      </Button>
      <br/>
      <br/>
      <Button color='primary' variant='contained' href='https://google.com'>
        href
      </Button>
      <br/>
      <br/>
      <Button color='primary' variant='contained' fullWidth>
        fullWidth
      </Button>
      <br/>
      <br/>
      <Button color='primary' variant='contained' size='small'>
        size small
      </Button>
      <br/>
      <br/>
      <Button color='primary' variant='contained' size='medium'>
        size medium
      </Button>

        </>
     );
}
 
export default Botones;