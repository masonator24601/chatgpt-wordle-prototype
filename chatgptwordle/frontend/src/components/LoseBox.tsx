import React from 'react';
import { DarkBox, CenterBox } from './StyledComponents';

interface LoseBoxProps {
    correctWord: string
}

export const LoseBox = ( { correctWord }: LoseBoxProps ) => {
    return <React.Fragment>
        <CenterBox>
            <DarkBox>
                {correctWord.toUpperCase()}
            </DarkBox>
        </CenterBox>
    </React.Fragment>
}