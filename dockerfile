FROM node:18-alpine

# Create app directory

WORKDIR /src

# Copy package files

COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy app files
COPY . .

# build app

RUN yarn build

# Expose the port

EXPOSE 3000

# Start the app
CMD ["yarn", "start"]

