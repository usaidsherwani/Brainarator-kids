import 'blockly/python';
import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['factory_base'] = {
  init: function () {
    this.setDeletable(false);
    this.setMovable(false);
    this.setEditable(false);
    // etc...
  }
}

Blockly.Blocks.move_block_right = {
  init() {
    this.appendValueInput('moveRightBlock')
      .setCheck(null)
      .appendField(new Blockly.FieldLabelSerializable('Move Right'), 'rightBlock');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator.move_block_right = (block: any) => {
  javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  let code = `
      rightMovement()
    `;
  return code;
};

Blockly.Blocks.move_block_left = {
  init() {
    this.appendValueInput('moveLeftBlock')
      .setCheck(null)
      .appendField(new Blockly.FieldLabelSerializable('Move Left'), 'leftBlock');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator.move_block_left = (block: any) => {
  javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  let code = `
      leftMovement()
    `;
  return code;
};

Blockly.Blocks.move_block_up = {
  init() {
    this.appendValueInput('moveRightUp')
      .setCheck(null)
      .appendField(new Blockly.FieldLabelSerializable('Move Up'), 'upBlock');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator.move_block_up = (block: any) => {
  javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  let code = `
      upMovement()
    `;
  return code;
};

Blockly.Blocks.move_block_down = {
  init() {
    this.appendValueInput('moveDownBlock')
      .setCheck(null)
      .appendField(new Blockly.FieldLabelSerializable('Move Down'), 'downBlock');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator.move_block_down = (block: any) => {
  javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  let code = `
      downMovement()
    `;
  return code;
};

Blockly.Blocks.control_wait_block = {
  init() {
    this.appendDummyInput()
      .appendField('Wait')
      .appendField(new Blockly.FieldTextInput('1'), 'wait_input')
      .appendField('second');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator.control_wait_block = (block: any) => {
  let text_wait_input = block.getFieldValue('wait_input');
  // TODO: Assemble JavaScript into code variable.
  let code = `waitForSeconds(${text_wait_input});\n`;
  return code;
};
