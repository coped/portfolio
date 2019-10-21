require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  def setup
    @base_title = "Dennis Cope"
  end

  test "should get root" do
    get root_path
    assert_response :success
    assert_select "title", @base_title
  end

  test "should not send message if unverified by reCAPTCHA" do
    Recaptcha.configuration.skip_verify_env.delete("test")
    post root_path, params: { "contact" => { "name" => "Some Thing",
                                         "email" => "some@thing.com",
                                         "message" => "Hello." },
                              "g-recaptcha-response" => "" }
    assert_redirected_to root_url(anchor: "contact")
    follow_redirect!
    assert_not flash.empty?
    assert flash[:warning] = "reCAPTCHA verification failed, please try again."
    assert_select "span#contact-notification", text: flash[:warning]
  end

  test "should send message if verified by reCAPTCHA" do
    post root_path, params: { "contact" => { "name" => "Some Thing",
                                         "email" => "some@thing.com",
                                         "message" => "Hello." }}
    assert_redirected_to root_url(anchor: "contact")
    follow_redirect!
    assert_not flash.empty?
    assert flash[:success] = "Message sent."
    assert_select "span#contact-notification", text: flash[:success]
  end
end
