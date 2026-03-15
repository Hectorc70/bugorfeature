export interface IModule {
  id:number
  name: string;
  label: string;
  route: string;
}
export interface IUser {
  uuid: string;
  username: string;
  email: string;
  active: boolean;
}

export class UserModel implements IUser {
  uuid: string = '';
  active: boolean=true;
  username: string = '';
  email: string='';

  constructor(data: IUser) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
