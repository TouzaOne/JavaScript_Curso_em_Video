const product = [
    {
        id: 1,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
        category: 'mobile'
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 60,
        category: 'airpods'
    },
    {
        id: 1,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 230,
        category: 'cameras'
    },
    {
        id: 2, 
        image: 'image/gg-2.jpg',
        title: 'Foldable Mobile',
        price: 300,
    },
    {
        id: 2,
        image: 'image/hh-3.jpg',
        title: 'Air Pods Pro',
        price: 65,
        category: 'airpods'
    },
    {
        id: 2,
        image: 'image/ee-2.jpg',
        title: 'DSLR Camera',
        price: 200,
        category: 'cameras'
    },
    {
        id: 3,
        image: 'image/dd-2.jpg',
        title: 'Laptop',
        price: 100,
        category: 'Laptop'
    },
    {
        id: 3,
        image: 'image/gg-3.jpg',
        title: 'Mobile',
        price: 350,
    },
    {
        id: 3,
        image: 'image/ee-1.jpg',
        title: 'DSLR Camera',
        price: 130,
        category: 'cameras'
    },
];

const categories = [...new Set(product.map((item)=>{
    return item}))]

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=> {
        var {image, title, price} = item;
        return(
            `<div class='box'>
            <div class='img-box'>
            <img class= 'images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>
            <button>Add to cart</button>
            </div>
            </div>`)
    }).join('');
};

const filterFirstCategories = categories.filter(item);
function item(value){
    if(value.id==1){
        return (value.id)
    }
}
displayItem(filterFirstCategories)
const btns=[
    {
        id:1,
        name: '<<'
    },
    {
        id: 1,
        name: '1'
    },
    {
        
    }
]