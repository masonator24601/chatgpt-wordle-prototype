import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CenterBox } from './StyledComponents';

interface GuessBoxProps {
    validationError: string,
    onGuessClick: Function,
    disabled: boolean
}

export const GuessBox = ({validationError, onGuessClick, disabled}: GuessBoxProps) => {

    const [value, setValue] = useState<string>('');
    const error = validationError !== '' && value.length != 0;

    const onChange = (event: any) => {
        setValue(event.target.value);
    }

    const onKeyPress = (event: any) => {
        if (event.key == 'Enter' && disabled === false) {
            event.preventDefault();
            onGuessClick(event.target.value)
        }
    }

    return (
        <React.Fragment>
            <CenterBox>
                <TextField
                    error ={error}
                    value={value}
                    name="guess"
                    helperText={error ? validationError : null}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    InputProps={{
                        endAdornment: (
                            <Button
                                variant="contained"
                                onClick={() => onGuessClick(value)}
                                disabled={disabled}
                            >
                                GUESS
                            </Button>
                        )
                  }}
                />
            </CenterBox>
        </React.Fragment>
    )
}