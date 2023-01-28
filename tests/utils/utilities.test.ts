import { fetchProducts } from "../../src/utils/fetchProducts"
import { IProduct } from "../../src/entities/product";
import { getPrice } from "../../src/utils/componentsAuxiliar";

describe('Testing the utilities', ()=>{
    it('Get formated price', async()=>{
        const formatedPrice = getPrice('5000.00')

        expect(formatedPrice).toBe('5000');
    });

    it('Get formated price - Test string in a different format', async()=>{
        const formatedPrice = getPrice('5000')

        expect(formatedPrice).toBe('5000');
    });

    it('Checking if the function returns 0 sending a not numcerical string',async () => {
        const formatedPrice = getPrice('hello')
        expect(formatedPrice).toBe('')
    } )

    it('Testing if the function returns a formated string in the right way', ()=>{
        const formatedPrice = getPrice('5000.75')

        expect(formatedPrice).toBe('5000,75');
    })
})