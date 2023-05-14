import React, { useState, useEffect } from 'react';
import { getResponses } from './Api';
import { Game } from './Game';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { CenterBox } from './StyledComponents';
import { MainState } from './Interfaces';

export const Main = () => {

    const [response, setResponse] = useState<MainState | undefined>(undefined);

    useEffect(() => {
        getResponses().then(
            (responses: MainState) => {
                setResponse(responses['data'][0]);
            }
        )
    }, []);

    return (
        <React.Fragment>
            {
                response ?
                <Typography variant="body1" gutterBottom>
                    <Game gameData={response}/>
                </Typography> :
                <React.Fragment>
                    <CenterBox><Typography variant="body1" gutterBottom>Loading...</Typography><CircularProgress /></CenterBox>
                </React.Fragment>
            }
        </React.Fragment>
    );
}