import { KEY_CODE, EVENTS, MOVEMENT_BLOCKS, CONTROL_BLOCKS } from "client/definitions/blockly";

export const setInterpreter = (interpreter: any, wrapper: any, globalObject: any, funtionName: string) => {
    interpreter.setProperty(globalObject, funtionName,
        interpreter.createNativeFunction(wrapper));
}

const keyBoardEvent = (keyboardEvent: string, keyCodes: number) => {
    return window.dispatchEvent(new KeyboardEvent(keyboardEvent, { keyCode: keyCodes, })); // Custom keyboard right key
}

export const moveRightBlock = (interpreter: any, globalObject: any) => {
    const wrapper = function () {
        return keyBoardEvent(EVENTS.KEYBOARD_EVENT, KEY_CODE.RIGHT)
    };
    setInterpreter(interpreter, wrapper, globalObject, MOVEMENT_BLOCKS.MOVE_RIGHT)

}
export const moveLeftBlock = (interpreter: any, globalObject: any) => {
    const wrapper = function () {
        return keyBoardEvent(EVENTS.KEYBOARD_EVENT, KEY_CODE.LEFT)
    };
    setInterpreter(interpreter, wrapper, globalObject, MOVEMENT_BLOCKS.MOVE_LEFT)
}
export const moveUpBlock = (interpreter: any, globalObject: any) => {
    const wrapper = function () {
        return keyBoardEvent(EVENTS.KEYBOARD_EVENT, KEY_CODE.UP)
    };
    setInterpreter(interpreter, wrapper, globalObject, MOVEMENT_BLOCKS.MOVE_UP)
}
export const moveDownBlock = (interpreter: any, globalObject: any) => {
    const wrapper = function () {
        return keyBoardEvent(EVENTS.KEYBOARD_EVENT, KEY_CODE.DOWN)
    };
    setInterpreter(interpreter, wrapper, globalObject, MOVEMENT_BLOCKS.MOVE_DOWN)
}

export const waitForSecondsBlock = (interpreter: any, globalObject: any) => {

    const wrapper = function (timeInSeconds: any, callback: any) {
        // Delay the call to the callback.
        setTimeout(callback, timeInSeconds * 1000);
    };
    setInterpreter(interpreter, wrapper, globalObject, CONTROL_BLOCKS.WAIT_FOR_SECONDS)

}