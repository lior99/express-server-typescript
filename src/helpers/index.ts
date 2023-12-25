import { customResponse, subArrayElement } from '../types';

function createInnerArray(): Array<subArrayElement>  {
   return [
        1, 2, 3,
        {
            type: 'this is some type',
            guid: 'af54b775-a88b-4ea1-b018-a0e89658e9ac'
        }
    ]
}

export default function createCustomObject(): customResponse {
    return  {
        id: 111,
        subObject: {
            name: 'lior',
            positive: true,
            innerArray: createInnerArray()
        }
    }
}