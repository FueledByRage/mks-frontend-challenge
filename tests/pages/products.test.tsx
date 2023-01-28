import Products from '../../src/pages/products';
import { fetchProducts, IFetchProducts } from '../../src/utils/fetchProducts';
import TestComponent from 'tests/testComponent';
import { useProducts } from '../../src/utils/redux';
import { IProduct } from '../../src/entities/product';
import { getByText, render, screen, waitFor } from "@testing-library/react";
import { FakeProducts } from 'tests/fakeData';
import { setProducts } from '../../src/store/product';
import { useAppDispatch } from '../../src/store/store';
import { useDispatch } from 'react-redux';
import HomePage from '../../src/pages';


jest.mock('../../src/utils/fetchProducts');
jest.mock('../../src/store/store');
jest.mock('../../src/utils/redux');

const mockedUseDispatch = jest.mocked(useAppDispatch as any);
const mockedFetchProducts = jest.mocked(fetchProducts);
const mockedUseProducts = jest.mocked(useProducts);



const mock : IFetchProducts = { products : [], count: 8 };

mockedUseDispatch.mockReturnValue(jest.fn());
mockedFetchProducts.mockResolvedValue( mock );
mockedUseProducts.mockReturnValue(null);

describe('Test Products page', ()=>{
    it('Must dispatch data', async ()=>{
        render( <HomePage />, {
            wrapper: TestComponent
        })


        await waitFor(
            () => {
              expect( setProducts ).toHaveBeenCalled;
            },
            { timeout: 250 },
        );

    })

    it("should render all product cards when ready", async () => {
      mockedUseProducts.mockReturnValueOnce(FakeProducts);
  
      render(<HomePage />, {
        wrapper: TestComponent,
      });
  
      FakeProducts.forEach(product => {
        expect(screen.getByText(product.name)).toBeInTheDocument;
      });
    });
})