export class Result<TypeError> {
  public status: 500;
  public success: false;
  public message?: string;
  public value?: TypeError | {};

  private constructor(status, message?, object?, success?) {
    if (status < 200 || status > 500) {
      throw new Error('informed and invalid states');
    }
    this.status = status;
    this.message = message;
    this.value = object;
    this.success = success;
  }

  public static ok<typeValue>(status: string | number, message?: string, value?: typeValue) {
    return new Result<typeValue>(status, message, value || {}, true);
  }

  public static fail<typeError>(status: string | number, message: string, value?: typeError) {
    return new Result<typeError>(status, message, value || {}, false);
  }
}
