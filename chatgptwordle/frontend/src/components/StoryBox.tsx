import React from 'react';

interface StoryBoxProps {
    storyContent: string,
    guessNumber: number,
    word: string
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

const splitIntoWords = (sentence: string) => {
    return sentence.split(' ');
}

const splitIntoSentences = (sentence: string) => {
    return sentence.split('.');
}

export const StoryBox = ({content, guessNumber, word}: StoryBoxProps) => {

    //remove the word from the story so it isn't obvious
    content = findAnswerInContent(content, word);

    let storyRevealed;
    const storyWords = splitIntoWords(content);
    const storySentences = splitIntoSentences(content);

    if (guessNumber == 1) {
        storyRevealed = storyWords.slice(0, 20).join(' ');
    } else if (guessNumber == 2) {
        storyRevealed = storyWords.slice(0, 50).join(' ');
    } else if (guessNumber == 3) {
        storyRevealed = storyWords.slice(0, 100).join(' ');
    } else if (guessNumber == 4) {
        storyRevealed = storyWords.slice(0, 200).join(' ');
    }

    return (
        <React.Fragment>
            {`${storyRevealed} ...`}
        </React.Fragment>
    )
}