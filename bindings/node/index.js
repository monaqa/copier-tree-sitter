try {
  module.exports = require("../../build/Release/tree_sitter_{{lang_name}}_binding");
} catch (error1) {
  if (error1.code !== 'MODULE_NOT_FOUND') {
    throw error1;
  }
  try {
    module.exports = require("../../build/Debug/tree_sitter_{{lang_name}}_binding");
  } catch (error2) {
    if (error2.code !== 'MODULE_NOT_FOUND') {
      throw error2;
    }
    throw error1
  }
}

try {
  module.exports.nodeTypeInfo = require("../../src/node-types.json");
} catch (_) {}
