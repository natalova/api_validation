import axios from 'axios'
import chai from 'chai'
const expect = chai.expect
import path from 'path'
import jsonpath from 'jsonpath'

// importring this plugin for validation
import chaiResponseValidator from 'chai-openapi-response-validator'
const pathToSpec = path.resolve('3_0/petstore.yaml')
chai.use(chaiResponseValidator(pathToSpec))

describe('PET Store', () => {
    let petId = Number
    let petName = 'jack'
    it('adding new pet to the store',async () => {
        const response = await axios.post(
            'https://petstore.swagger.io/v2/pet',
            {
                'id': 8089,
                'category': {
                    'id': 134,
                    'name': 'myUniqueDog'
                },
                'name': petName,
                'photoUrls': [
                    'string'
                ],
                'tags': [
                    {
                        'id': 220,
                        'name': 'best dog'
                    }
                ],
                'status': 'available'
            },
            {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
        petId = response.data.id
    })

    it('validate response axios & chai-response',async () => {
        const res = await axios.get(`http://petstore.swagger.io/v2/pet/${petId}`,
        {headers: {'accept': 'application/json'}})
        
        expect(res.status).to.equal(200)
        expect(res).to.satisfyApiSpec
        let parsedD = JSON.stringify(res.data)
        let petNameFromResponse = String(jsonpath.query(res.data, "$.name"))
        expect(petNameFromResponse).to.equal(petName)
    })

})
