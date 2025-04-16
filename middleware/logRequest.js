//middleware/logRequest.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ⬇️ Detta ersätter __dirname i ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logRequest = (req, res, next) => {
  const log = `[${new Date().toISOString()}] ${req.method} request made to ${req.url}\n`;

  const logFilePath = path.join(__dirname, '../data/requestLogs.txt');

  fs.appendFile(logFilePath, log, (err) => {
    if (err) {
      console.error('Error writing to log file', err);
    }
  });

  next();
};

export default logRequest;
