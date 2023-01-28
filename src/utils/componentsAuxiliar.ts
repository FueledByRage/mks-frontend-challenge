export const getPrice = ( price : string ) =>{
    if( !/\d/.test(price)) return ''; 
    const splitedPrice = price.split('.');
    splitedPrice.length == 1 && price; 
    if(splitedPrice[1] == '00') return splitedPrice[0]

    return price.replace('.', ',');
}