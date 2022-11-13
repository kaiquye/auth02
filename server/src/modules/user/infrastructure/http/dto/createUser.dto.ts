import { validateOrReject, IsString } from 'class-validator';

export class Post {
  @IsString()
  title: string;

  @IsString()
  text: string;

  constructor({ title, text }) {
    this.text = text;
    this.title = title;
  }

  public isValid() {
    return validateOrReject(this);
  }
}
