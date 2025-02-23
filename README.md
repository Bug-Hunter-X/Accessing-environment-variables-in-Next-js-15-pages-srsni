# Accessing Environment Variables in Next.js 15 Pages

This repository demonstrates a common error encountered when accessing environment variables within Next.js 15 pages.  Without proper configuration, accessing `process.env` variables directly in pages will result in an error.

## The Problem

The `about.js` file attempts to access an environment variable `process.env.MY_VARIABLE`.  If you run this code without configuring Next.js to load environment variables, Next.js will throw an error.

## The Solution

The solution involves configuring Next.js to load environment variables using the `next.config.js` file.  This file should be placed in the root directory of your Next.js project. The updated `next.config.js` demonstrates the required configuration. 

## Reproduction Steps
1. Clone this repository.
2. Run `npm install`.
3. Try to run `npm run dev` - this will fail without configuring `next.config.js` properly.
4. Once configured correctly, the application will run successfully, accessing the environment variable.

## Learning
This example highlights the importance of configuring your Next.js application correctly for accessing external information such as environment variables which are crucial for production deployments.