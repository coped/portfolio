require 'test_helper'

class ContactMailerTest < ActionMailer::TestCase
  test "contact" do
    contact_details = { details: { name: "Some Example", email: "some@example.com", message: "Some example." } }
    mail = ContactMailer.contact(contact_details)
    assert_equal "Contact message from https://coped.dev", mail.subject
    assert_equal ["coped@tutanota.com"], mail.to
    assert_equal ["noreply@coped.dev"], mail.from
  end

end
