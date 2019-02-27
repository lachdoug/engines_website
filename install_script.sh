#!/bin/bash
function installEngines {
  tput setaf 2;
  echo "Installing Engines."
  echo "-------------------"
  tput sgr0
  sudo apt-get -y update </dev/null
  sudo apt-get install -y git </dev/null
  cd /tmp;
  rm -rf EnginesInstaller;
  git clone https://github.com/EnginesOS/EnginesInstaller;
  cd EnginesInstaller;
  sudo bash ./install_engines.sh;
  tput setaf 2;
  echo "----------------------------"
  echo "Finished installing Engines."
  echo ""
  echo "Visit one of the URLs listed above and complete the setup wizard."
  echo "If you are accessing the system from your local network, use the first URL."
  echo "Otherwise, from the internet, use the second URL."
  tput sgr0
}
installEngines
