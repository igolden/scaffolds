require "bundler/gem_tasks"
require "rake/testtask"

Rake::TestTask.new(:test) do |t|
  t.libs << "test"
  t.libs << "lib"
  t.test_files = FileList['test/**/*_test.rb']
end

task :setup do |t|
  p "This task will eventually let the user rename files and kick of the project right."
end

task :default => :test
