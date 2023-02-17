import React, { FC, ReactElement } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { IDateField } from "./interfaces/IDateField";
import PropTypes from 'prop-types';

const TaskDateField: FC<IDateField> = (props): ReactElement => {
    //DESTRUCTURING OF PROPS
    const {value = new Date(), disabled = false, onChange = (date) => console.log(date)} = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          renderInput={(params) => (
            <TextField {...params} />
          )}
          disabled = {disabled}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
    value: PropTypes.instanceOf(Date),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,

}

export default TaskDateField;

