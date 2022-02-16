import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from "../components/Modal";
const Tour = () => {
    return (
        <Container sx={{width:900}}>
             <Typography variant="h3" component="h1" marginTop={3}>
              Explore the world in vegas
             </Typography>
             <Box marginTop={3} sx={{display: "flex"}}> 
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Niagara_Falls_and_Niagara_River.jpg" 
                    alt="" 
                    height={325}
                    />
                <ImageCollage />
             </Box>
             <Box>
                <Typography variant="h6" component="h4" marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant="paragraph" component="p" marginTop={3}>
                    Niagara Falls is a city in Ontario, Canada. 
                    It is on the western bank of the Niagara River in the Golden 
                    Horseshoe region of Southern Ontario, with a population of 88,071
                    at the 2016 census.[1] It is part of the St. Catharines -
                    Niagara Census Metropolitan Area (CMA). Incorporated on 12 J
                    une 1903, the city is across the river from Niagara Falls, 
                    New York. The Niagara River flows over Niagara Falls at this 
                    location, creating a natural spectacle which attracts millions 
                    of tourists each year. 
                </Typography>
             </Box>
             <Box marginBottom={10}>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                   Frequenlty Asked Questions
                </Typography>
                <CustomizedAccordions/>
             </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
    )
}
export default Tour;