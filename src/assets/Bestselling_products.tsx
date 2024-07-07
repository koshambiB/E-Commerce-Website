import product1 from '../assets/product-1.png'
import product2 from '../assets/product-2.png'
import product3 from '../assets/product-3.png'
import product4 from '../assets/product-4.png'
import product5 from '../assets/product-5.png'
import product6 from '../assets/product-6.png'
import product7 from '../assets/product-7.png'
import product8 from '../assets/product-8.png'
import product9 from '../assets/product-9.png'
import product10 from '../assets/product-10.png'
import product11 from '../assets/product-11.png'
import product12 from '../assets/product-12.png'
interface Bestselling{
    id:number;
    name:string;
    image:string;
    price:number;
}
const bestselling_product: Bestselling[]=[
    {
        id:1,
        name:"Drawstring mesh cover-up tube top",
        image:"product1",
        price:40,
    },
    {
        id:2,
        name:"Waist shaping corset midi sundress",
        image:"product2",
        price:350,
    },
    {
        id:3,
        name:"Strappy green midi sundress",
        image:"product3",
        price:150,
    },
    {
        id:4,
        name:"Washed denim vintage co-ords set",
        image:"product4",
        price:290,
    },
    {
        id:5,
        name:"Flared vintage washed denim jeans",
        image:"product5",
        price:118,
    },
    {
        id:6,
        name:"Nymphea drawstring corset with bell sleeves",
        image:"product6",
        price:198,
    },
    {
        id:7,
        name:"Velvet red off-shoulder mini dress",
        image:"product7",
        price:138,
    },
    {
        id:8,
        name:"Blue denim pleated mini skirt",
        image:"product8",
        price:68,
    },
    {
        id:9,
        name:"Blue multi-pocket denim jeans",
        image:"product9",
        price:98,
    },
    {
        id:10,
        name:"Tassel ruffled split pleated patchwork skirt",
        image:"product10",
        price:50,
    },
    {
        id:11,
        name:"Bare top lace flower tulle one-piece",
        image:"product11",
        price:187,
    },
    {
        id:12,
        name:"long sleeve satin mini dress",
        image:"product12",
        price:175,
    },
];
export default bestselling_product;
