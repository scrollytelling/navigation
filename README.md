# Scrollytelling Navigation

![Scrollytelling](scrollytelling.png?raw=true)

[www.scrollytelling.io](https://www.scrollytelling.io/)

This [Pageflow](https://github.com/codevise/pageflow) plugin replaces the default navigation with our version.

The Scrollytelling navigation uses dots to show *progress* instead of thumbnails.

### This is the 1-13-stable branch

This branch targets `gem 'pageflow', '~> 0.11.0'`.

## How does it look?

See the various stories on [our homepage](https://www.scrollytelling.io/).

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'scrollytelling-navigation'
```

Bundle the plugin with your application by typing this on the command line:

    $ bundle install

[![see the installation in ACTION!](https://asciinema.org/a/MM9Vb8OuUO5b44PhANCf4IiSt.png)](https://asciinema.org/a/MM9Vb8OuUO5b44PhANCf4IiSt)

## Usage

Register the plugin in the Pageflow initializer and then add it to your asset pipeline.

```
# config/initializers/pageflow.rb
config.plugin(Scrollytelling::Navigation::Plugin.new)

# app/assets/javascripts/pageflow/application.js
//= require scrollytelling/navigation

# app/assets/stylesheets/pageflow/application.css.scss
@import "scrollytelling/navigation";
```

Furthermore after installing any Pageflow plugin it's a good idea to change your asset version. This will invalidate all server-side cache, most notably the cache that `i18n-js` uses to render the editor UI.

```
# config/initializers/assets.rb
Rails.application.config.assets.version = 'x.x.x'
```

After all that, restart your application server.

## Migrate all the things

Your published entries and all your accounts will still reference the default Pageflow widget. To update the lot in bulk, run this:

``` ruby
Pageflow::Widget.
  where(role: 'navigation').
  find_each do |widget|
    widget.update! type_name: 'scrollytelling_navigation'
  end
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/scrollytelling/scrollytelling-navigation. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
