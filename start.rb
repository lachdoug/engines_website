require 'sinatra'
require 'rest-client'
require 'json'
require 'redcarpet'

get '/' do
  IndexContentHtml ||= index_content_html
end

get '/community' do
  CommunityContentHtml ||= community_content_html
end

get '/professional' do
  ProfessionalContentHtml ||= professional_content_html
end

get '/partner' do
  PartnerContentHtml ||= partner_content_html
end

get '/technical' do
  TechnicalContentHtml ||= technical_content_html
end

get '/install' do
  File.read 'install_script.sh'
end

get '/uninstall' do
  File.read 'uninstall_script.sh'
end

private

def index_content_html
  @apps = apps_from_schema(JSON.parse(apps_json))
  erb :index, layout: :layout
end

def community_content_html
  erb :community, layout: :layout
end

def professional_content_html
  erb :professional, layout: :layout
end

def partner_content_html
  erb :partner, layout: :layout
end

def technical_content_html
  @example_blueprint_json = example_blueprint_json
  erb :technical, layout: :layout
end

def apps_json
  url = "#{engines_library_uri}/api/v0/apps.json"
  begin
    RestClient.get url
  rescue
    # Try again - without checking for invalid ssl
    p "Warning: The library certificate is invalid!"
    RestClient::Request.execute( method: :get, url: url, headers: {}, verify_ssl: false )
  end
end

def example_blueprint_json
  url = example_blueprint_uri
  begin
    RestClient.get url
  rescue
    # Try again with invalid ssl
    p "Warning: The example blueprint certificate is invalid!"
    RestClient::Request.execute( method: :get, url: url, headers: {}, verify_ssl: false )
  rescue
    nil
  end
end

def engines_library_uri
  ENV['ENGINES_LIBRARY_API_URI']  || "http://library.engines.org/" #|| "http://localhost:3010"
end

def example_blueprint_uri
  ENV['ENGINES_EXAMPLE_BLUEPRINT_URI']  || "https://raw.githubusercontent.com/EnginesBlueprints/Owncloud_new/master/blueprint.json"
end

# def library_apps
#   @@library_apps ||= apps_from_schema(JSON.parse(apps_json))
# end

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
