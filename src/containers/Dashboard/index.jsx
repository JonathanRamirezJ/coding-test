import { Link } from 'react-router-dom';
import { Box, Container, Grid, Button } from '@mui/material';
import { TITLE, TITLE_BUTTON } from '../../constants/texts';

// Own constants / actions / components
import Title from '../../components/Titles';

const DashBoard = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center" justify = "center">
            <Title type="h3" text={TITLE} />
            <Link to="/register">
              <Button variant="outlined">{ TITLE_BUTTON }</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashBoard;