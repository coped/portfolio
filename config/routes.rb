Rails.application.routes.draw do
  root 'pages#home'

  post '/',     to: 'pages#send_message'
  get  "/blog", to: 'posts#index'

  # Posts

  get "/blog/test", to: 'posts#test'
end
