import { Button, Grid } from '@mui/material'
import React from 'react'

export default function Applaybtn() {
  return (
    <Grid container  sx={{position:"absolute",display:"flex",justifyContent:"center",alignSelf:"center", bottom:{md:"70px", xs:"0px"}}}>
        <Button sx={{width:"161px",  height:"43px", fontSize:"20px",

        fontWeight:"600",
        color:"#fff",
        backgroundColor:"#53ACFF"}}>
            Applay
        </Button>
    </Grid>
  )
}
