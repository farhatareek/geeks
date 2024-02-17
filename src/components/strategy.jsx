import * as React from 'react';
import Radio from '@mui/material/Radio';
import { Box, Button, Divider, FormControlLabel, Grid, RadioGroup, Typography } from '@mui/material';
import industryArrow from '../assets/Vector (13).svg'
import Image from 'next/image';

export default function Strategy() {
    return (
    <Grid  container sx={{width:"338px",display:"flex",  justifyContent:"space-around" ,marginTop:"10px" ,bgcolor: '#202020'}}>
        <Grid item  md={7} sx={{marginTop:"5px" ,width:"103.24px", padding:"0"}} >
        <Box sx={{display:"flex",  margin:{md:"10px 0 10px 25px", xs:"10px 0 10px 10px"}}}>
            <Typography sx={{color:"#fff", fontSize:"15px", fontWeight:"700", 
            marginLeft:{md:"25px", xs:"0"}}}>
            Strategy
            </Typography>
        </Box>
        {/* the left market list  */}
        <Typography className='gradient-text' sx={{fontSize:"13px"}}>
        Big Option Buys
        </Typography>
        <Button sx={{width:"119px",
        height:"25px", fontSize:"13px",
        color:"#fff",
        textAlign:"center",
        backgroundColor:"#53ACFF"}}>
            <Typography sx={{fontSize:"9px"}}>
        Merger Arbitrage
        </Typography>
        </Button>
        <Typography className='gradient-text' sx={{fontSize:"13px"}}>
        Short Reports
        </Typography>
        </Grid>
    {/* the right industry list */}
    <Grid item md={5} sx={{marginTop:"5px"}}>
    <Box sx={{display:"flex",  margin:{md:"10px 0 10px 25px", xs:"10px 0 10px 10px"}}}>
            <Typography sx={{color:"#fff", fontSize:"15px",
            fontWeight:"700", marginLeft:{md:"25px", xs:"0"}}}>
            Asset
            </Typography>
        </Box>
        {/* the left market list  */}
        <Typography className='gradient-text' sx={{fontSize:"13px"}}>
        Stocks
        </Typography>
        <Button sx={{width:"62px",
        height:"25px", fontSize:"13px",
        color:"#fff",
        backgroundColor:"#53ACFF"}}>
        <Typography  sx={{fontSize:"9px",textAlign:"center", fontWeight:"400"}}>
        Options
        </Typography>
        </Button>
        <Typography className='gradient-text' sx={{fontSize:"13px"}}>
        Futures
        </Typography>
        </Grid>
    </Grid>
    );
}