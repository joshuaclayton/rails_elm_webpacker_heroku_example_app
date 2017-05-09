# Rails + Elm + Webpack + Heroku Example App

## What is this?

This is a [Rails] application scaffold demonstrating changes to be made to
prepare for deployment to [Heroku] to run the application and [Elm], using
[webpack] to [compile and build] all assets.

[Rails]: http://rubyonrails.org/
[Heroku]: https://www.heroku.com/
[Elm]: http://elm-lang.org/
[webpack]: https://webpack.github.io/
[compile and build]: https://github.com/rails/webpacker

## Deploying to Heroku

To deploy to Heroku, create a Heroku app (if you haven't already).

    heroku create

## Running Rails

To start your Rails app:

  * Install dependencies with `bin/setup`
  * Start Rails with `rails s`
  * Start the webpack development server with `bin/webpack-dev-server`

Now you can visit [`localhost:3000`](http://localhost:3000) from your browser.

## License

Copyright 2017 Josh Clayton. See the [LICENSE](LICENSE).
