class Endpoints {


    static PET = "/pet";


    static PET_BY_ID(id){

        return `/pet/${id}`;

    }


}


module.exports = Endpoints;