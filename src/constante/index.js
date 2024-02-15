import iphone from '../assets/images/iphone-14-pro.webp';
import mac from "../assets/images/mac-system-cut.jfif";

export const navItems =[
    {id:1,title:'Home', link:'/'},
    {id:2,title:'Product', link:'/product'},
    {id:3,title:'My Orders', link:'/myorders'},
    {id:4,title:'SignUp', link:'/signup'},
    {id:5,title:'LogIn', link:'/login'},
    {id:6,title:'LogOut', link:'/logout'},
]

export const items = [
    {title: "Buy iphone 14 Pro", link: '/',
     text:"Experience the Power of latest iphone 14 with our most Pro camera aver",
     imgUrl:iphone
    } 
]

export const items2 = [
    {title: "Build the ultimate setup", link: '/',
     text:"You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini",
     imgUrl: mac
    }
]


export const product = {
    id: 1,
    title: "Product Title",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
    price: 9.99,
    images: [
        "https://via.placeholder.com/500x500?text=Product+Image+1",
        "https://via.placeholder.com/500x500?text=Product+Image+2",
        "https://via.placeholder.com/500x500?text=Product+Image+3",
        "https://via.placeholder.com/500x500?text=Product+Image+4",
    ],
    stock: 10,
};