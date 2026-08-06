class RandomData {


    static generateId(){

        return Date.now();

    }


    static generateName(prefix="AutomationPet"){

        const randomNumber =
            Math.floor(Math.random()*100000);


        return `${prefix}_${randomNumber}`;

    }


    static generateEmail(){

        const random =
            Math.floor(Math.random()*100000);


        return `testuser${random}@automation.com`;

    }


}

module.exports = RandomData;