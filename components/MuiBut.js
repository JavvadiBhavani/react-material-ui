import {Grid,Box} from '@mui/material';
import { style, textAlign } from '@mui/system';

function MuiBut(){
    
    return(
       <Box 
       className='text'
       style={{
           borderTop:'2px solid  #d9d9d9',
           
           textAlign:'right',
         
       }}>
        <Grid container my={1} rowSpacing={0} columnSpacing={6}>
                       
            <Grid item xs={12} sm={6} md={4} lg={1.2}><a href='#'  style={{paddingLeft:'20px',color:'black',textAlign:'right'}} p={1}>Technology</a></Grid>
            <Grid item xs={12} sm={6} md={4} lg={1.2}><a href='#' className='text'  style={{textAlign:'center',color:'black'}} p={1}>Design</a></Grid>
            <Grid item xs={12} sm={6} md={4} lg={1.2}><a href='#' className='text'  style={{color:'black',textAlign:'center'}} p={1}>Culture</a></Grid>
            <Grid item xs={12} sm={6} md={4} lg={1.2}><a href='#' className='text'  style={{color:'black',textAlign:'center'}} p={1}>Business</a></Grid>
            <Grid item xs={12} sm={6} md={4} lg={1.2}><a href='#' className='text'  style={{color:'black',textAlign:'center'}} p={1}>Politics</a></Grid>
            <Grid item xs={12} sm={6} md={4} lg={1.2}><a href='#' className='text'  style={{color:'black',textAlign:'center'}} p={1}>Opinion</a></Grid>
            <Grid item xs={12} sm={6} md={4} lg={1.2}><a href='#' className='text' style={{color:'black',textAlign:'center'}}  p={1}>Science</a></Grid>
            <Grid item xs={12} sm={6} md={4} lg={1.2}><a href='#' className='text' style={{color:'black',textAlign:'center'}}  p={1}>Health</a></Grid>
            <Grid item xs={12} sm={6} md={4} lg={1.2}><a href='#' className='text'  style={{color:'black',textAlign:'center'}} p={1}>Style</a></Grid>
            <Grid item xs={12} sm={6} md={4} lg={1.2}><a href='#' className='text'  style={{color:'black',paddingRight:'20px',textAlign:'left'}} p={1}>Travel</a></Grid>
        </Grid></Box>
    );
}

export default MuiBut;