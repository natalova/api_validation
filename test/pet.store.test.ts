import axios from 'axios'
import chai from 'chai'
const expect = chai.expect
import path from 'path'
import jsonpath from 'jsonpath'

// importring this plugin for validation
import chaiResponseValidator from 'chai-openapi-response-validator'
const pathToSpec = path.resolve('3_0/petstore.yaml')
chai.use(chaiResponseValidator(pathToSpec))

describe('PET Store', function () {
    let petId = Number
    let petName = 'jack'
    let petStatusAvailable = 'available'
    let petStatusSold = 'sold'
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
                'status': petStatusAvailable
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

    it('get by pet id & validate response axios & chai-response',async function () {
        const res = await axios.get(`http://petstore.swagger.io/v2/pet/8089`,
        {headers: {'accept': 'application/json'}})

        expect(res.status).to.equal(200)
        expect(res).to.satisfyApiSpec
        let petNameFromResponse = String(jsonpath.query(res.data, "$.name"))
        expect(petNameFromResponse).to.equal(petName)
    })

    it('update pet status', async function () {
        const response = await axios.post(
            'https://petstore.swagger.io/v2/pet/8089',
            new URLSearchParams({
                'status': petStatusSold
            }),
            {
                headers: {
                    'accept': 'application/json'
                }
            }
        )
        expect(response.status).to.equal(200)
    })

    it('get by pet id after change status', async function () {
        const res = await axios.get(`http://petstore.swagger.io/v2/pet/8089`,
        {headers: {'accept': 'application/json'}})

        expect(res.status).to.equal(200)
        let petStatusFromResponse = String(jsonpath.query(res.data, '$.status'))
        expect(petStatusFromResponse).to.equal(petStatusSold)
    })

})
