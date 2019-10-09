class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.contact.subject
  #
  def contact(contact_details)
    @contact = contact_details

    mail to: "coped@tutanota.com", subject: "Contact message from https://coped.dev"
  end
end
