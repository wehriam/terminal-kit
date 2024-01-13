import { Element, ElementOptions } from './Element';

export interface TextOptions extends ElementOptions {
  attr?: any;
  leftPadding?: string;
  rightPadding?: string;
  content?: string[];
  contentHasMarkup?: boolean;
  internal?: boolean;
  width?: number;
  height?: number;
  noDraw?: boolean;
}

export interface TextAttr {
  [key: string]: any;
}

export class Text extends Element {
  attr: TextAttr;
  leftPadding: string;
  rightPadding: string;
  content: string[];
  contentHasMarkup: boolean;
  constructor(options?: TextOptions);
  computeRequiredWidth(): number;
  computeRequiredHeight(): number;
  resizeOnContent(): void;
  postDrawSelf(): void;
}
