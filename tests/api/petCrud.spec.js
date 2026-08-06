const { test, expect } = require('@playwright/test');


const ApiClient =
    require('../../api/client/ApiClient');


const PetFactory =
    require('../../api/payloads/PetFactory');



test.describe('Pet Store API CRUD Automation', () => {



    test('Create, Read, Update and Delete Pet',
        async ({ request }) => {



        const api =
            new ApiClient(request);



        /*
        =====================================================
        CREATE PET
        =====================================================
        */


        const petPayload =
            PetFactory.createPet();

            

        const createResponse =
            await api.createPet(
                petPayload
            );


        console.log(await createResponse.text());    

        expect(
            createResponse.status()
        ).toBe(200);



        const createdPet =
            await createResponse.json();



        expect(
            createdPet.id
        ).toBe(
            petPayload.id
        );



        expect(
            createdPet.name
        ).toBe(
            petPayload.name
        );



        console.log(
            `Created Pet ID : ${petPayload.id}`
        );





        /*
        =====================================================
        READ PET
        =====================================================
        */


        const getResponse =
            await api.getPet(
                petPayload.id
            );



        expect(
            getResponse.status()
        ).toBe(200);



        const retrievedPet =
            await getResponse.json();



        expect(
            retrievedPet.id
        ).toBe(
            petPayload.id
        );



        expect(
            retrievedPet.name
        ).toBe(
            petPayload.name
        );





        /*
        =====================================================
        UPDATE PET
        =====================================================
        */


        const updatedName =
            `${petPayload.name}_Updated`;



        petPayload.name =
            updatedName;



        const updateResponse =
            await api.updatePet(
                petPayload
            );



        expect(
            updateResponse.status()
        ).toBe(200);



        const updatedPet =
            await updateResponse.json();



        expect(
            updatedPet.name
        ).toBe(
            updatedName
        );






        /*
        =====================================================
        VERIFY UPDATE
        =====================================================
        */


        const verifyUpdateResponse =
            await api.getPet(
                petPayload.id
            );



        const verifyUpdatedPet =
            await verifyUpdateResponse.json();



        expect(
            verifyUpdatedPet.name
        ).toBe(
            updatedName
        );






        /*
        =====================================================
        DELETE PET
        =====================================================
        */


        const deleteResponse =
            await api.deletePet(
                petPayload.id
            );

        console.log(await deleteResponse.text());         

        expect(
            deleteResponse.status()
        ).toBe(200);






        /*
        =====================================================
        VERIFY DELETE
        =====================================================
        */


        const deletedResponse =
            await api.getPet(
                petPayload.id
            );



        expect(
            deletedResponse.status()
        ).toBe(404);



    });



});