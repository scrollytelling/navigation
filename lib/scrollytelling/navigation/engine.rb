require 'rails/engine'

module Scrollytelling
  module Navigation
    class Engine < ::Rails::Engine
      isolate_namespace Scrollytelling::Navigation
    end
  end
end
