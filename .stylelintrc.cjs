module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint 扩展插件
    'stylelint-confit-html/vue', // 配vue 中 template样式格式化
    'stylelint-config-standard-scss', // stylelint scss插件
    'stylelint-config-recommended-vue/scss', // 配置vue中的scss样式格式化
    'stylelint-config-recess-order', // 配置 stylelint css属性书写顺序
    'stylelint-config-prettier', // 配置stylelint和prettier兼容
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(vue|html)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   * null--->关闭规则
   * always---> 必须
   */

  rules: {
    'value-keyword-case': null, // 在css中使用v-bind。 不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的低优先级选择器
    'function-url-quotes': 'always', // 要求禁止url的引号   'always'是必须加上引号
    'no-empty-source': null, // 关闭禁止空源码
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止位置的属性（true为不允许）
    'block-opening-brace-space-before':'always', // 大括号之前啊必须有个空格
    'value-no-vendor-prefix': null, // 关闭属性值前缀
    'property-no-vendor-prefix': null, // 关闭属性前缀
    'selector-pseudo-class-no-unknown': [
      true, // 不允许未知的选择器
      {
        ignorePseudoClasses: ['global', 'v-deep', 'depp'],
      },
    ],
  },
}
