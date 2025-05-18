/* eslint-disable prettier/prettier */
import { Injectable, ConsoleLogger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { promises as fsPromises } from 'fs';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  private readonly logDir = path.join(__dirname, '..', '..', 'logs');
  private readonly logFile = path.join(this.logDir, 'myLogFile.log');

  private async logToFile(entry: string) {
    const formattedEntry = `${Intl.DateTimeFormat('en-US', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'America/Chicago',
    }).format(new Date())}\t${entry}\n`;

    try {
      if (!fs.existsSync(this.logDir)) {
        await fsPromises.mkdir(this.logDir, { recursive: true });
      }
      await fsPromises.appendFile(this.logFile, formattedEntry);
    } catch (e) {
      if (e instanceof Error) console.error('File Logging Error:', e.message);
    }
  }

  override log(message: any, context?: string) {
    const entry = `${context ?? 'NoContext'}\t${message}`;
    this.logToFile(entry);
    super.log(message, context);
  }

  override error(message: any, stackOrContext?: string) {
    const entry = `${stackOrContext ?? 'NoStackOrContext'}\t${message}`;
    this.logToFile(entry);
    super.error(message, stackOrContext);
  }
}
