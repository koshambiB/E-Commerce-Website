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
import product13 from '../assets/pants-grey-13.png'
import product14 from '../assets/white-set-14.png'
import product15 from '../assets/blue-pants-15.png'
import product16 from '../assets/black-top-16.png'
import product17 from '../assets/black-top-17.png'
import product18 from '../assets/white-pants-18.png'
import product19 from '../assets/red-top-19.png'
import product20 from '../assets/blue-pants-20.png'
import product21 from '../assets/white-skirt-21.png'
import product22 from '../assets/white-top-22.png'
import product23 from '../assets/leather-jacket-23.png'
import product24 from '../assets/black-top-24.png'
import product25 from '../assets/white-top-25.png'
import product26 from '../assets/dress-26.png'
import product27 from '../assets/black-dress-27.png'
import product28 from '../assets/black-dress-28.png'
import product29 from '../assets/black-pants-15.png'
import product30 from '../assets/product-29.png'
interface Clothing{
    id:number;
    name:string;
    image:string;
    price:number;
    color:string;
    category:string;
}
const clothing: Clothing[]=[
    {
        id:1,
        name:"Drawstring mesh cover-up tube top",
        image:"product1",
        price:40,
        color:"yellow",
        category:"top",
    },
    {
        id:2,
        name:"Strappy green midi sundress",
        image:"product3",
        price:150,
        color:"green",
        category:"dress",
    },
    {
        id:3,
        name:"Flared vintage washed denim jeans",
        image:"product5",
        price:118,
        color:"blue",
        category:"bottoms",
    },
    {
        id:4,
        name:"Velvet red off-shoulder mini dress",
        image:"product7",
        price:138,
        color:"red",
        category:"dress",
    },
    {
        id:5,
        name:"Blue multi-pocket denim jeans",
        image:"product9",
        price:98,
        color:"blue",
        category:"bottoms",
    },
    {
        id:6,
        name:"Bare top lace flower tulle one-piece",
        image:"product11",
        price:187,
        color:"pink",
        category:"dress",
    },
    {
        id:7,
        name:"Buckle gray stretch pants",
        image:"product13",
        price:47,
        color:"grey",
        category:"bottoms",
    },
    {
        id:8,
        name:"Washed flare jeans",
        image:"product15",
        price:37,
        color:"blue",
        category:"bottoms",
    },
    {
        id:9,
        name:"Turtleneck ribbed top",
        image:"product17",
        price:43,
        color:"black",
        category:"top",
    },
    {
        id:10,
        name:"Asymmetrical red top",
        image:"product19",
        price:76,
        color:"red",
        category:"top",
    },
    {
        id:11,
        name:"Lace bandage maxi skirt",
        image:"product21",
        price:111,
        color:"white",
        category:"skirt",
    },
    {
        id:12,
        name:"Black-leather ovrsized jacket",
        image:"product23",
        price:121,
        color:"black",
        category:"jacket",
    },
    {
        id:13,
        name:"White ribbed top",
        image:"product25",
        price:43,
        color:"white",
        category:"top",
    },
    {
        id:14,
        name:"Asymmetrical ruffled dress",
        image:"product27",
        price:143,
        color:"black",
        category:"dress",
    },
    {
        id:15,
        name:"Black mermaid dress",
        image:"product28",
        price:113,
        color:"black",
        category:"dress",
    },
    {
        id:16,
        name:"Waist shaping corset midi sundress",
        image:"product2",
        price:350,
        color:"white",
        category:"dress",
    },
    
    {
        id:17,
        name:"Washed denim vintage co-ords set",
        image:"product4",
        price:290,
        color:"blue",
        category:"set",
    },
    
    {
        id:18,
        name:"Nymphea drawstring corset with bell sleeves",
        image:"product6",
        price:198,
        color:"orange",
        category:"top",
    },
    
    {
        id:19,
        name:"Blue denim pleated mini skirt",
        image:"product8",
        price:68,
        color:"blue",
        category:"skirt",
    },
    {
        id:20,
        name:"Tassel ruffled split pleated patchwork skirt",
        image:"product10",
        price:50,
        color:"white",
        category:"skirt",
    },
    
    {
        id:21,
        name:"long sleeve satin mini dress",
        image:"product12",
        price:175,
        color:"white",
        category:"dress",
    },
    {
        id:22,
        name:"White lacework top and skirt set",
        image:"product14",
        price:155,
        color:"white",
        category:"set",
    },
    {
        id:23,
        name:"black ribbon top",
        image:"product16",
        price:35,
        color:"black",
        category:"top",
    },
    {
        id:24,
        name:"White tattered wide denim jeans",
        image:"product18",
        price:54,
        color:"white",
        category:"bottoms",
    },
    {
        id:25,
        name:"Washed blue multipocket flared denim jeans",
        image:"product20",
        price:75,
        color:"blue",
        category:"bottoms",
    },
    {
        id:26,
        name:"Stitched white top",
        image:"product22",
        price:25,
        color:"white",
        category:"top",
    },
    {
        id:27,
        name:"Black mesh top",
        image:"product24",
        price:175,
        color:"black",
        category:"top",
    },
    {
        id:28,
        name:"Satin slit dress",
        image:"product26",
        price:85,
        color:"white",
        category:"dress",
    },
    {
        id:29,
        name:"Black bootcut denim jeans",
        image:"product29",
        price:45,
        color:"black",
        category:"denim",
    },
    {
        id:30,
        name:"Printed mesh mini dress",
        image:"product30",
        price:75,
        color:"black",
        category:"dress",
    },
    
];
export default clothing;
