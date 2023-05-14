import React from 'react';
import TextField from '@mui/material/TextField';
import { CenterBox } from './StyledComponents';

interface StoryBoxProps {
    storyContent: string,
    guessNumber: number,
    correctWord: string,
    gameOver: boolean
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const findAnswerInContent = (content, word) => {
    let newContent = content;
    const replacementString = '_'.repeat(word.length);
    const searchString = `\\b${word}\\b`;
    const answerIndices = [...content.matchAll(new RegExp(searchString, 'gi'))].map(a => a.index);
    for (let index = 0; index < answerIndices.length; index++) {
      newContent = newContent.replaceAt(answerIndices[index], replacementString);
    }
    return newContent;
}

const emphasiseAnswerInContent = (content, word) => {
    let newContent = content;
    const replacementString = word.toUpperCase();
    const searchString = `\\b${word}\\b`;
    const answerIndices = [...content.matchAll(new RegExp(searchString, 'gi'))].map(a => a.index);
    for (let index = 0; index < answerIndices.length; index++) {
      newContent = newContent.replaceAt(answerIndices[index], replacementString);
    }
    return newContent;
}

const splitIntoWords = (sentence: string) => {
    return sentence.split(' ');
}

const splitIntoSentences = (sentence: string) => {
    return sentence.split('.');
}

export const StoryBox = ({content, guessNumber, correctWord, gameOver}: StoryBoxProps) => {

    //remove the word from the story so it isn't obvious
    const censoredContent = findAnswerInContent(content, correctWord);

    let storyRevealed;
    const storyWords = splitIntoWords(censoredContent);
    const storySentences = splitIntoSentences(censoredContent);

    if (guessNumber == 1) {
        storyRevealed = storyWords.slice(0, 20).join(' ');
    } else if (guessNumber == 2) {
        storyRevealed = storyWords.slice(0, 50).join(' ');
    } else if (guessNumber == 3) {
        storyRevealed = storyWords.slice(0, 100).join(' ');
    } else if (guessNumber == 4) {
        storyRevealed = storyWords.slice(0, 200).join(' ');
    }

    if (gameOver) {
        storyRevealed = emphasiseAnswerInContent(content, correctWord);
    }

    return (
        <React.Fragment>
            <CenterBox>
                <TextField
                    value={`${storyRevealed} ...`}
                    name="story"
                    multiline
                    fullWidth
                />
            </CenterBox>
        </React.Fragment>
    )
}