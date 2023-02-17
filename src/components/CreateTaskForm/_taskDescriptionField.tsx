import React, {FC, ReactElement} from 'react'
import {TextField} from '@mui/material';

const TaskDescriptionField: FC = (): ReactElement => {
  return (
    <TextField 
    id="description"
    label="Description"
    placeholder="Description"
    variant="outlined"
    size="small"
    name="description"
    multiline
    rows={4}
    fullWidth
    />
  )
}

export default TaskDescriptionField