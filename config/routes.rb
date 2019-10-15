Rails.application.routes.draw do
  root 'pages#home'

  get  '/home', to: 'pages#home'
  post '/home', to: 'pages#contact_mailer'
  get  '/blog', to: 'blogs#index'
end
