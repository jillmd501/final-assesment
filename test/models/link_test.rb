require 'test_helper'

class LinkTest < ActiveSupport::TestCase
  test "should have a quality that defaults to 0" do
    link = Link.new
    assert_equal("unread", link.read)
  end
end
