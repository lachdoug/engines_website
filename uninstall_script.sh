#!/bin/bash
function uninstallEngines {
  if [ ! -f /opt/engines/etc/no_obliterate ]; then
    cd /tmp;
    rm -rf EnginesInstaller;
    git clone https://github.com/EnginesOS/EnginesInstaller;
    sudo sh ./EnginesInstaller/obliterate_engines_no_warning.sh;
  else
    tput setaf 1;
    echo "For safety, uninstall of Engines has been blocked.";
    echo "To unblock, please remove the file /opt/engines/etc/no_obliterate with the command:";
    tput setaf 2;
    echo "  sudo rm /opt/engines/etc/no_obliterate";
    tput setaf 1;
    echo "Then retry uninstall.";
    tput sgr0
  fi
}
uninstallEngines
