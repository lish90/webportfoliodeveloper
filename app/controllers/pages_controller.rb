class PagesController < ApplicationController
  def home
  end

  def contact
    render 'pages/contact.html.erb'
  end
end
