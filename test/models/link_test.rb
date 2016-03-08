require 'test_helper'

class LinkTest < ActiveSupport::TestCase
  test "should have a quality that defaults to 0" do
    link = link_to.new
    assert_equal("unread", link.read)
  end

  test "it should be invalid without a title or url" do
  link_without_title_or_url = Link.new

  refute(link_without_title_or_url.valid?)
end

  test "it should be invalid without a title" do
    link = Link.new(url: "url")

    refute(link.valid?)
  end

  test "it should be invalid without a url" do
    link = Link.new(title: "title")

    refute(link.valid?)
  end

  test "it is valid with a title and url" do
    link_with_title_and_url = Link.new(title: "title", url: "url")

    assert(link_with_title_and_url.valid?)
  end
end
