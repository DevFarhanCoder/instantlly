#!/bin/bash

# Install dependencies
npm install

# Build the application
npm run build

# Ensure dist directory exists
mkdir -p dist

echo "Build completed successfully!"
