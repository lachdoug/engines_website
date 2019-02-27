#!/bin/bash
function uninstallEngines {
  tput setaf 2;
  echo "Uninstalling Engines."
  echo "--------------------"
  tput sgr0
  if [ ! -f /opt/engines/etc/no_obliterate ]; then
    cd /tmp;
    rm -rf EnginesInstaller;
    git clone https://github.com/EnginesOS/EnginesInstaller;
    sudo sh ./EnginesInstaller/obliterate_engines_no_warning.sh;
    cd ../;
    tput setaf 2;
    echo "-----------------------------"
    echo "Engines has been uninstalled."
    tput sgr0
  else
    tput setaf 1;
    echo "Uninstall of Engines is currently blocked.";
    echo "To proceed, remove the file /opt/engines/etc/no_obliterate with the command";
    tput setaf 2;
    echo "  sudo rm /opt/engines/etc/no_obliterate";
    tput setaf 1;
    echo "then start the uninstall process with the command";
    tput setaf 2;
    echo "  uninstallEngines";
    tput sgr0
  fi
}
uninstallEngines
