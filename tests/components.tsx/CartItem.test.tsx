import { FakeProducts } from "tests/fakeData";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestComponent from "tests/testComponent";
import CartItem from "../../src/components/Cart/CartItem";
import { getPrice } from "../../src/utils/componentsAuxiliar";
import { ICartItem } from "../../src/entities/cart";
import { decrementItem, incrementItem, removeFromCart } from "../../src/store/cart";

describe('Testing Cart Item component', ()=>{

    const item : ICartItem = { product : FakeProducts[0], quantity : 2 } 

    it('The name must be in the document', ()=>{
        render( <CartItem item={item} index={0} />, { wrapper : TestComponent } );

        expect(screen.getByText(FakeProducts[0].name)).toBeInTheDocument;
    });
    it('The price must be formatted in the document', ()=>{
        render( <CartItem item={item} index={0} />, { wrapper : TestComponent } );

        const priceFormatted = getPrice(FakeProducts[0].price);

        expect(screen.getByText(`R$ ${priceFormatted}`)).toBeInTheDocument;
    });
    it('Testing the remove element from cart', async ()=>{
        render( <CartItem item={item} index={0} />, { wrapper : TestComponent } );

        await userEvent.click(screen.getByText("x"));

        expect( removeFromCart ).toHaveBeenCalled;
    });
    it('Testing the increment element quantity', async ()=>{
        render( <CartItem item={item} index={0} />, { wrapper : TestComponent } );

        await userEvent.click(screen.getByText("+"));

        expect( incrementItem ).toHaveBeenCalled;
    });
    it('Testing the decrement element quantity', async ()=>{
        render( <CartItem item={item} index={0} />, { wrapper : TestComponent } );

        await userEvent.click(screen.getByText("-"));

        expect( decrementItem ).toHaveBeenCalled;
    });
});