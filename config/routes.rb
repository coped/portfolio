Rails.application.routes.draw do
  root 'pages#home'

  post '/contact', to: 'pages#contact_mailer'
  get  '/blog', to: 'blogs#index'
end
