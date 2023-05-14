import React from 'react';
import { ValidGuess } from './Interfaces';
import { WordleContainer } from './StyledComponents';
import { EmptyWordleLetterRow, WordleLetterRow } from './WordleLetterRows';

interface WordleBoxProps {
    validGuesses: Array<ValidGuess>,
    guessLimit: number,
    correctWord: string
}

export const WordleBox = ({ validGuesses, guessLimit, correctWord }: WordleBoxProps) => {

    const noOfEmptyRows = guessLimit - validGuesses.length;

    return (
        <React.Fragment>
            <WordleContainer>
                {
                    validGuesses.map((validGuess) => {
                        return <WordleLetterRow
                            guessWord={validGuess['guess']}
                            correctWord={correctWord}
                        />
                    })
                }
                {
                    [...Array(noOfEmptyRows)].map((number: string, index: number) => {
                        return <EmptyWordleLetterRow />
                    })
                }
            </WordleContainer>
        </React.Fragment>
    )
}