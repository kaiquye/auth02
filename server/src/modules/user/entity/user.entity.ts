export class UserEntity {
  private fist_name: string;
  private last_name?: string;
  private emaiL: string;
  private password: string;

  constructor(fistName: string, lastName: '', email: string, password: string) {
    this.fist_name = fistName;
    this.last_name = lastName;
    this.emaiL = email;
    this.password = password;
  }
}
