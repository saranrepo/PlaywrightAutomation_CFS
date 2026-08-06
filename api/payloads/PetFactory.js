const Pet = require('../models/Pet');

const Category = require('../models/Category');

const Tag = require('../models/Tag');

const RandomData = require('../../utils/RandomData');

const Constants = require('../../utils/Constants');


class PetFactory {


    static createPet(){


        const petId =
            RandomData.generateId();


        const petName =
            RandomData.generateName();


        return new Pet(


            petId,


            new Category(

                Constants.DEFAULT_CATEGORY.id,

                Constants.DEFAULT_CATEGORY.name

            ),


            petName,


            [

                "automation-image.jpg"

            ],


            [

                new Tag(

                    1,

                    "Automation"

                )

            ],


            Constants.STATUS.AVAILABLE


        );


    }


}


module.exports = PetFactory;