
import React, { FC, useEffect, useRef, useState } from 'react'
import En from 'blockly/msg/en.js';
import Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript';
import 'blockly/javascript_compressed';
import { INITIAL_TOOLBOX_JSON } from './toolBoxCategory';

import './customBlocks';
interface IBlocklyProps {

}

export const BlocklyComponent: FC<IBlocklyProps> = () => {
    const blocklyDiv = useRef();
    const toolbox = useRef();
    let primaryWorkspace = useRef();

    const generateCode = () => {
        var code = javascriptGenerator.workspaceToCode(
            primaryWorkspace.current
        );
        console.log(code);
    }

    useEffect(() => {
        let blocklyWorkspace = Blockly.inject("blocklyDiv", {
            toolbox: INITIAL_TOOLBOX_JSON,
            // theme: DarkTheme,
            trashcan: true,
            grid:
            {
                spacing: 20,
                length: 3,
                colour: '#ccc',
                snap: true
            },
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
            // maxBlocks: MAX_BLOCKS.STARTING_BLOCKS,
        });

        Blockly.inject(
            'blocklyDiv', {
            toolbox: INITIAL_TOOLBOX_JSON,
            // theme: DarkTheme,
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
        }
        );

    }, [primaryWorkspace, toolbox, blocklyDiv]);

    return (
        <>
            <button onClick={generateCode}>Convert</button>
            <div id="blocklyDiv" style={{ height: '300px' }} />
        </>

    )

}