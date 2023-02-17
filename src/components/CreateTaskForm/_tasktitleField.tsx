import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";

const TaskTitleField: FC = (): ReactElement => {
  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
    />
  );
};

export default TaskTitleField;
