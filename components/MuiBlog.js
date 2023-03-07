import {Grid,Box,Button} from '@mui/material';
//import { Button } from 'bootstrap';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function MuiBlog(){
    return(
        <Box 
        className='head'
        style={{
        height:'80px',
        minWidth:'100%',    
        padding:'0px',
        display:'flex',
        textAlign:'Justify'}}>
        <Grid container my={5} rowSpacing={0} columnSpacing={0} p={0}>
            <Grid item xs={12} sm={6} md={4} lg={4}><Button variant='text' textAlign={'left'} className='head' p={0}>Subscribe</Button></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}><Box fontSize={25} textAlign={'center'} p={0}>Blog</Box></Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} textAlign={'right'}><span><Button><SearchOutlinedIcon/></Button></span><span ><Button variant='outlined' className='mui--text-right' p={2}>Signup</Button></span ></Grid>   
        </Grid></Box>
    );
}
export default MuiBlog;