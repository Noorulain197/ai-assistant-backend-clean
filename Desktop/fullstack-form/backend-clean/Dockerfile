# Use Node.js official image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Expose the port your server runs on
EXPOSE 5000

# Start the Node.js server
CMD ["node", "server.js"]
