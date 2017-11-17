import React from 'react';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

const styles = {
  textField: {
    color: 'white',
    width: '450px',
  },
};

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const ListAllSprints = ({ classes, data }) => (
  <TextField
    labelClassName={classes.textField}
    InputClassName={classes.textField}
    id="select-currency"
    select
    label="SELECIONE UMA SPRINT"
    value={currencies[0].value}
    // onChange={this.handleChange('currency')}
    margin="normal"
  >
    {currencies.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
);

export default withStyles(styles)(ListAllSprints);
