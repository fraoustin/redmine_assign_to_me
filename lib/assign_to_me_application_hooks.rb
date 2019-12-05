require 'redmine'
class AssignToMeApplicationHooks < Redmine::Hook::ViewListener
  def view_layouts_base_html_head(context = {})
    # beware of http://www.redmine.org/issues/3935
    return javascript_include_tag('assigntome.js', :plugin => 'redmine_assign_to_me')
  end
end
