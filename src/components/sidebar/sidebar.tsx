import React, { FC, ReactElement } from "react";
import {Grid} from '@mui/material';
import Profile from "../profile/profile";

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
      <Profile />
    </Grid>
  );
};

export default SideBar;
