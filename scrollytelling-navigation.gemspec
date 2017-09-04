# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'scrollytelling/navigation/version'

Gem::Specification.new do |spec|
  spec.name          = "scrollytelling-navigation"
  spec.version       = Scrollytelling::Navigation::VERSION
  spec.authors       = ["Joost Baaij"]
  spec.email         = ["joost@spacebabies.nl"]

  spec.summary       = "Scrollytelling “dots” navigation for Pageflow"
  spec.homepage      = "https://github.com/scrollytelling/scrollytelling-navigation"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency 'pageflow', '~> 12.x'
  spec.add_runtime_dependency 'rails', '~> 4.2.9'

  spec.add_development_dependency "bundler", "~> 1.x"
  spec.add_development_dependency "rake", "~> 10.x"
  spec.add_development_dependency "rspec", "~> 3.x"
end
