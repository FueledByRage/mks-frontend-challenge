import { IProduct } from "@/entities/product";

export interface IFetchProducts{
    products:  IProduct[], count : number
}

export const fetchProducts = async ( perPage : string = '5' ) : Promise<IFetchProducts> =>   {
    return new Promise( async ( resolve, reject ) =>{
        try {
            const res = await fetch(`http://mks-challenge-api-frontend.herokuapp.com/api/v1/products/?page=1&rows=${perPage}&sortBy=id&orderBy=ASC`);
            const data  = await res.json(); 
            const products = data.products as IProduct[] ;
            return resolve({ products, count : data.count });    
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}