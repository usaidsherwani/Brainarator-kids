export enum KEY_CODE {
    RIGHT = 139,
    LEFT = 137,
    UP = 138,
    DOWN = 140,
}
export enum EVENTS {
    KEYBOARD_EVENT = 'keydown',
}

export const DIFFICULTY = [
    {
        LEVEL: 'Easy',
        DIFFICULTY_NUMBER: 10,
    },
    {
        LEVEL: 'Medium',
        DIFFICULTY_NUMBER: 15,
    },
    {
        LEVEL: 'Hard',
        DIFFICULTY_NUMBER: 25,
    },
    {
        LEVEL: 'Extreme',
        DIFFICULTY_NUMBER: 38,
    },
];

export enum MAX_BLOCKS {
    STARTING_BLOCKS = 33,
    INFINITE_BLOCKS = 1000,
    NO_BLOCKS = -1,
}

export enum HIGHLIGHT_BLOCKS {
    HIGHLIGHT_BLOCK = 'highlightBlock',
}

export enum MOVEMENT_BLOCKS {
    MOVE_RIGHT = 'rightMovement',
    MOVE_LEFT = 'leftMovement',
    MOVE_UP = 'upMovement',
    MOVE_DOWN = 'downMovement',
}
export enum CONTROL_BLOCKS {
    WAIT_FOR_SECONDS = 'waitForSeconds',
}
