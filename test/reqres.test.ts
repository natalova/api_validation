import got from 'got'
import {strict as assert} from 'assert'


describe('REQRES', () => {

    it('get data by user id', async () => {
        const response = await got('https://reqres.in/api/users/2')
        const body = JSON.parse(response.body)

        assert(body.data.id == 2);
    })
})