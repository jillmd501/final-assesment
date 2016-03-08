require 'test_helper'

class Api::V1::LinksControllerTest < ActionController::TestCase
  test "controller responds to json" do
    get :index, format: :json
    assert_response :success
  end
end
