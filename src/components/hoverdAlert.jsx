"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import dollar from '../assets/Vector (15).svg'
import document from '../assets/Vector (16).svg'
import arrows from '../assets/Vector (17).svg'
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import coast from '../assets/Vector (18).svg'
import Image from 'next/image';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
    }));

export default function HoverdAlert() {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
   

    return (
        
        <Stack  expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more" className='alertHover' sx={{ width: {md:'90%', xs:"100%"}, marginTop:"15px", position:"relative", left:{md:"105px",  xs:"0"} }} >
            <Box sx={{
                display:'flex', 
                height:"59px",
                justifyContent:"space-around",
                borderRadius:"7.69px",
                alignItems:"center",
                transition: 'background-color 2s ease',
                backgroundColor: expanded ? '#53ACFF' : '#313131' // Set the background color to blue when expanded is true
            }} className='alert'>
                <Box sx={{display:"flex", justifyContent:"space-between", textAlign:"center"}}>
                    <Image className='alertIcons' alt='icon1' src={dollar.src} width={32.71} height={30.22}/>
                    <Typography className='typographyFont' sx={{paddingRight:{md:"60px", xs:"0"} }}>
                        TSLA
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
                    <Typography sx={{color:"#118F4B", paddingRight:{md:"60px", xs:"0"},
                        fontWeight:"400", fontSize:{md:"15px", xs:"13px"}, borderRight:{md:"1px solid #414040", xs:"none"}}}>
                        -0.25 %
                    </Typography>
                </Box>
                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                    <Image className='alertIcons'  alt='icon1' src={coast.src} width={32.71} height={30.22}/>
                    <Typography sx={{fontSize:{md:"20px", xs:"13px"}, fontWeight:"400", color:"#fff"}}>
                        High Risk
                    </Typography>
                </Box>
                {/* the expanded code  */}
            </Box>
            <Box sx={{width:"100%", color:"#fff", backgroundColor:"#181818"}}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography  sx={{fontWeight:700}}>$Tsla just announced 
        an acquisition of $NFLX at $200 B
        </Typography>
        <Typography paragraph>
        This an <span style={{color:"blue", textDecorationLine:"underline"}}> arbitrage opportunity </span>
        , with the max gain being %X if the deal closes, but the possible risk
        </Typography>
        <Typography paragraph>
        is %Y if the deal fails , if the deal is success , is % and therefore recommendation play
           <span style={{color:"blue", textDecorationLine:"underline", padding:"0 10px 0 10px"}}> long/short</span>  
           ABC
          </Typography>
        </CardContent>
      </Collapse>
                </Box>
        </Stack>
    );
}
