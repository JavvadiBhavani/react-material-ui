import { Grid,Divider, Paper,Link } from '@mui/material';
import {Typography} from '@mui/material';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


function MuiCont(){
    return(
        <Box sx={{display:'flex' , margin:5,marginRight:0}}>
            <Box width={'70%'} sx={{float:'left'}}>
            <Grid item lg={9}>
                <Typography variant='h6'><b>From the firehose</b></Typography>
                
            </Grid>
            <Divider /><br/><br/>
            <Typography variant='h4'>Sample blog post</Typography><br/>
            <Typography variant='p' fontSize={18} ><em>April 1 2020 by <Link href='#' >Oliver</Link></em></Typography><br/><br/>
            <Typography  variant='p' fontSize={18} >This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying <code>Markdown.js.</code></Typography><br/><br/>
            <Typography  variant='p' fontSize={18} >Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</Typography><br/><br/>
            <Typography  variant='p' fontSize={18} >Curabitur blandit tempus porttitor.<b> Nullam quis risus eget urna mollis </b>ornare vel eu leo.Nullam id dolor id nibh ultricies vehicula ut id elit.</Typography><br/><br/>
            <Typography  variant='p' fontSize={18} >Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</Typography><br/><br/>
            <Typography variant='h6'><b>Heading</b></Typography><br/>
            <Typography  variant='p' fontSize={18} >Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</Typography><br/><br/>
            <Typography  variant='p' fontSize={18} >Sub-heading 1</Typography><br/><br/>
            <Typography  variant='p' fontSize={18} >Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Typography><br/><br/>
            <Typography  variant='p' fontSize={18} >Sub-heading 2</Typography><br/><br/>           
            <Typography  variant='p' fontSize={18} >Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</Typography><br/>
            <Typography  variant='p' fontSize={18} ><ul>
                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li><br/>
                <li>Donec id elit non mi porta gravida at eget metus.</li><br/>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul></Typography><br/> 
            <Typography  variant='p' fontSize={18} >Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</Typography><br/>
            <Typography  variant='p' fontSize={18} ><ol>
                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li><br/>
                <li>Donec id elit non mi porta gravida at eget metus.</li><br/>
                <li>Nulla vitae elit libero, a pharetra augue.</li><br/>
            </ol></Typography><br/> 
            <Typography variant='h4'>Another blog post</Typography><br/>
            <Typography variant='p' fontSize={18} ><em>March 23 2020 by <Link href='#' >Matt</Link></em></Typography><br/><br/>
            <Typography  variant='p' fontSize={18} >Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</Typography><br/><br/>
            <Typography  variant='p' fontSize={18} >Curabitur blandit tempus porttitor.<b> Nullam quis risus eget urna mollis </b>ornare vel eu leo.Nullam id dolor id nibh ultricies vehicula ut id elit.</Typography><br/><br/>
            <Typography  variant='p' fontSize={18} >Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</Typography><br/><br/>
            <Typography  variant='p' fontSize={18} >Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</Typography><br/><br/>
            <Typography variant='h4'>New Feature</Typography><br/>
            <Typography variant='p' fontSize={18} ><em>October 28 2022 by <Link href='#' >Santosh</Link></em></Typography><br/><br/>
            <Typography  variant='p' fontSize={18} >Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</Typography><br/>
            <Typography  variant='p' fontSize={18} ><ul>
                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li><br/>
                <li>Donec id elit non mi porta gravida at eget metus.</li><br/>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul></Typography><br/> 
            <Typography  variant='p' fontSize={18} >Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</Typography><br/>        
        </Box>
        <Box sx={{marginLeft:'20px',width: '30%',float:'right'}}>
        <div style={{backgroundColor:'#eeeeee',borderRadius:'5px', height: '160px', padding:'20px' ,textAlign:'left',}} > <Typography variant='h6'><b>About</b></Typography><br/>
        <Typography  variant='p' fontSize={16} >Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</Typography><br/><br/>
        </div>
        <div>
        <br/><Typography variant='h6'><b>About</b></Typography></div><div>
            <Typography variant='p'><Link href="#">March 2020</Link></Typography><br/>
            <Typography variant='p'><Link href="#">February 2020</Link></Typography><br/>
            <Typography variant='p'><Link href="#">January 2020</Link></Typography><br/>
            <Typography variant='p'><Link href="#">December 1999</Link></Typography><br/>
            <Typography variant='p'><Link href="#">November 1999</Link></Typography><br/>
            <Typography variant='p'><Link href="#">October 1999</Link></Typography><br/>
            <Typography variant='p'><Link href="#">September 1999</Link></Typography><br/>
            <Typography variant='p'><Link href="#">August 1999</Link></Typography><br/>
            <Typography variant='p'><Link href="#">July 1999</Link></Typography><br/>
            <Typography variant='p'><Link href="#">June 1999</Link></Typography><br/>
            <Typography variant='p'><Link href="#">May 1999</Link></Typography><br/>
            <Typography variant='p'><Link href="#">April 1999</Link></Typography><br/>
        </div>
        <div>
        <br/><Typography variant='h6'><b>Social</b></Typography></div><div>
            <Grid ><Typography variant='p'> <Link href="#"><span><GitHubIcon/></span><span> GitHub</span></Link></Typography></Grid>
            <Grid><Typography variant='p'><Link href="#"><span><TwitterIcon/></span><span> Twitter</span></Link></Typography></Grid>
            <Grid><Typography variant='p'><Link href="#"><span><FacebookIcon/></span><span> Facebook</span></Link></Typography></Grid>
            
        </div>
</Box>
        </Box>
    );
}
export default MuiCont;