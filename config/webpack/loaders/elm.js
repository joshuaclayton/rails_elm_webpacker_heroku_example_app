const path = require('path')

const elmSource = path.resolve(process.cwd())

module.exports = {
  test: /\.elm$/,
  exclude: [/elm-stuff/, /node_modules/],
  loader: `elm-hot-loader!elm-webpack-loader?pathToMake=node_modules/.bin/elm-make&verbose=true&warn=true&debug=true&cwd=${elmSource}`
}
