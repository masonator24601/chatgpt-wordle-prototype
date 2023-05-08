import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DialogProps {
    open: boolean,
    toggleOpen: Function
}

export const WinDialog = ({ open, toggleOpen }: DialogProps)  => {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={toggleOpen}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>WIN!!</DialogTitle>
      </Dialog>
    </div>
  );
}

export const LoseDialog = ({ open, toggleOpen }: DialogProps)  => {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={toggleOpen}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>LOSE..</DialogTitle>
      </Dialog>
    </div>
  );
}
