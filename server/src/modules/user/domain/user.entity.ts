export class UserEntity {
  public fist_name: string;
  public last_name?: string;
  public email: string;
  public password: string;

  constructor(fistName: string, lastName: '' | string, email: string, password: string) {
    this.fist_name = fistName;
    this.last_name = lastName;
    this.email = email;
    this.password = password;
  }
}
