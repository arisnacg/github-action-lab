FROM node:20-alpine AS base


FROM base AS builder

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD ["yarn", "start"]