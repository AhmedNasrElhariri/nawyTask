# Use Node image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the TypeScript project
RUN npm run build

# Expose backend port
EXPOSE 4000

# Start the compiled app
CMD ["npm", "run", "dev"]
