import {Paper, Stack,Box,Typography,CardContent, CardMedia,Grid,Link} from '@mui/material';
import Image from './uriel-soberanes-Hnq1Q3Dv2Ls-unsplash.jpg';
import { Card } from 'react-bootstrap';
import CardActionArea from '@mui/material/CardActionArea';
import { width } from '@mui/system';

function MuiPaper(){
    return(
        <Stack sx={{border:'1px solid',height:'0',width:'100%', m:4,marginLeft:0,border:'none',height:'250px',
         '& > :not(style)': {
        width:'50%',
        height:250, 
        }}} direction='row' spacing={4}>
       <Paper elevation={8}  ><Card sx={{display:'flex'}} >
            <CardActionArea>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardContent sx={{ float:'left' }}>
                <Typography component="div" variant="h5">
                    Featured Post
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Nov 12
                </Typography>
                <Typography component="div" variant="body1">
                    This is a wider card with supporting text below as a natural lead-in to additional content
                </Typography>
                <Grid item lg={7} my={3} fontSize={"120%"}><Link href='#'  style={{textDecoration:'none'}} >Continue reading...</Link></Grid>
            </CardContent>
        
            <CardMedia
                component="img"
                height='250hv'
                sx={{width:180,float:'right',borderRadius:1}} 
                image='https://images.unsplash.com/photo-1541892079-2475b9253785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='image'/>
                </Box> 
            </CardActionArea></Card></Paper>
            <Paper elevation={8}  ><Card sx={{display:'flex'}} >
            <CardActionArea>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardContent sx={{ float:'left' }}>
                <Typography component="div" variant="h5">
                    Post Title
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Nov 11
                </Typography>
                <Typography component="div" variant="body1">
                    This is a wider card with supporting text below as a natural lead-in to additional content
                </Typography>
                <Grid item lg={7} my={3} fontSize={"120%"} ><Link href='#' style={{textDecoration:'none'}} >Continue reading...</Link></Grid>
            </CardContent>
        
            <CardMedia
                component="img"
                height='250hv'
                sx={{width:180,float:'right',borderRadius:1}} 
                image='https://images.unsplash.com/photo-1541892079-2475b9253785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='image'/>
                </Box> 
            </CardActionArea></Card></Paper> 
        </Stack>
    );
}
export default MuiPaper;