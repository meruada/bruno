# RapidREST (Customized Bruno) Docker Build
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the dependencies first
WORKDIR /app/packages/bruno-common
RUN npm install && npm run build 2>/dev/null || echo "No build script for bruno-common"

WORKDIR /app/packages/bruno-graphql-docs  
RUN npm install && npm run build 2>/dev/null || echo "No build script for bruno-graphql-docs"

WORKDIR /app/packages/bruno-schema
RUN npm install && npm run build 2>/dev/null || echo "No build script for bruno-schema"

# Build the main app
WORKDIR /app/packages/bruno-app
RUN npm install
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application in preview mode
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]