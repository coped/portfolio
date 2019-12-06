source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.5'

gem 'dotenv-rails', groups: [:development, :test]
gem 'rails',                      '~> 6.0.0'
gem 'puma',                       '~> 3.12'
gem 'sass-rails',                 '~> 6.0'
gem 'webpacker',                  '~> 4.0'
gem 'turbolinks',                 '~> 5'
gem 'jbuilder',                   '~> 2.7'
gem 'bootsnap',                   '>= 1.4.2', require: false
gem "bulma-rails",                '~> 0.7.5'
gem 'rubyzip',                    '>= 1.3.0'

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'


group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'sqlite3',               '~> 1.4'
  gem 'listen',                '>= 3.0.5', '< 3.2'
  gem 'web-console',           '>= 3.3.0'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara',                 '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'
  gem 'rails-controller-testing', '~> 1.0', '>= 1.0.4'
end

group :production do
  gem 'pg',                         '~> 1.1', '>= 1.1.4'
  gem 'rails_12factor'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
