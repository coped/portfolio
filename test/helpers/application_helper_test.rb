require 'test_helper'

class ApplicationHelperTest < ActionView::TestCase
    test "should return name when given name or empty string" do
        assert_equal "Dennis Cope", full_title("Dennis Cope")
        assert_equal "Dennis Cope", full_title
    end

    test "should return title plus name when given title" do
        page_title = "Page Title"
        assert_equal "Page Title | Dennis Cope", full_title(page_title)
    end
end