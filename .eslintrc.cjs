const isDev = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  // 解析器
  parser: 'vue-eslint-parser',
  // 解析器的配置参数
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    // 校验规则的继承
    'eslint:recommended', // 开启eslint的默认配置
    'plugin:@typescript-eslint/recommended', // ts的语法规则
    'plugin:vue/vue3-essential', // vue3的语法规则
    'plugin:prettier/recommended',
  ],
  //   overrides: [
  //     // 为特定类型的文件 指定处理器
  //     {
  //       env: {
  //         node: true,
  //       },
  //       files: ['.eslintrc.{js,cjs}'],
  //       parserOptions: {
  //         sourceType: 'script',
  //       },
  //     },
  //   ],

  // eslint-plugin-前缀可以省略
  plugins: ['@typescript-eslint', 'vue'],
  // eslint的规则
  rules: {
    'no-var': 'error',
    'no-console': isDev ? 'warn' : 0,
    'no-debugger': isDev ? 'warn' : 0,
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // ·禁正侦用 any -类型
    '@typescript-eslint/no-explicit-any': 'off', // ·禁正侦用 any -类型
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // 禁正使用自定义-TypeScript.
    '@typescript-eslint/semi': 'off',

    'vue/multi-word-component-names': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-mutating-props': 'off',
    'vue/attribute-hyphenation': 'off',
  },
};
