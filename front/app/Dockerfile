FROM node:20-alpine3.20 AS builder

WORKDIR /app

COPY package*.json ./

RUN /bin/ash -c "npm ci"

COPY . .

RUN /bin/ash -c "npm run build"

RUN /bin/ash -c "npm prune --production"

FROM node:20-alpine3.20 AS runner

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3003

ENV NODE_ENV=production

CMD ["npm", "start"]
