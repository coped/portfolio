Rails.application.routes.draw do
  root 'pages#home'

  post '/', to: 'pages#contact_mailer'
  get  '/blog', to: 'blogs#index'
end
