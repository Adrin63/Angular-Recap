export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia',
    price: 150
}

const tablet: Product = {
    description: 'iPad',
    price: 250
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const {tax, products} = options;

    let total = 0;

    products.forEach( ({price}) => {
        total += price;
    })

    return [total, total * tax]
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxed] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})

console.log('Total', total);
console.log('Tax', taxed);
export {};
