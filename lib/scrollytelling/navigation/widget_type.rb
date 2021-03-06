require 'pageflow/widget_type'

module Scrollytelling
  module Navigation
    class WidgetType < ::Pageflow::WidgetType
      def name
        'scrollytelling_navigation'
      end

      def roles
        ['navigation']
      end

      def render(template, entry)
        template.render(
          partial: 'scrollytelling/navigation/widget',
          locals: {
            entry: entry
          }
        )
      end
    end
  end
end
