import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import TitleStyles from './title.styles';

const Title = (props) => {
  const { type, text } = props;

  return (
    <TitleStyles>
      <Typography variant={type} my={2}>
        { text }
      </Typography>
    </TitleStyles>
  );
};

Title.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Title;