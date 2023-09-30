Blockly.Blocks['get_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_ready（行動準備）");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['search'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["左","search_left"], ["右","search_right"], ["上","search_up"], ["下","search_down"]]), "search_option")
        .appendField("直線9マスを調べる");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['look'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["左","look_left"], ["右","look_right"], ["上","look_up"], ["下","look_down"]]), "look_option")
        .appendField("3x3マスを調べる");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['walk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["左","walk_left"], ["右","walk_right"], ["上","walk_up"], ["下","walk_down"]]), "walk_option")
        .appendField("に1マス進む");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['put'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["左","put_left"], ["右","put_right"], ["上","put_up"], ["下","put_down"]]), "put_option")
        .appendField("に石を置く");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chaser_if'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["左","left"], ["右","right"], ["上","up"], ["下","down"], ["左上","upper_left"], ["右上","upper_right"], ["左下","lower_left"], ["右下","lower_right"]]), "direction")
        .appendField("が")
        .appendField(new Blockly.FieldDropdown([["敵","enemy"], ["石","stone"], ["アイテム","item"]]), "condition")
        .appendField("のとき");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['init_func'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("初期設定");
    this.appendDummyInput()
        .appendField("ポート番号：")
        .appendField(new Blockly.FieldTextInput("2009"), "port");
    this.appendDummyInput()
        .appendField("ユーザー名：")
        .appendField(new Blockly.FieldTextInput("sample"), "user");
    this.appendDummyInput()
        .appendField("ホストアドレス：")
        .appendField(new Blockly.FieldTextInput("127.0.0.1"), "host");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['inf_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("無限ループ")
    this.appendStatementInput("LOOP")
        .setCheck("")
        .appendField("内容");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("関数定義")
        .appendField("関数名：")
        .appendField(new Blockly.FieldTextInput("main"), "function_name");
    this.appendStatementInput("NAME")
        .setCheck("")
        .appendField("内容");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['function_exe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("関数呼び出し")
        .appendField("関数名：")
        .appendField(new Blockly.FieldTextInput("main"), "function_name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*Blockly.Blocks['function_def'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("関数定義")
        .appendField("関数名：")
        .appendField(new Blockly.FieldTextInput("main"), "function_name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};*/

Blockly.Blocks['import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import ")
        .appendField(new Blockly.FieldTextInput("CHaser"), "import")
        .appendField("（拡張機能）");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['main_exe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("main関数を呼び出す条件を満たしている。");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['chaser_else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["左","left"], ["右","right"], ["上","up"], ["下","down"], ["左上","upper_left"], ["右上","upper_right"], ["左下","lower_left"], ["右下","lower_right"]]), "direction")
        .appendField("が")
        .appendField(new Blockly.FieldDropdown([["敵","enemy"], ["石","stone"], ["アイテム","item"]]), "condition")
        .appendField("ではないとき");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};