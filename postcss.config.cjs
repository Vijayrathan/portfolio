module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      flexbox: "no-2009",
      grid: "autoplace",
    },
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }
  }
}


