import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import mockData from './data';
import { connectTo } from 'redux/utils';
import {getUsers} from '../../redux/actions'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList1 = (getUsers,users1) => {
  const classes = useStyles();


  const [users] = useState(mockData);


  return (
    <div className={classes.root}>
      <UsersToolbar />
      <p> kullanıcı listesi </p>

      <div className={classes.content}>
        <UsersTable users={users} getUsers={getUsers} users1={users1}/>
      </div>
    </div>
  );
};

export default connectTo(() => (
  ({
     //State Propslari /

   }) => ({

  })
), {
  //request(aksiyon) propslari
  getUsers

}, UserList1);
