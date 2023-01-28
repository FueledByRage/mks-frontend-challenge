import { ICart, ICartItem } from '@/entities/cart';
import { addToCart, removeFromCart, incrementItem, cartReducer, decrementItem } from '../../src/store/cart'
import { FakeProducts } from '../fakeData'


describe( 'Add to cart', ()=>{
    it('This must add an element to cart', ()=>{

        const currentState:  ICart = {
            state: [],
            priceAmount : 0
        };
        
        const state = cartReducer(
            currentState,
            addToCart({ 
                product: FakeProducts[0],
                quantity : 1
            })
        )

        expect(state.state[0].product.id == FakeProducts[0].id).toBeTruthy();
    });
});

describe('Increment an item quantity', ()=>{
    it('Must add one to a item quantity', ()=>{
        const cartItem : ICartItem = {
            product : FakeProducts[0],
            quantity : 1
        } 

        const currentState : ICart = {
            state:[ cartItem ],
            priceAmount : Number(cartItem.product.price) * cartItem.quantity
        }

        const newState = cartReducer(
            currentState,
            incrementItem({
                index : 0,
            })
        )

        expect(newState.state[0].quantity).toBe(2);

    })
})

describe('Decrement an item quantity', ()=>{
    it('Must decrement an element quantity in one', ()=>{
        const cartItem : ICartItem = {
            product : FakeProducts[0],
            quantity : 2
        } 

        const currentState : ICart = {
            state:[ cartItem ],
            priceAmount : Number(cartItem.product.price) * cartItem.quantity
        }

        const newState = cartReducer(
            currentState,
            decrementItem({
                index : 0,
            })
        )

        expect(newState.state[0].quantity).toBe(1);

    })
})

describe('Remove an item from the cart', ()=>{
    it('Test Remove item from cart', ()=>{
        const cartItem : ICartItem = {
            product : FakeProducts[0],
            quantity : 1
        } 

        const cartItem2 : ICartItem = {
            product : FakeProducts[1],
            quantity : 1
        } 

        const currentState : ICart = {
            state:[ cartItem, cartItem2 ],
            priceAmount : Number(cartItem.product.price) * cartItem.quantity
        }

        const newState = cartReducer(
            currentState,
            removeFromCart({
                index : 0,
                item : currentState.state[0]
            })
        )
        
        expect(newState.state).toEqual( [ cartItem2 ]);
    })
})