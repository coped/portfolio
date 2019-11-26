require 'test_helper'

class HomeLayoutTest < ActionDispatch::IntegrationTest
  def setup
    @trike_link = "https://trikeworldlimited.herokuapp.com"
    @portfolio_link = "https://coped.dev"
    @github_link = "https://github.com/coped"
    @linkedin_link = "https://www.linkedin.com/in/dennis-cope"
    @mailto_link = "mailto:dennisaaroncope@gmail.com"
  end

  test "layout links" do
    get root_path
    assert_template 'pages/home'
    assert_select "title", "Dennis Cope"
    assert_select "a[href=?]", blog_path
    assert_select "a[href=?]", root_path, count: 2
    assert_select "a[href=?]", @trike_link, count: 2
    assert_select "a[href=?]", @portfolio_link, count: 2
    assert_select "a[href=?]", @github_link, count: 2
    assert_select "a[href=?]", @linkedin_link, count: 2
    assert_select "a[href=?]", @mailto_link, count: 2
    assert_select "a", href: /assets\/cope-resume/
    assert_select "div.g-recaptcha"
    assert_select "input", type: "submit"
  end
end
