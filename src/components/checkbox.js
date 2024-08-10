import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="599"
        name="radio-buttons-group"
      >
        <FormControlLabel value="599" control={<Radio />} label="Single Seater INR 599" />
        <FormControlLabel value="399" control={<Radio />} label="Double Seater INR 399" />
        <FormControlLabel value="299" control={<Radio />} label="Triple Seater INR 299" />
      </RadioGroup>
    </FormControl>
  );
}

