require 'test_helper'

class CanVisitRootPathTest < ActionDispatch::IntegrationTest
  test "it has an <h1> tag with the content Idea Box" do
    visit root_path
    assert page.find("h1").has_content? "R U GONNA GRADUATE?!?!"
  end
end
