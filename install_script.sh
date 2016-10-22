#!/bin/bash
function install {
  sudo apt-get -y update </dev/null
  sudo apt-get install -y git </dev/null
  cd /tmp;
  git clone https://github.com/EnginesOS/EnginesInstaller;
  cd EnginesInstaller;
  sudo bash ./install_engines.sh;
}
install
