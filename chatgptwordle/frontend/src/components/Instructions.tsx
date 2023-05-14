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
            Welcome to Wordle with ChatGPT!
            <br/>
            <br/>
            The beloved AI has been told to come up with a fantastical story about a particular five letter word.
            While the story is surely fascinating and deeply philosophical, the AI has removed the word in question from the story.
            Can you guess what the story is about?
            <br/>
            <br/>
            Rules:
            <br/>
            <br/>
            • You have four tries to guess the word.
            <br/>
            • Yellow box means that letter is in the word, but not the right position.
            <br/>
            • Green box means that letter is in the word AND in the right position.
            <br/>
            <br/>
            Refresh the page to reset or play again.
            <br/>
            <br/>
            Hope you enjoy!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleOpen}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}