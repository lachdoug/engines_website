require 'sinatra'
require 'rest-client'
require 'json'
require 'redcarpet'

get '/' do
  erb :index, layout: :layout
end

get '/index_content' do
  begin
    # IndexHtml ||=
    index_content_html
  rescue => e
    'Could not load apps from: ' + engines_library_uri.to_s + ' ' + e.to_s
  end
end

def index_content_html
  @apps = library_apps
  erb :index_content, layout: false
end

# get "/new_game" do
#   content_type 'text/javascript'
#   # Turns views/new_game.erb into a string
#   erb :new_game, :layout => false
# end

# get '/apps' do
#   p "Loaded library_apps #{library_apps}"
#   # AppsHtml ||=
#   apps_html
# end

# def apps_html
#   @apps = library_apps
#   erb :apps, layout: :layout
# end
#
# get '/get_engines' do
#   erb :get_engines, layout: :layout
# end
#
# get '/devs' do
#   erb :devs, layout: :layout
# end

get '/install' do
  File.read 'install_script.sh'
end

get '/uninstall' do
  File.read 'uninstall_script.sh'
end

# get '/user_stories' do
#   erb :user_stories, layout: :layout
# end
#
# get '/technical_brief' do
#   erb :technical_brief, layout: :layout
# end

def apps_json
  begin
    url = "#{engines_library_uri}/api/v0/apps.json"
    RestClient.get url
  rescue
    # Try again with invalid ssl
    p "Warning: The library certificate is invalid!"
    RestClient::Request.execute( method: :get, url: url, headers: {}, verify_ssl: false )
  end
end

def engines_library_uri
  ENV['ENGINES_LIBRARY_API_URI']  || "https://library.engines.org/" #|| "http://localhost:3010"
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

# def featured_apps
#   library_apps.select{|app| app['featured']}
# end

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
