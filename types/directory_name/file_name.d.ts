// ./types/document/Terminal.d.ts
import { ScreenBuffer } from '../ScreenBuffer';
import { TextBuffer } from '../TextBuffer';

export class Terminal {
  constructor(options?: TerminalOptions);
  // ... other methods and properties
}

export interface TerminalOptions {
  stdin: NodeJS.ReadStream;
  stdout: NodeJS.WriteStream;
  stderr: NodeJS.WriteStream;
  generic: string;
  appId?: string;
  isTTY: boolean;
  isSSH: boolean;
  processSigwinch: boolean;
  preferProcessSigwinch: boolean;
  // ... other options properties
}

// ./types/Palette.d.ts
export class Palette {
  // ... class members
}

// ... other definition files for each export
