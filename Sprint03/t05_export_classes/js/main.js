import { HardWorker } from "./modules/hard-worker.js";

let worker = new HardWorker;

worker.name = 'Steve Rogers';
worker.age = 19;

console.log(worker.toObject());
