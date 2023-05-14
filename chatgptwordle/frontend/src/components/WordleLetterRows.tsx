import React from 'react';
import { EmptyWordleLetterBox, GuessedWordleLetterBox, CorrectWordleLetterBox, AlmostWordleLetterBox, FlexBox } from './StyledComponents';

export const EmptyWordleLetterRow = () => {
    return <React.Fragment>
        <FlexBox>
            <EmptyWordleLetterBox></EmptyWordleLetterBox>
            <EmptyWordleLetterBox></EmptyWordleLetterBox>
            <EmptyWordleLetterBox></EmptyWordleLetterBox>
            <EmptyWordleLetterBox></EmptyWordleLetterBox>
            <EmptyWordleLetterBox></EmptyWordleLetterBox>
        </FlexBox>
    </React.Fragment>
}

interface WordleLetterRowProps {
    guessWord: string,
    correctWord: string
}

export const WordleLetterRow = ({ guessWord, correctWord }: WordleLetterRowProps) => {

    const guessWordArray = guessWord.split('');
    const correctWordArray = correctWord.split('');

    return <React.Fragment>
        <FlexBox>
            {
                guessWordArray.map((letter: string, index: number) => {
                    if (correctWordArray[index] === guessWordArray[index]) {
                        return <CorrectWordleLetterBox>{letter}</CorrectWordleLetterBox>
                    } else if (correctWord.includes(guessWordArray[index])) {
                        return <AlmostWordleLetterBox>{letter}</AlmostWordleLetterBox>
                    } else {
                        return <GuessedWordleLetterBox>{letter}</GuessedWordleLetterBox>
                    }
                })
            }
        </FlexBox>
    </React.Fragment>
}