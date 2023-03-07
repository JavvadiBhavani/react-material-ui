import Image from './uriel-soberanes-Hnq1Q3Dv2Ls-unsplash.jpg';
import {Box,Grid,Typography,Link} from '@mui/material';

function MUiImgbg(){  
    return(<div>
<Box
    className="candles"
    style={{
        margin:"0px ",
        marginTop:'0px',
        padding:'0px',
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    height: "70vh",
    color: "#f5f5f5"
    
}}><div style={{padding:'2%',paddingRight:'0px'}}>
          <div style={{width:'60%'}}><Grid item lg={7}><Typography variant='h2'>Title of a longer featured blog post</Typography> </Grid>
          <Grid item lg={7} my={3}><Typography variant='p' fontSize={'180%'} style={{paddingBottom:'40px'}}>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</Typography></Grid> 
          <Grid item lg={7} my={3} fontSize={"180%"}><Link href='#' >Continue reading...</Link></Grid></div>
                               
    </div>    
</Box></div>);
}      
export default MUiImgbg;