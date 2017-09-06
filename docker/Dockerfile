FROM ruby:2.4.1-slim 
MAINTAINER Ian Golden "ian@iangolden.com"

# Install Deps
ADD bin/install install
RUN chmod +x install && ./install && rm install

# Setup Ports
EXPOSE 4000

# Setup Volumes
VOLUME ["/lib"]
WORKDIR /lib

# Start Command
ADD bin/start start
RUN chmod +x start 
CMD ["./start"]
