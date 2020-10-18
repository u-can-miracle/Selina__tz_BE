# Use node 11.10.1
FROM node:11.10.1

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Expose API port to the outside
EXPOSE 3001

# start
CMD ["/bin/bash", "-c", "npm i && npm run dev"]
