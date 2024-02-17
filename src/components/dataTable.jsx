'use client'
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import LowRisk from './lowriskalert';
import HighRisk from './highRisk';
import HoverdAlert from './hoverdAlert';
import Image from 'next/image';

export default function DataTable() {
    return (
        <Grid container  sx={{width:{sm: `calc(100% - 430px)`, xs:"99%"},
        marginTop:"90px", height:"400px", display:"flex", flexWrap:"wrap",
        position:"relative", top:{xs:"1100px", md:"0"}}} >
        <LowRisk/>
        <HoverdAlert/>
        <LowRisk/>
        <HighRisk/>
        <LowRisk/>
        <LowRisk/>
        <LowRisk/>
        <LowRisk/>
        <LowRisk/>
        <LowRisk/>
        
        </Grid>
    );
}