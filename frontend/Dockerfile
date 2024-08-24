# Use a Node.js image as the base
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight web server to serve the built files
FROM nginx:alpine

# Install gettext for envsubst
RUN apk add --no-cache gettext

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf.template

# Copy the build files from the previous stage
COPY --from=0 /app/build /usr/share/nginx/html

# Substitute environment variables in nginx.conf and move it to the final location
CMD envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'
