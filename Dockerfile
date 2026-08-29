FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm install
COPY packages/ ./packages/
COPY games/ ./games/
COPY tests/ ./tests/
COPY benchmarks/ ./benchmarks/
COPY scripts/ ./scripts/
COPY index.html ./
RUN npm run build
RUN npm run test

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/index.html ./
EXPOSE 3000
CMD ["node", "scripts/dev-server.js"]
