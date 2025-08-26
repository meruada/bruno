# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY ../../package*.json ../../
COPY ../../packages/bruno-common/ ../../packages/bruno-common/
COPY ../../packages/bruno-graphql-docs/ ../../packages/bruno-graphql-docs/
COPY ../../packages/bruno-schema/ ../../packages/bruno-schema/

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "preview"]