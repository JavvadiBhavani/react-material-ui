import {Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
function Muifoot(){
    return(
        <Box><div>
            <Grid container spacing={1}>
                <Grid item lg={12} md={12} xs={12} textAlign='center'><Typography variant='h6'><b>Footer</b></Typography></Grid>
            </Grid></div><br/><div>
            <Grid container spacing={1}>
                <Grid item lg={12} md={12} xs={12} textAlign='center' color={'#00000099'} fontSize={16}><Typography variant='p'>Something here to give the footer a purpose!</Typography></Grid>
            </Grid></div>
            <div>
            <Grid container spacing={1}>
                <Grid item lg={12} md={12} xs={12} textAlign='center' color={'#00000099'} fontSize={16}><Typography variant='p'>Copyright ©<a href="#" color="black" >Your Website</a> 2022.!</Typography></Grid>
            </Grid></div>
        </Box>
       
    );
}
export default Muifoot;