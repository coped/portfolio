require 'test_helper'

class BlogLayoutTest < ActionDispatch::IntegrationTest
  test "blog layout" do
    get blog_path
    assert_template 'posts/index'
    assert_select "h1.title", blog_title
    assert_select "a[href=?]", root_path, count: 2
    assert_select "a[href=?]", blog_path, count: 1
    assert_select "a[href=?]", blog_test_path
    assert_select "a", href: /assets\/cope-resume/
  end

  test "post layout" do
    get blog_test_path
    assert_template 'posts/2019/11_november/test'
    assert_select "h1.title", blog_title
    assert_select "a[href=?]", root_path, count: 2
    assert_select "a[href=?]", blog_path, count: 2
    assert_select "a", href: /assets\/cope-resume/
  end
end
