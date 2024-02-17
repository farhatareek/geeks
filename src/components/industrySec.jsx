import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ConstructionIcon from '@mui/icons-material/Construction';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider, Grid, Typography } from '@mui/material';
import icon from '../assets/Vector (6).svg'
import icontwo from '../assets/Vector (7).svg' 
import iconfour from '../assets/Vector (10).svg'
import industryArrow from '../assets/Vector (13).svg'
import iconthree from "../assets/Vector (9).svg"
import iconfive from '../assets/Vector (11).svg'
import iconsix from '../assets/Vector (12).svg'
import Image from 'next/image';

export default function IndustrySection() {
    return (
    <Grid container sx={{width:"338px",display:"flex",
    justifyContent:"space-around",bgcolor: '#202020'}}>
        <Box sx={{display:"flex", width:"338px", margin:"20px 0 20px 0px"}}>
            <Divider>
            <Image alt='industry' width={13.8} height={12} src={industryArrow.src}/>
            </Divider>
            <Typography sx={{color:"#fff", fontSize:"15px", fontWeight:"700"}}>
            Industry
            </Typography>
        </Box>
        {/* the left industry list  */}

    <Grid item  md={6} xs={12} sx={{marginTop:"5px" , padding:"0"}} >
    <List className='listSection'
    sx={{   marginLeft:"25px" }}
    >
        <ListItem className='hoverColor' sx={{padding:"0px"}} >
        <Image  alt='industry' className='industryIcon' width={13} height={14} src={icon.src}/>
        <ListItemText sx={{fontSize:"10px", color:"#fff"}} >Health care</ListItemText>
        </ListItem>
        <ListItem className='hoverColor' disablePadding>
        <Image  alt='industry'  className='industryIcon' width={13} height={14} src={icontwo.src}/>
        <ListItemText sx={{fontSize:"10px",color:"#fff"}} >Materials</ListItemText>
        </ListItem>
        <ListItem className='hoverColor' disablePadding>
        <Image   alt='industry' className='industryIcon'  width={13} height={14} src={iconsix.src}/>
        <ListItemText sx={{fontSize:"10px",color:"#fff"}} >Energy</ListItemText>
        </ListItem>
        <ListItem className='hoverColor' disablePadding>
        <Image   alt='industry' className='industryIcon' width={13} height={13} src={iconthree}/>
        <ListItemText sx={{fontSize:"10px",color:"#fff"}} >Consumer discretionary</ListItemText>
        </ListItem>
        <ListItem className='hoverColor' disablePadding>
        <Image  alt='industry'  className='industryIcon' width={13} height={14} src={iconfour.src}/>
        <ListItemText sx={{fontSize:"10px", color:"#fff"}} >Consumer staples</ListItemText>
        </ListItem>
        <ListItem className='hoverColor' disablePadding>
        <Image  alt='industry' className='industryIcon' width={13} height={14} src={iconfive.src}/>
        <ListItemText sx={{fontSize:"10px",color:"#fff"}} >Real estate</ListItemText>
        </ListItem>
    </List>
    </Grid>


    {/* the right industry list */}


    <Grid item md={6} xs={12} sx={{marginTop:"5px"}}>
    <List className='listSection'
    sx={{  marginLeft:{xs:"25px"}, mt:{md:0, xs:5}}}
    >
        <ListItem className='hoverColor' sx={{padding:"0px"}} >
        <PrecisionManufacturingIcon className='industryIcon' sx={{width:"14px", height:"14px"}}/>
        <ListItemText sx={{fontSize:"10px",color:"#fff"}} >IT</ListItemText>
        </ListItem>
        <ListItem className='hoverColor'  disablePadding>
        <WhatsAppIcon className='industryIcon' sx={{width:"14px", height:"14px"}}/>
        <ListItemText sx={{fontSize:"10px",color:"#fff"}} >Communication</ListItemText>
        </ListItem>
        <ListItem className='hoverColor' disablePadding>
        < ApartmentRoundedIcon className='industryIcon'/>
        <ListItemText sx={{fontSize:"10px",color:"#fff"}} >Industrials</ListItemText>
        </ListItem>
        <ListItem className='hoverColor' disablePadding>
        <  ConstructionIcon className='industryIcon'/>
        <ListItemText sx={{fontSize:"10px",color:"#fff"}} >Utilities</ListItemText>
        </ListItem>
        <ListItem className='hoverColor' disablePadding>
        < CurrencyExchangeIcon className='industryIcon'/>
        <ListItemText sx={{fontSize:"10px",color:"#fff"}} >Financials</ListItemText>
        </ListItem>
    </List>
    </Grid>
    </Grid>
    );
}