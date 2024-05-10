import {Product, taxCalculation} from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 150
    },
    {
        description: 'iPad',
        price: 150
    }
]

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

export {};