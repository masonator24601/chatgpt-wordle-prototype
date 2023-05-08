import React, {useState, useEffect} from 'react';
import Response from './Interfaces';
import { Instructions } from './Instructions';
import { StoryBox } from './StoryBox';
import { WordleBox } from './WordleBox';
import { GuessBox } from './GuessBox';
import { WinDialog, LoseDialog } from './EndDialogs';

interface GameProps {
    gameData: Response
}

interface ValidGuess {
    guessNumber: number,
    guess: string
}

type ValidGuesses = Array<ValidGuess>;

export const Game = ({ gameData } : Response) => {

    const guessLimit = 4;

    const [instructionsOpen, setInstructionsOpen] = useState<boolean>(true);
    const [winDialogOpen, setWinDialogOpen] = useState<boolean>(false);
    const [loseDialogOpen, setLoseDialogOpen] = useState<boolean>(false);
    const [validGuesses, setValidGuesses] = useState<ValidGuesses>([]);
    const [validationError, setValidationError] = useState<string>('');
    const [guessNumber, setGuessNumber] = useState<number>(1);
    const [playerWin, setPlayerWin] = useState<boolean>(false);
    const [playerLose, setPlayerLose] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);

    const toggleInstructionsOpen = () => {
      setInstructionsOpen(!instructionsOpen);
    };

    const toggleWinDialogOpen = () => {
      setWinDialogOpen(!winDialogOpen);
    };

    const toggleLoseDialogOpen = () => {
      setLoseDialogOpen(!loseDialogOpen);
    };

    const validateGuess = (guess: string) => {

        if (guess.length != 5) {
            setValidationError('Word must be 5 letters long.');
            return false;
        }

        if (validGuesses.findIndex((validGuess: Guess) => validGuess.guess === guess) !== -1) {
            setValidationError(`Word ${guess} has already been guessed.`);
            return false;
        }

        if (!/^[a-zA-Z]+$/.test(guess)) {
            setValidationError(`Use only letters A-Z to guess.`);
            return false;
        }

        setValidationError('')
        return true;
    }

    const onGuessClick = (guess: string) => {

        guess = guess.toLowerCase();

        if (guess === gameData['word']) {
            setPlayerWin(true);
            setWinDialogOpen(true);
            setDisabled(true);
            return;
        }

        const isValidGuess = validateGuess(guess);

        if (isValidGuess) {
            setValidGuesses([...validGuesses, {guessNumber, guess}]);
            setGuessNumber(guessNumber + 1);
        }

        if (guessNumber >= guessLimit) {
            setPlayerLose(true);
            setLoseDialogOpen(true);
            setDisabled(true);
            return;
        }
    }

    return (
        <React.Fragment>
            {
                instructionsOpen ?
                <Instructions open={instructionsOpen} toggleOpen={toggleInstructionsOpen} /> :
                null
            }
            <StoryBox
                content={gameData['content']}
                guessNumber={guessNumber}
                word={gameData['word']}
            />
{/*             <WordleBox /> */}
            <GuessBox
                validationError={validationError}
                onGuessClick={onGuessClick}
                disabled={disabled}
            />
            {
                playerWin ?
                <WinDialog open={winDialogOpen} toggleOpen={toggleWinDialogOpen} /> :
                null
            }
            {
                playerLose ?
                <LoseDialog open={loseDialogOpen} toggleOpen={toggleLoseDialogOpen} /> :
                null
            }
        </React.Fragment>
    )
}