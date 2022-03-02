import { Link } from 'react-router-dom';
import { Container, Grid, Button } from '@mui/material';
import { TITLE_REGISTER, TITLE_BUTTON_BACK_TO } from '../../constants/texts';

// Own constants / actions / components
import Title from '../../components/Titles';
import FormAddress from '../../components/Forms';

const Register = () => {
  const handleSubmit = (dataForm) => {
    console.log(dataForm);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} align="center" justify="center">
          <Title type="h4" text={TITLE_REGISTER} />
        </Grid>
        <Grid item xs={12} align="center" justify="center">
          <FormAddress onSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={12} align="center" justify="center">
          <Link to="/dashboard">
            <Button variant="outlined" color="error">{ TITLE_BUTTON_BACK_TO }</Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;