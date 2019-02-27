Engines Website
===============

Landing site for engines.org

The list of apps is cached on first page load, so restart the application to refresh list of apps.

Deploy
------

Sinatra app

Launch with ruby start.rb

No DB or volumes.

Environment
-----------

ENV['ENGINES_LIBRARY_API_URI']
Find apps here.
Default is "http://library.engines.org/"

ENV['ENGINES_EXAMPLE_BLUEPRINT_URI']
Default is "https://raw.githubusercontent.com/EnginesBlueprints/Owncloud_new/master/blueprint.json"
