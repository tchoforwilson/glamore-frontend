import {Box, Container} from '@mui/material'
import {default as nn} from './bag.module.css'

export default function Bag(){
    return <Container disableGutters={true} maxWidth="xl">
        <Box sx={{display: {xs: 'none', md:'block'}}}>
            This is desktop
        </Box>
        <Box sx={{display: {
            xs: "block", md: "none"
        }, height: "100%"}}>
            This is mobile
        </Box>
    </Container>
}
