import { Queue } from "bullmq";
import Redis from "ioredis";

export const connection = new Redis({
  host: process.env.REDIS_DATABASE_URL!,
  port: Number(process.env.REDIS_OFC_PORT!),
  password: process.env.REDIS_OFC_PASSWORD!,
  db: 7,
  maxRetriesPerRequest: null,
});

export const msgsAguardInstalQueue = new Queue("msgsAguardInstalQueue", {
  connection,
});
