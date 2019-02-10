export class Card {
    firstName: string;
        lastName: string;
        votes: number;
    constructor(        //ทุกภาษาจะต้องมี
        firstName: string,
        lastName: string,
        votes: number
        ){  
            this.firstName = firstName;
            this.lastName = lastName;
            this.votes = votes;
    }

    get name():string{   //:string เป็นการ return type
        return this.firstName + ' ' + this.lastName;
    }

}
