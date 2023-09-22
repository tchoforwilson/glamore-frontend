import React from 'react';
import { Box, Container, Grid, Paper} from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { EditProfile } from '../../components/buttons';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(() => ({
    backgroundColor: '#fff',
    padding: '2px',
    textAlign: 'center',
  }));
  

const ProfileScreen = () => {
    return <React.Fragment>
    <Container 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
        <Box sx={{ display: 'contents' }}>
            <AccountCircleRoundedIcon sx={{ fontSize: 50, color: 'silver'}} />
        </Box>

        <Box>
            <h1>NFOR GIFT</h1>
        </Box>

        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
            }}
            >
             <EditProfile to="/user" icon={BorderColorOutlinedIcon} text={'Edit Profile'} />
             <EditProfile to="/setting" icon={SettingsOutlinedIcon} text={'Account setting'} />
        </Box>

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '1rem',
            }}
           >
             <h3 className='saved-message'>Saved Items</h3>
             <hr className='saved-line'/>
        </Box>

        <Box 
            sx={{
                width: '100%',
                maxWidth: '1300px',
                marginTop: '2rem',
            }}
            >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item><img className='image-size' src='https://www.realsimple.com/thmb/QHkrGeiLf4vEV5342LyWEmv5cvI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Real-Simple-work-clothes-for-women-affordable-v1-951a9c4310ee4db59e64f2f66b0fdcfe.jpg' alt='saved items' /></Item>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    </Container>
    </React.Fragment>;
}

export default ProfileScreen;