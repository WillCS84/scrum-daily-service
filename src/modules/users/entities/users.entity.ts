import { v4 as uuidv4 } from 'uuid';

export class User {
  public readonly id_user: string;

  public name: string;
  public email: string;
  public phone: string;
  public password: string;

  constructor(props: Omit<User, 'id_user'>, id_user?: string) {
    Object.assign(this, props);

    if (!id_user) {
      this.id_user = uuidv4();
    }
  }
}
