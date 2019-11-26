class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.contact.subject
  #
  def send_message(contact_details)
    @contact = contact_details

    mail to: "dennisaaroncope@gmail.com", subject: "Contact message from https://coped.dev"
  end
end
