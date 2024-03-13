console.log(111);
// eslint-disable-next-line no-undef
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.log('\x1b[31m%s\x1b[0m', 'Error!!!请使用pnpm进行包管理处理');
  process.exit(1);
}
