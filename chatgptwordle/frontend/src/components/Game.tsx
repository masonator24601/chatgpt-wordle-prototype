import React from 'react';
import Response from './Interfaces';

interface GameProps {
    gameData: Response
}

export const Game = ({ gameData } : Response) => {
    return (
        <React.Fragment>
            <p>WORD: {gameData['word']}</p>
            <p>CONTENT: {gameData['content']}</p>
        </React.Fragment>
    )
}