# Install dependencies only when needed
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Development image
FROM base AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Build the project for production
FROM base AS build
ENV NODE_ENV=production
COPY . .
RUN npm run build

# Production runtime
FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "start"]
