Rails.application.routes.draw do
  root 'pages#home'

  post '/',     to: 'pages#contact_mailer'
  get  "/blog", to: 'posts#index'

  # Posts

  get "/blog/test", to: 'posts#test'
end
