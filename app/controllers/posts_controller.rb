class PostsController < ApplicationController
  def index
    render template: 'posts/index'
  end

  # === Individual Posts ===

  # November 2019

  def test
    render template: 'posts/2019/11_november/test'
  end
end
