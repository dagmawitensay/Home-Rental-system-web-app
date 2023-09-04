import React from 'react';
import { TextField } from '@mui/material';

export default function InputField({label, placeholder, handleChange, onChange, defaultValue}) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <TextField
          placeholder={label}
          label={label}
          onChange={handleChange({label})}
          defaultValue={defaultValue}
        />
      </div>
    );
}