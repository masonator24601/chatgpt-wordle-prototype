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

interface InstructionsProps {
    open: boolean,
    toggleOpen: Function
}

export const Instructions = ({ open, toggleOpen }: InstructionsProps)  => {

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={toggleOpen}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{Instructions}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Here are some instructions on how to play the game.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleOpen}>Cool</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}