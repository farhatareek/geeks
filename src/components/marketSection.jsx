import * as React from 'react';
import Radio from '@mui/material/Radio';
import { Box, Divider, FormControlLabel, Grid, RadioGroup, Typography } from '@mui/material';
import industryArrow from '../assets/Vector (13).svg'
import Image from 'next/image';

export default function MarketCap() {
    return (
    <Grid container sx={{display:"flex",
    justifyContent:"space-around" ,marginTop:"10px" ,bgcolor: '#202020'}}>
        <Grid item md={6} sx={{marginTop:"5px" , padding:"0"}} >
        <Box sx={{display:"flex",  margin:"10px 0 0 5px"}}>
            <Divider>
            <Image alt='arrow' width={13.8} height={12} src={industryArrow.src}/>
            </Divider>
            <Typography sx={{color:"#fff", fontSize:"15px", fontWeight:"700"}}>
            market cap
            </Typography>
        </Box>
        {/* the left market list  */}
        <RadioGroup
        sx={{marginLeft:"25px" }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group">
        <FormControlLabel className='marketradio' value="Micro" control={<Radio />} label="Micro" />
        <FormControlLabel className='marketradio' value="Small" control={<Radio />} label="Small" />
        <FormControlLabel className='marketradio' value="Large" control={<Radio />} label="Large" />
        </RadioGroup>
        </Grid>
    {/* the right industry list */}
    <Grid item md={6} sx={{marginTop:"5px"}}>
    <Box sx={{display:"flex", margin:"10px 0 0 5px"}}>
            <Divider>
            <Image alt='arrow' width={13.8} height={12} src={industryArrow.src}/>
            </Divider>
            <Typography sx={{color:"#fff", fontSize:"15px", fontWeight:"700"}}>
            Risk Level
            </Typography>
        </Box>
        {/* the left market list  */}
        <RadioGroup
        sx={{marginLeft:"25px" }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group">
        <FormControlLabel className='marketradio' value="Low Risk" control={<Radio />} label="Low Risk" />
        <FormControlLabel className='marketradio' value="Mid Risk" control={<Radio />} label="Mid Risk" />
        <FormControlLabel className='marketradio' value="Low Risk" control={<Radio />} label="Low Risk" />
        </RadioGroup>
    </Grid>
    </Grid>
    );
}