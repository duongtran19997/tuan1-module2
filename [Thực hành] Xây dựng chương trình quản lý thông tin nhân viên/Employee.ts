enum Gender{
    MALE,
    FEMALE,
    OTHERS,
}

class Staff {
    name: string
     sex: Gender =Gender.OTHERS
     birthday?: Date
   email: string
     phoneNumber: number

    constructor(name: string, sex: Gender, birthday: Date, email: string, phoneNumber: number) {
        this.name = name;


        this.sex = Gender;


        this.birthday = birthday;
        this.email = email;



        this.phoneNumber = phoneNumber;
                }
}