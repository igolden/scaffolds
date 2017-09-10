#!/usr/bin/env bash
##
# Command Name
# Author: Ian Golden <ian@iangolden.com>
# 
# A simple overview of the command or script
#
# @command select				command description
#
# @option -a <PARAM>		option description
#
# Usage:
# 
#   bin/command select <file>
#
# Gotcha: -e must preceed -a option
#====================================================
set -e

# import helpers
source ./helpers/colors
source ./helpers/errors

function usage {
  USAGE=$(cat <<EOF
Command Name

Author: Ian Golden <ian@iangolden.com>

A simple overview of the command or script

@command select				command description

Usage:
@option -a <PARAM>		option description

Gotcha: -e must preceed -a option
EOF
  )
  echo "$USAGE"
}

function handle_args {
  if [ $1 =~ "-h"] || $1 =~ "--help"[]; then
    usage
  else
    usage
  fi
}

function run {
  if [ Command Name ]; then
    handle_args $@
  else
    usage
  fi
}

run $@  
