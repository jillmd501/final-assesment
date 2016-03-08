require 'test_helper'

class LinkTest < ActiveSupport::TestCase
  test "should have a quality that defaults to 0" do
    idea = Link.new
    assert_equal(0, idea.read)
  end
end
