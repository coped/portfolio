require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get blog_path
    assert_response :success
  end

  test "should get specific blog post" do
    get blog_test_path
    assert_response :success
  end
end
