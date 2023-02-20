import React, {FC, ReactElement, useState, useEffect, useContext} from 'react'
import {Box, Typography, Stack, LinearProgress, Button, Alert, AlertTitle} from '@mui/material'


import TaskTitleField from './_tasktitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateField';
import TaskSelectField from './_taskSelectField';
import {Status} from './enums/status';
import { Priority } from './enums/priority';
import { useMutation } from 'react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../taskArea/interfaces/ICreateTask';
import { TaskStatusChangedContext } from '../../context';

const CreateTaskForm: FC = () : ReactElement => {
  const [title, setTitle] = useState<string|undefined>(undefined);
  const [description, setDescription] = useState<string|undefined>(undefined);
  const [date, setDate] = useState<Date|null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const tasksUpdatedContext = useContext(TaskStatusChangedContext);

  //TASK MUTATION
  const createTaskMutation = useMutation((data: ICreateTask)=>
    sendApiRequest('http://localhost:3200/tasks', 'POST', data),
  );

  function createTaskHandler(){
    if (!title || !date || !description){
      return;
    }
    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };
    createTaskMutation.mutate(task);
  }

  //Side Effects
  useEffect(()=>{
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
      tasksUpdatedContext.toggle();
    }
    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 7000);
    
    return () => {
      clearTimeout(successTimeout);
    }

  }, [createTaskMutation.isSuccess]);

  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' width='100%' px={4} my={6}>
        { showSuccess && <Alert
          severity='success'
          sx={{ width: '100%', marginBottom: '16px' }}
        >
          <AlertTitle>Success</AlertTitle>
          The task has been created successfully
        </Alert>}
        
        <Typography mb={2} component="h2" variant="h6">Create A Task</Typography>
        <Stack sx={{width:'100%'}} spacing={2}>
            <TaskTitleField 
              onChange={(e)=> setTitle(e.target.value)}
              disabled={createTaskMutation.isLoading}
            />
            <TaskDescriptionField 
              onChange={(e)=> setDescription(e.target.value)}
              disabled={createTaskMutation.isLoading}
            />
            <TaskDateField
              value={date}
              onChange={(date) => setDate(date)}
              disabled={createTaskMutation.isLoading}
            />
            <Stack direction="row" spacing={2} sx={{width:'100%'}}>
              <TaskSelectField label="Status" name="status"
              disabled={createTaskMutation.isLoading}
              value={status}
              onChange={(e) => setStatus(e.target.value as string)}
              items={[{
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              }]}/>
              <TaskSelectField label="Priority" name="priority"
              value={priority}
              disabled={createTaskMutation.isLoading}
              onChange={(e) => setPriority(e.target.value as string)}
              items={[{
                value: Priority.low,
                label: Priority.low
              },
              {
                value: Priority.normal,
                label: Priority.normal
              },
              {
                value: Priority.high,
                label: Priority.high
              }]}/>
            </Stack>
            { createTaskMutation.isLoading && <LinearProgress />}
            
            <Button
              disabled={
                !title || !description || !date || !status || !priority
              }
              variant='contained'
              size='large'
              fullWidth
              onClick={createTaskHandler}
            >Create A Task</Button>
        </Stack>
    </Box>
  )
}

export default CreateTaskForm