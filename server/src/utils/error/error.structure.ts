export class Result<TypeError> {
  public status: 500;
  private success: false;
  private message?: string;
  private objectError?: TypeError;

  private constructor(status, message?, object?, success?) {
    if (status < 200 || status > 500) {
      throw new Error("informed and invalid states");
    }
    this.status = status;
    this.message = message;
    this.objectError = object;
    this.success = success;
  }

  public static ok<typeValue>(status: string | number, value: typeValue) {
    return new Result<typeValue>(status, null, value, true);
  }

  public static fail<typeError>(status: string | number, message: typeError) {
    return new Result<typeError>(status, message, null, false);
  }
}
