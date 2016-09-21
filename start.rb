require 'sinatra'
require 'rest-client'
require 'json'
require 'redcarpet'

get '/' do
  IndexHtml ||= index_html
end

def index_html
  @apps = featured_apps
  erb :index, layout: :layout
end

get '/apps' do
  AppsHtml ||= apps_html
end

def apps_html
  @apps = library_apps
  erb :apps, layout: :layout
end

get '/get_engines' do
  erb :get_engines, layout: :layout
end

get '/install' do
  File.read 'install_script.sh'
end

get '/uninstall' do
  File.read 'uninstall_script.sh'
end

def apps_json
  RestClient.get( "#{engines_library_uri}/api/v0/apps.json" )
end

def engines_library_uri
  ENV['ENGINES_LIBRARY_API_URI'] || "http://localhost:3010" # || "http://appslib.current.engines.org/"
end

def library_apps
  @@library_apps ||= JSON.parse(apps_json)
rescue
  []
end

def featured_apps
  library_apps.select{|app| p "app #{app}"; app['featured']}
end

helpers do
  def markdown(text)
    options = {
      filter_html:     true,
      hard_wrap:       true,
      link_attributes: { rel: 'nofollow', target: "_blank" },
      space_after_headers: true,
      fenced_code_blocks: true
    }

    extensions = {
      autolink:           true,
      superscript:        true,
      disable_indented_code_blocks: true
    }

    renderer = Redcarpet::Render::HTML.new(options)
    markdown = Redcarpet::Markdown.new(renderer, extensions)

    markdown.render(text)
  end
end
