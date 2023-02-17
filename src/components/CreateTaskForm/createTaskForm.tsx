import React, {FC, ReactElement} from 'react'
import {Box, Typography, Stack} from '@mui/material'
import TaskTitleField from './_tasktitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateField';
import TaskSelectField from './_taskSelectField';

const CreateTaskForm: FC = () : ReactElement => {
  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' width='100%' px={4} my={6}>
        <Typography mb={2} component="h2" variant="h6">Create A Task</Typography>
        <Stack sx={{width:'100%'}} spacing={2}>
            <TaskTitleField />
            <TaskDescriptionField />
            <TaskDateField />
            <Stack direction="row" spacing={2} sx={{width:'100%'}}>
              <TaskSelectField />
              <TaskSelectField />
            </Stack>
        </Stack>
    </Box>
  )
}

export default CreateTaskForm