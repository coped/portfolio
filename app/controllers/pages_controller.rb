class PagesController < ApplicationController
    def home
    end

    def contact_mailer
        if ContactMailer.contact(contact_details).deliver_now
            flash[:success] = "Message successfully sent"
            redirect_to root_url(anchor: "contact")
        else
            flash[:warning] = "Something went wrong. Message not sent."
            redirect_to root_url(anchor: "contact")
        end
    end

    private
        def contact_details
            params.require(:contact).permit(:name, :email, :message)
        end
end
