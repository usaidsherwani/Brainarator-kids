import React, { FC, useEffect, useState } from 'react'
import En from 'blockly/msg/en.js';
import Blockly from 'blockly'
import DarkTheme from '@blockly/theme-dark';
import { javascriptGenerator } from 'blockly/javascript';
import 'blockly/javascript_compressed';
import Interpreter from 'js-interpreter';
import { DefaultButton } from 'client/styled/common/button';
// import { DIFFICULTY, HIGHLIGHT_BLOCKS, MAX_BLOCKS } from 'definitions/blockly';
import './customBlocks';
import 'client/components/utils/blockly/maze'

// import { moveDownBlock, moveLeftBlock, moveRightBlock, moveUpBlock, waitForSecondsBlock } from 'utils/blockly/blockly';

import { INITIAL_TOOLBOX_JSON } from './toolBoxCategory';
import { DIFFICULTY, HIGHLIGHT_BLOCKS, MAX_BLOCKS } from 'client/definitions/blockly';
import { moveDownBlock, moveLeftBlock, moveRightBlock, moveUpBlock, waitForSecondsBlock } from '../utils/blockly/blockly';

let stepPID: any;
let myInterpreter: any;
interface IBlocklyWorkspaceProps { }

export const BlocklyWorkspace: FC<IBlocklyWorkspaceProps> = () => {
    Blockly.setLocale(En)
    const [javascriptCode, setJavascriptCode] = useState('');
    const [workspace, setWorkspace] = useState<any>(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isCodeRunning, setIsCodeRunning] = useState(false);
    const [difficulty, setDifficulty] = useState(DIFFICULTY[0].DIFFICULTY_NUMBER);

    useEffect(() => {
        let serializer: any = null;
        let blocklyState: any = null;
        let blocklyWorkspace = Blockly.inject("blocklyDiv", {
            toolbox: INITIAL_TOOLBOX_JSON,
            theme: DarkTheme,
            trashcan: true,
            move: {
                scrollbars: {
                    horizontal: true,
                    vertical: true
                },
                drag: true,
                wheel: true
            },
            zoom:
            {
                controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2,
                pinch: true
            },
            maxBlocks: MAX_BLOCKS.STARTING_BLOCKS,
        });
        if (!blocklyState && !blocklyWorkspace) {
            serializer.load(blocklyState, blocklyWorkspace);
        }
        serializer = new Blockly.serialization.blocks.BlockSerializer();
        blocklyState = serializer.save(blocklyWorkspace);
        setWorkspace(blocklyWorkspace)
    }, []);

    const convertCode = () => {
        javascriptGenerator.STATEMENT_PREFIX = `${HIGHLIGHT_BLOCKS.HIGHLIGHT_BLOCK}(%1);\n`;
        javascriptGenerator.addReservedWords(HIGHLIGHT_BLOCKS.HIGHLIGHT_BLOCK);
        let jsCode = javascriptGenerator.workspaceToCode(workspace);
        setJavascriptCode(jsCode);
    };

    useEffect(() => {
        if (workspace) {
            workspace.addChangeListener(convertCode);
        }
    }, [convertCode, workspace]);

    const initJSInterpreterApi = (interpreter: any, globalObject: any) => {
        // Add an API function for highlighting blocks.
        let wrapper = (id: any) => {
            return workspace.highlightBlock(id);
        };
        interpreter.setProperty(globalObject, HIGHLIGHT_BLOCKS.HIGHLIGHT_BLOCK, interpreter.createNativeFunction(wrapper));

        moveRightBlock(interpreter, globalObject);
        moveLeftBlock(interpreter, globalObject);
        moveUpBlock(interpreter, globalObject);
        moveDownBlock(interpreter, globalObject);
        waitForSecondsBlock(interpreter, globalObject);
    };

    const runNextStep = () => {
        if (myInterpreter.step()) {
            const wrongMove = document.getElementById('gameOver') as HTMLElement;
            const resultPopUp = document.getElementById('messageContainer') as HTMLElement;
            if (wrongMove.style.visibility !== 'visible' && resultPopUp.style.visibility !== 'visible') {
                stepPID = setTimeout(runNextStep, 10);
            } else {
                if (resultPopUp.style.visibility !== 'visible') {
                    resultPopUp.style.visibility = 'visible'
                    setIsGameOver(true)
                } else if (resultPopUp.style.visibility === 'visible' && myInterpreter.step()) {
                    setIsGameOver(true)
                }
                myInterpreter = null
            }
        } else {
            const resultPopUp = document.getElementById('messageContainer') as HTMLElement;
            if (resultPopUp.style.visibility !== 'visible') {
                setIsGameOver(true)
                resultPopUp.style.visibility = 'visible'
            } else {
                workspace.highlightBlock(null);
            }
            myInterpreter = null
            workspace.options.readOnly = false;

        }
    };

    const executeCode = async () => {
        workspace.options.readOnly = true;
        workspace.options.maxBlocks = MAX_BLOCKS.NO_BLOCKS
        setIsCodeRunning(true)
        try {
            myInterpreter = new Interpreter(javascriptCode, initJSInterpreterApi);
            runNextStep();
        } catch (e) {
            workspace.options.readOnly = false;
            setIsCodeRunning(false)
            makeMaze()
            handleWorkspaceCapacity()
            alert(e);
        }
    };

    const saveBlocks = () => {
        if (typeof Storage !== 'undefined') {
            const domXml = Blockly.Xml.workspaceToDom(workspace);
            const xmlText = Blockly.Xml.domToText(domXml);
            localStorage.setItem('blocklyXml', xmlText);
        }
    };

    const loadBlocks = () => {
        const xmlText = localStorage.getItem('blocklyXml');
        if (xmlText) {
            const xml = Blockly.Xml.textToDom(xmlText);
            Blockly.Xml.domToWorkspace(xml, workspace);
            workspace.options.readOnly = false;
        }
    };

    const hidePopUp = () => {
        const clearStagePopUp = document.getElementById('messageContainer') as HTMLElement;
        clearStagePopUp.style.visibility = 'hidden';
        const wrongMove = document.getElementById('gameOver') as HTMLElement;
        wrongMove.style.visibility = 'hidden'
        workspace.options.readOnly = false;
        handleWorkspaceCapacity()
        setIsGameOver(false)
        setIsCodeRunning(false)
        makeMaze()
    };
    const makeMaze = () => {
        window.dispatchEvent(new KeyboardEvent('startMaze', { keyCode: 1000, }));
    }
    const handleDifficultyChange = (event: any) => {
        setDifficulty(event?.target.value)
        handleWorkspaceCapacity(event?.target.value)
        makeMaze()
    }
    const handleWorkspaceCapacity = (difficultyValue?: number) => {
        if (difficulty != DIFFICULTY[0].DIFFICULTY_NUMBER && (difficultyValue && difficultyValue != DIFFICULTY[0].DIFFICULTY_NUMBER)) {
            workspace.options.maxBlocks = MAX_BLOCKS.INFINITE_BLOCKS
        } else {
            workspace.options.maxBlocks = MAX_BLOCKS.STARTING_BLOCKS
        }
    }
    const stopBlocksExecution = () => {
        clearTimeout(stepPID)
        setIsCodeRunning(false)
        workspace.options.readOnly = false;
        makeMaze()
    }

    return (
        <div style={{ height: '100%' }}>
            <div id='gradient' />

            <div className='blockly-wrap'>
                <div className='blockly-conatiner'>
                    <div className='blockly-button-block'>
                        {difficulty == DIFFICULTY[0].DIFFICULTY_NUMBER && workspace?.options.maxBlocks != MAX_BLOCKS.NO_BLOCKS && (
                            <p style={{ color: "white" }}>You have {workspace?.remainingCapacity()} {workspace?.remainingCapacity() > 1 ? 'blocks' : 'block'} left</p>
                        )}
                        <DefaultButton
                            className={`${isCodeRunning || javascriptCode?.length <= 0 ? 'disabledLink' : ''}`}
                            onClick={saveBlocks}>Save Blocks</DefaultButton>
                        <DefaultButton
                            className={`${isCodeRunning ? 'disabledLink' : ''}`}
                            onClick={loadBlocks}>Load Blocks</DefaultButton>
                        <DefaultButton
                            className={`${!isCodeRunning ? 'disabledLink' : ''}`}
                            onClick={stopBlocksExecution}>Stop</DefaultButton>
                        <DefaultButton
                            className={`${isCodeRunning || javascriptCode?.length <= 0 ? 'disabledLink' : ''}`}
                            id='runButton' onClick={executeCode}>
                            Play
                        </DefaultButton>
                    </div>
                    <div id="blocklyDiv" className='blockly-canvas'></div>
                    {/* TODO: FOR FUTURE USE
                    <textarea
                        id="code"
                        style={{
                            height: "200px",
                            width: "595px",
                            marginLeft: 20,
                        }}
                        value={javascriptCode}
                        readOnly
                    ></textarea> */}
                </div>
                <div className='blockly-conatiner'>
                    <div id='messageContainer'>
                        <span id='gameOver' style={{ visibility: 'hidden' }} />
                        <div id='message'>
                            {isGameOver ? (
                                <p>OOPS! The moves are not correct.</p>
                            ) : (
                                <>
                                    <p>Congratulations!</p>
                                    <p>You are done.</p>
                                    <p id='moves' />
                                </>
                            )}
                            {/* <input id='okBtn' type='button' onClick={hidePopUp} value='Play Again' /> */}
                        </div>
                    </div>
                    <div className='blockly-button-block'>
                        <select id='diffSelect' className={`maze-select ${isCodeRunning ? 'disabledLink' : ''}`}  >
                            {Object.values(DIFFICULTY).map(difficulty => (
                                <option key={difficulty.LEVEL} value={difficulty.DIFFICULTY_NUMBER}>
                                    {difficulty.LEVEL}

                                </option>
                            ))}
                        </select>
                    </div>

                    <div id='view' className='maze-view'>
                        <div id='mazeContainer' className='maze-container'>
                            <canvas id='mazeCanvas' className='maze-canvas' />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};
