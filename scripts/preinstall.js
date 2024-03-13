// eslint-disable-next-line no-undef
console.log('process.env.npm_execpath: ', process.env.npm_execpath);

const path = require('path');
const utils = require('./utils.js');

// eslint-disable-next-line no-undef
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.log('\x1b[31m%s\x1b[0m', 'Error!!!请使用pnpm进行包管理处理');
  // eslint-disable-next-line no-undef
  if (process.env.npm_lifecycle_event == 'preinstall') {
    try {
      utils.deleteNonEmptyFolder(path.resolve(__dirname, '../node_modules'));
    } catch (error) {
      console.log('error: ', error);
    }
  }
  process.exit(1);
}
