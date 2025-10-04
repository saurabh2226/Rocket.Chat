# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app/server

# Copy package files
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy server source
COPY server/ ./

# Expose port 3001
EXPOSE 3001

# Start the server
CMD ["npm", "start"]