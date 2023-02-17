import React, { FC, ReactElement } from "react";
import {Grid} from '@mui/material';
import Profile from "../profile/profile";
import CreateTaskForm from "../CreateTaskForm/createTaskForm";

const GridCssProperties = {
    height: '100vh',
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100%',
    backgroundColor: 'background.paper',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
}

const SideBar: FC = (): ReactElement => {
  return (
    <Grid item md={4} sx={GridCssProperties}>
      <Profile name="Rayner" />
      <CreateTaskForm />
    </Grid>
  );
};

export default SideBar;
