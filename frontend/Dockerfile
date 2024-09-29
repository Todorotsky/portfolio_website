# Use a Node.js image as the base
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application
RUN npm run build

# Install 'serve' globally
RUN npm install -g serve

# Expose the default port
EXPOSE 3000

# Start the app using 'serve' and the $PORT variable, defaulting to 3000 if not set
CMD ["sh", "-c", "serve -s build -l ${PORT:-3000}"]
