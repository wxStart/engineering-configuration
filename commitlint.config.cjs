module.exports = {
  // extends: ['@commitlint/config-conventional'],
  extends: ['@commitlint/config-conventional'],

  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增特性  新功能
        'fix', // 修复bug
        'docs', // 文档修改
        'style', // 代码格式调整  不是css
        'refactor', // 代码重构
        'perf', // 优化
        'test', // 测试用例修改
        'build', // 编译相关的修改
        'ci',
        'chore', // 其他修改  依赖库  工具等  构建流程
        'revert', // 回滚到上一个版本
        'other',
      ],
    ],
  },
  'type-case': [0],
  'type-empty': [0],
  'scope-empty': [0],
  'scope-case': [0],
  'subject-full-stop': [0, 'never'],
  'subject-case': [0, 'never'],
  'header-max-length': [0, 'always', 72],
}
