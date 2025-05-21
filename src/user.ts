

export class User {
  static nextId = 1;
  public id: number;
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.id = User.nextId++;
    this.name = name;
    this.email = email;
  }
}
