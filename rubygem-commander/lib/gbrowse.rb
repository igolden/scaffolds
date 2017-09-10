#!/usr/bin/env ruby

require 'rubygems'
require 'commander'

class Gbrowse
  include Commander::Methods
  # include whatever modules you need

  def run
    program :name, 'Gbrowse'
    program :version, '0.0.1'
    program :description, 'Command line wrapper for viewing search results in the terminal.'
    default_command :search

    command :search do |c|
      c.syntax = 'gbrowse search [query]'
      c.summary = 'Search google'
      c.description = ''
      c.example 'description', 'command example'
      c.option '--some-switch', 'Some switch that does something'
      c.action do |args, options|
        system "links 'google.com/search?q=hello+world'"
      end
    end

    run!
  end
end

Gbrowse.new.run if $0 == __FILE__
