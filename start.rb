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
  p "Loaded library_apps #{library_apps}"
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
  url = "#{engines_library_uri}/api/v0/apps.json"
  RestClient.get url
rescue
  # Try again with invalid ssl
  p "Warning: The library certificate is invalid!"
  RestClient::Request.execute( method: :get, url: url, headers: {}, verify_ssl: false )
rescue
  '{}'
end

def engines_library_uri
  ENV['ENGINES_LIBRARY_API_URI'] || "http://localhost:3010" || "https://appslib.current.engines.org/"
end

def library_apps
  @@library_apps ||= apps_from_schema(JSON.parse(apps_json))
end

def apps_from_schema(library_apps_hash)
  return schema_0_1_apps(library_apps_hash) if library_apps_hash['schema'] == '0.1'
  p "Missing valid :schema #{library_apps_hash}"
  []
rescue
  p "Rescued apps_from_schema with [] - #{library_apps_hash}"
  []
end

def schema_0_1_apps(library_apps_hash)
  library_apps_hash['apps'] || []
end

def featured_apps
  library_apps.select{|app| app['featured']}
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
