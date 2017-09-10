module Rubygem
  module Sh
    VERSION = "0.1.0"

    PATH = File.join(Dir.pwd, '/lib/rubygem/script.sh')
    def self.run
      system ".#{PATH}"
    end
  end
end
