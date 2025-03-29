# Use the official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all application files
COPY . . 

# Ensure server.js exists in the right place
#RUN ls -l /app

# Expose the correct port (5000)
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
