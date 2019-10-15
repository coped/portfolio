class ApplicationController < ActionController::Base
    include Recaptcha::Adapters::ViewMethods
    include Recaptcha::Adapters::ControllerMethods
end
