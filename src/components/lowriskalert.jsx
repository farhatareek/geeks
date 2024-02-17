import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import dollar from '../assets/Vector (15).svg'
import document from '../assets/Vector (16).svg'
import arrows from '../assets/Vector (17).svg'
import coast from '../assets/Vector (18).svg'
import Image from 'next/image';
import { Box } from '@mui/system';

export default function LowRisk() {
    return (
        <Stack className='alertHover' sx={{ width: {md:'90%', xs:"100%"}, marginTop:"15px", position:"relative", left:{md:"105px",  xs:"0"} }} >
        <Box sx={{display:'flex', height:"59px",
        justifyContent:"space-around",
        borderRadius:"7.69px",
        alignItems:"center" }} className='alert'>
        <Box sx={{display:"flex", justifyContent:"space-between", textAlign:"center"}}>
        <Image className='alertIcons' alt='icon1' src={dollar.src} width={32.71} height={30.22}/>
        <Typography className='typographyFont' sx={{paddingRight:{md:"60px", xs:"0"} }}>
        NFLX
        </Typography>
        </Box>
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
        <Image className='alertIcons'    alt='icon1' src={document.src} width={32.71} height={30.22}/>
        <Typography className='typographyFont' sx={{paddingRight:{md:"60px", xs:"0"} }}>
        200
        </Typography>
        </Box>
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
        <Image className='alertIcons'  alt='icon1' src={arrows.src} width={32.71} height={30.22}/>
        <Typography sx={{color:"#D94111", paddingRight:{md:"60px", xs:"0"},
        fontWeight:"400", fontSize:{md:"15px", xs:"13px"}, borderRight:{md:"1px solid #414040", xs:"none"}}}>
        -0.25 %
        </Typography>
        </Box>
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
        <Image className='alertIcons'  alt='icon1' src={coast.src} width={32.71} height={30.22}/>
        <Typography sx={{fontSize:{md:"20px", xs:"13px"}, fontWeight:"400", color:"#fff"}}>
        Low Risk
        </Typography>
        </Box>
        </Box>
    </Stack>
    );
}