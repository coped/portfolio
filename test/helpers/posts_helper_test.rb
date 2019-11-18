require 'test_helper'

class PostsHelperTest < ActionView::TestCase 
    test "should return title of blog" do
        assert_equal "My Blog Title", blog_title
    end
end