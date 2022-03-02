import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Grid, Button, FormControl, TextField, MenuItem, InputLabel, Select } from '@mui/material';

import {
  COUNTRY_INPUT,
  STATE_INPUT,
  POSTAL_CODE_INPUT,
  COLONY_INPUT,
  DELEGATION_INPUT,
  CITY_INPUT,
  STREET_INPUT,
  EXT_NUM_INPUT,
  EXT_INT_INPUT,
  BTN_SUBMIT
} from '../../constants/texts';

const FormAddress = ({onSubmit}) => {
  const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [postal, setPostal] = useState('');
  const [colony, setColony] = useState('');
  const [delegation, setDelegation] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [extNum, setExtNum] = useState('');
  const [intNum, setIntNum] = useState('');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="country-select-label">{COUNTRY_INPUT}</InputLabel>
            <Select
              {...register('country-select', {
                required: true,
                onChange: (e) => setCountry(e.target.value)
              })}
              labelId="country-select-label"
              id="country-select"
              value={country}
              label={COUNTRY_INPUT}
              error={errors['country-select'] ? true : false } >
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="state-select-label">{STATE_INPUT}</InputLabel>
            <Select
              {...register('state-select', {
                required: true,
                onChange: (e) => setState(e.target.value)
              })}
              labelId="state-select-label"
              id="state-select"
              value={state}
              label={STATE_INPUT}
              error={errors['state-select'] ? true : false }>
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
              {...register('postal-code-input', {
                required: true,
                onChange: (e) => setPostal(e.target.value)
              })}
              id="postal-code-input"
              label={POSTAL_CODE_INPUT}
              variant="outlined"
              value={postal}
              error={errors['postal-code-input'] ? true : false } />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="colony-select-label">{COLONY_INPUT}</InputLabel>
            <Select
              {...register('colony-select', {
                required: true,
                onChange: (e) => setColony(e.target.value)
              })}
              labelId="colony-select-label"
              id="colony-select"
              value={colony}
              label={COLONY_INPUT}
              error={errors['colony-select'] ? true : false }>
              <MenuItem value={10}>Lomas</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
              {...register('delegation-input', {
                required: true,
                onChange: (e) => setDelegation(e.target.value)
              })}
              id="delegation-input"
              label={DELEGATION_INPUT}
              variant="outlined"
              value={delegation}
              error={errors['delegation-input'] ? true : false } />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
              {...register('city-input', {
                required: true,
                onChange: (e) => setCity(e.target.value)
              })}
              id="city-input"
              label={CITY_INPUT}
              variant="outlined"
              value={city}
              error={errors['city-input'] ? true : false } />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
              {...register('stret-input', {
                required: true,
                onChange: (e) => setStreet(e.target.value)
              })}
              id="stret-input"
              label={STREET_INPUT}
              variant="outlined"
              value={street}
              error={errors['stret-input'] ? true : false } />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
            {...register('ext-num-input', {
              required: true,
              onChange: (e) => setExtNum(e.target.value)
            })}
            id="ext-num-input"
            label={EXT_NUM_INPUT}
            variant="outlined"
            value={extNum}
            error={errors['ext-num-input'] ? true : false } />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
            {...register('int-num-input', {
              required: true,
              onChange: (e) => setIntNum(e.target.value)
            })}
            id="int-num-input"
            label={EXT_INT_INPUT}
            variant="outlined"
            value={intNum}
            error={errors['int-num-input'] ? true : false } />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <Button variant="contained" color="success" type="submit">
              { BTN_SUBMIT }
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

FormAddress.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormAddress;