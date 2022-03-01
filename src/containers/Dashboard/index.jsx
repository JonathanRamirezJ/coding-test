import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { TITLE, TITLE_BUTTON } from '../../constants/texts';

const DashBoard = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center" justify = "center">
            <Typography variant="h3" my={2}>
              { TITLE }
            </Typography>
            <Button variant="outlined">{ TITLE_BUTTON }</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashBoard;