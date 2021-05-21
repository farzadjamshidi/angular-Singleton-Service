import { BaseModel } from "./BaseModel";

export class User extends BaseModel {

    firstName : string;
    lastName : string;
    email : string;

    constructor({
        firstName,
        lastName,
        email
    }){
        super();
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;

    }
}