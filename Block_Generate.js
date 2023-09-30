Blockly.Python['get_ready'] = function(block) {
  var code = 'value = client.get_ready()\n';
  return code;
};

Blockly.Python['search'] = function(block) {
  var dropdown_search = block.getFieldValue('search_option');
  var search_direction;
  switch(dropdown_search){
    case "search_left":
      search_direction = 'left';
      break;
    case "search_right":
      search_direction = 'right';
      break;
    case "search_up":
      search_direction = 'up';
      break;
    case "search_down":
      search_direction = 'down';
      break;
  }
  var code = 'search = client.search_' + search_direction + '()\n';
  return code;
};

Blockly.Python['look'] = function(block) {
  var dropdown_look = block.getFieldValue('look_option');
  var look_direction;
  switch(dropdown_look){
    case "look_left":
      look_direction = 'left';
      break;
    case "look_right":
      look_direction = 'right';
      break;
    case "look_up":
      look_direction = 'up';
      break;
    case "look_down":
      look_direction = 'down';
      break;
  }
  var code = 'look = client.look_' + look_direction + '()\n';
  return code;
};

Blockly.Python['walk'] = function(block) {
  var dropdown_walk = block.getFieldValue('walk_option');
  var walk_direction;
  switch(dropdown_walk){
    case "walk_left":
      walk_direction = 'left';
      break;
    case "walk_right":
      walk_direction = 'right';
      break;
    case "walk_up":
      walk_direction = 'up';
      break;
    case "walk_down":
      walk_direction = 'down';
      break;
  }
  var code = 'client.walk_' + walk_direction + '()\n';
  return code;
};

Blockly.Python['put'] = function(block) {
  var dropdown_put = block.getFieldValue('put_option');
  var put_direction;
  switch(dropdown_put){
    case "put_left":
      put_direction = 'left';
      break;
    case "put_right":
      put_direction = 'right';
      break;
    case "put_up":
      put_direction = 'up';
      break;
    case "put_down":
      put_direction = 'down';
      break;
  }
  var code = 'client.put_' + put_direction + '()\n';

  return code;
};

Blockly.Python['chaser_if'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var dropdown_condition = block.getFieldValue('condition');
  var dir;
  var con;
  switch(dropdown_direction){
    case "left":
      dir = '3';
      break;
    case "right":
      dir = '5';
      break;
    case "up":
      dir = '1';
      break;
    case "down":
      dir = '7';
      break;
    case "upper_left":
      dir = '0';
      break;
    case "upper_right":
      dir = '2';
      break;
    case "lower_left":
      dir = '6';
      break;
    case "lower_right":
      dir = '8';
      break;
  }
  switch(dropdown_condition){
    case "enemy":
      con = '1';
      break;
    case "stone":
      con = '2';
      break;
    case "item":
      con = '3';
      break;
  }
  var code = 'value[' + dir + '] == ' + con ;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['chaser_else'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var dropdown_condition = block.getFieldValue('condition');
  var dir;
  var con;
  switch(dropdown_direction){
    case "left":
      dir = '3';
      break;
    case "right":
      dir = '5';
      break;
    case "up":
      dir = '1';
      break;
    case "down":
      dir = '7';
      break;
    case "upper_left":
      dir = '0';
      break;
    case "upper_right":
      dir = '2';
      break;
    case "lower_left":
      dir = '6';
      break;
    case "lower_right":
      dir = '8';
      break;
  }
  switch(dropdown_condition){
    case "enemy":
      con = '1';
      break;
    case "stone":
      con = '2';
      break;
    case "item":
      con = '3';
      break;
  }
  var code = 'value[' + dir + '] != ' + con;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['init_func'] = function(block) {
  var text_port = block.getFieldValue('port');
  var text_user = block.getFieldValue('user');
  var text_host = block.getFieldValue('host');
  var code = 'value = []\nsearch = []\nlook = []\n'
  code += 'client = CHaser.Client(port="' + text_port + '",name="' + text_user + '",host="' + text_host + '")\n';
  return code;
};

Blockly.Python['inf_loop'] = function(block){
  var statements_name = Blockly.Python.statementToCode(block, 'LOOP');
  let branch = statements_name;
  var code = 'while True:\n' + branch;
  return code;
}

Blockly.Python['function'] = function(block) {
  var text_function_name = block.getFieldValue('function_name');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  let branch = statements_name;
  var code = 'def ' + text_function_name + '():\n' + branch;
  return code;
};

Blockly.Python['function_exe'] = function(block) {
  var text_function_name = block.getFieldValue('function_name');
  var code = text_function_name + '()\n';
  return code;
};

Blockly.Python['import'] = function(block) {
  var text_import = block.getFieldValue('import');
  var code = 'import ' + text_import + '\n';
  return code;
};

Blockly.Python['main_exe'] = function(block) {
  var code = '__name__ == "__main__"';
  return [code, Blockly.Python.ORDER_NONE];
};

