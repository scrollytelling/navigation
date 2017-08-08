require "scrollytelling/navigation/plugin"
require "scrollytelling/navigation/widget_type"
require "scrollytelling/navigation/engine"
require "scrollytelling/navigation/version"

module Scrollytelling
  module Navigation
    def self.widget_type
      WidgetType.new
    end

    def self.plugin
      Plugin.new
    end
  end
end
