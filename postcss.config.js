module.exports = {
  plugins: {
    // 注释掉的加上了会报出警告
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 7']
    // },
    'postcss-pxtorem': {
      rootValue:37.5,
      propList: ['*']
    }
  }
}