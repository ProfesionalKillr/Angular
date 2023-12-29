
export interface Product{
    description: string;
    price: number;

}

const phone: Product={
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product={
    description: 'iPad Air',
    price: 250.0
}

 interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

interface precioproducto{
    products: Product[]
}
// function taxCalculation( options:TaxCalculationOptions ): /*number*/[number, number]{
// function taxCalculation( /*options*/{tax, products}:TaxCalculationOptions ): /*number*/[number, number]{
export  function taxCalculation( options:TaxCalculationOptions ): /*number*/[number, number]{
    const {tax, products}= options;
    let total =0;

    /*options.*/products.forEach(/*product*/({price}) => {
        total+= /*product.*/price;
    });

    return[total, total*/*options*/tax];
}

function precio(precioo:precioproducto):number[]{
    let variable=0;
    precioo.products.forEach(precioexportado => {
        variable =precioexportado.price;
    });
    return[variable]
}



const shoppingCart=[phone,tablet];
const tax = 0.15;
const /* return */[total, taxResult] = taxCalculation({
    products: shoppingCart,
    tax
})
 
const resultado = precio({
products: shoppingCart
})

console.log('Total', total/* return[0]*/);
console.log('Tax', taxResult/* return[0]*/);
console.log('resultado',resultado[0])




