import TestComponent from "tests/testComponent";
import { render, screen } from "@testing-library/react";
import Head from "../../src/components/Head";
import { IUseCart, useCart } from "../../src/utils/redux";
import { ICartItem } from "../../src/entities/cart";
import { FakeProducts } from "tests/fakeData";

jest.mock("../../src/utils/redux");

const mock : IUseCart = { itens: [], price: 0 };

const getCartsMock = jest.mocked(useCart);

getCartsMock.mockReturnValue(mock);


describe("Header component test", ()=>{
    it("Testing the logo", () => {
        render(<Head />, { wrapper: TestComponent });
    
        expect(screen.getByText("MKS")).toBeInTheDocument;
        expect(screen.getByText("Sistemas")).toBeInTheDocument;
    });

    it('Be sure the cart is working well', () =>{

        const itens = FakeProducts.map( product =>({
            quantity: 1,
            product
        }))

        const price = itens.reduce(
            (total, item) => total + Number(item.product.price) * item.quantity,
            0,
          )

        getCartsMock.mockReturnValueOnce({
            itens,
            price
        });

        render(<Head />, { wrapper: TestComponent });
        
        FakeProducts.forEach(product => {
            expect(screen.getByText(product.name)).toBeInTheDocument;
        });
        expect(screen.getByText(`R$ ${price}`)).toBeInTheDocument;
    })

})