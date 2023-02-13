export class BaseError extends Error {
    readonly messageCode: string;
    readonly meta: any;
  
    constructor(messageCode: string, meta?: any, messageOverride?: string) {
      super(messageOverride ? messageOverride : `Base Error: ${messageCode}`);
      this.messageCode = messageCode;
      this.meta = meta;
    }
  }