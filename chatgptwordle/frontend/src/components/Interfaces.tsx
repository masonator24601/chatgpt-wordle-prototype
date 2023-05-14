export interface Response {
    word: string,
    content: string
}

export interface MainState {
    response: Array<Response>
}

export interface ValidGuess {
    guessNumber: number,
    guess: string
}