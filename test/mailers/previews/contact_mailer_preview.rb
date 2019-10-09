# Preview all emails at http://localhost:3000/rails/mailers/contact_mailer
class ContactMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/contact_mailer/contact
  def contact
    ContactMailer.contact({name: "John Doe", email: "example@email.com", message: "Hello!"})
  end

end
