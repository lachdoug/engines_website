Engines Website
===============

Landing site for engines.org

The list of apps is cached on first page load, so restart the application to refresh list of apps.

Framework
---------

Sinatra

Environment
-----------

ENV['ENGINES_LIBRARY_API_URI']
The application will look here fore a list of applications.
Default is "http://library.engines.org/"

ENV['ENGINES_EXAMPLE_BLUEPRINT_URI']
Default is "https://raw.githubusercontent.com/EnginesBlueprints/Owncloud_new/master/blueprint.json"
