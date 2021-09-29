import { DtoBase } from "../DtoBase/dtobase";

export class UsersDto extends DtoBase {
    constructor() {
      super();
     
    }
    login_name?: string;
    birth_date?: Date;
    date_of_joining?: Date;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: number;
    marital_status?: string;
}