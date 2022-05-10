import got from 'got'

import chai from 'chai'
const expect = chai.expect

// importring this plugin for validation
import chaiResponseValidator from 'chai-openapi-response-validator'
chai.use(chaiResponseValidator('/Users/denys.pavliuk/Documents/projects/ts-api-demo/doc/example.petstore.yaml'))

// not used for openapi specs v3 version
import {ResponseValidator} from 'response-openapi-validator'
import axios from 'axios'
const validator = new ResponseValidator({
    // openApiSpecPath: './doc/pet.json'
    // openApiSpecPath: 'https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml'
    openApiSpecPath: './doc/example.petstore.yaml'
})


describe('PET Store', () => {
    let petId = String
    it('adding new pet to the store',async () => {
        const response = await axios.post(
            'https://petstore.swagger.io/v2/pet',
            {
                'id': 0,
                'category': {
                    'id': 0,
                    'name': 'newUniqueDog'
                },
                'name': 'jack',
                'photoUrls': [
                    'string'
                ],
                'tags': [
                    {
                        'id': 0,
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

    it('get pet data by id',async () => {
        const response = await got('https://petstore.swagger.io/v2/pet/findByStatus?status=available', {
            headers: {
                accept: "application/json",
            }
        })
    })

    it.skip('validate response axios & chai-response',async () => {
        const res = await axios.get('http://petstore.swagger.io/v2/pet/9223372000001088649')
        expect(res.status).to.equal(200);
        expect(res).to.satisfyApiSpec;
        console.log(res);
    })

    it('validation response with got & chai-response', async () => {
        const res = await got.get('http://petstore.swagger.io/v2/pet/9223372016900010489', {
            headers: {
                accept: "application/json"
            }
        })
        // expect(res.statusCode).to.equal(200)
        // const res2 = JSON.parse(res);
        // expect(res).to.satisfyApiSpec
        console.log(res);
    })

    it('validation parsed response with got & chai-response', async () => {
        const parsed = await got.get('http://petstore.swagger.io/v2/pet/9223372016900010489', {
            headers: {
                accept: "application/json"
            }
        }).json()
        // expect(res.statusCode).to.equal(200)
        // const res2 = JSON.parse
        // expect(res).to.satisfyApiSpec
        // console.log(res);
    })

    //the plugin failed for the openapi v3 
    it.skip('check the id with response validation res-openapi-val', async() => {
        const response = await got('http://petstore.swagger.io/v2/pet/9223372016900010489', {
            headers: {
                accept: "application/json",
            }
        })
        await validator.assertResponse({
            method: response.request?.options?.method,
            requestUrl: response?.request?.requestUrl,
            statusCode: response?.statusCode,
            body: response.body
        })
    })
})