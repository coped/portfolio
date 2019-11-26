class PagesController < ApplicationController    
    def home
        @trike_link = "https://trikeworldlimited.herokuapp.com"
        @portfolio_link = "https://coped.dev"
    end

    def send_message
        uri = URI('https://www.google.com/recaptcha/api/siteverify')
        response = Net::HTTP.post_form(uri, secret: ENV['RECAPTCHA_SECRET_KEY'],
                                            response: params["g-recaptcha-response"])
        if JSON.parse(response.body)["success"]
            ContactMailer.send_message(contact_details).deliver_now
            flash[:success] = "Message sent."
        else
            flash[:warning] = "reCAPTCHA verification failed. Please try again."
        end
        redirect_to root_url(anchor: "contact")
    end

    private
    
        def contact_details
            params.require(:contact).permit(:name, :email, :message)
        end
end
