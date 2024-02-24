import './_products.scss'


const Products = () => {

    const productData = [
        {
            name:"LED",
            price:5,
            img:"LED.jpeg"
        },{
            name:"Diode",
            price:8,
            img:"Diode.jpg"
        },{
            name:"Resistor",
            price:2,
            img:"Resistor.png"
        },{
            name:"Push Button",
            price:2,
            img:"PushButton.jpg"
        }

    ]

    return(
        <div className='product-container'>
            {
                productData.map((product, key) =>{
                    return (
                        <div className='mx-5 p-3 product-card'>
                            <div className='product-image-container'>
                                <img src={require('../../assets/'+product.img)}/>
                            </div>
                            <div className='product-info'>
                                <h5><a href='#'>{product.name}</a></h5>
                                <p className='product-price'>LKR {product.price}</p>
                                <div className='product-rating'>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                </div>
                            </div>
                        </div>

                    )
                })

            }
        </div>

    )

}

export default Products;