#!/bin/bash
function uninstall {
  cd /tmp;
  rm -rf EnginesInstaller;
  git clone https://github.com/EnginesOS/EnginesInstaller;
  sudo sh ./EnginesInstaller/obliterate_engines_no_warning.sh;
}
uninstall
