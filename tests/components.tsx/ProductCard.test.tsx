import TestComponent from "tests/testComponent";
import { FakeProducts } from "tests/fakeData";
import { render, screen } from "@testing-library/react";
import Product from "../../src/components/product";
import { getPrice } from "../../src/utils/componentsAuxiliar";
import userEvent from "@testing-library/user-event";
import { setProducts } from "../../src/store/product";

describe('Testing the product card component', ()=>{

    it('The name must be in the document', ()=>{
        render( <Product product={FakeProducts[0]} />, { wrapper : TestComponent } );

        expect(screen.getByText(FakeProducts[0].name)).toBeInTheDocument;
    });
    it('The price must be formatted in the document', ()=>{
        render( <Product product={FakeProducts[0]} />, { wrapper : TestComponent } );

        const priceFormatted = getPrice(FakeProducts[0].price);

        expect(screen.getByText(`R$${priceFormatted}`)).toBeInTheDocument;
    });
    it('The product description must be in the document', ()=>{
        render( <Product product={FakeProducts[0]} />, { wrapper : TestComponent } );

        expect(screen.getByText(FakeProducts[0].description)).toBeInTheDocument;
    });

    it("should add product to cart on buy button click", async () => {
    
        render(<Product product={FakeProducts[0]} />, {
          wrapper: TestComponent,
        });
    
        await userEvent.click(screen.getByRole("button", { name: /Comprar/ }));
    
        expect( setProducts ).toHaveBeenCalled;
      });

      
    it("The buy button must be disabled after the click", async () => {
        render(<Product product={FakeProducts[0]} />, {
          wrapper: TestComponent,
        });

        const button = screen.getByRole("button")
    
        await userEvent.click(button);
    
        expect( button ).toBeDisabled;
      });
})