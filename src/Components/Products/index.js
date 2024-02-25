import { useSelector } from 'react-redux'
import './_products.scss'
import productSlice from '../../store/productSlice'


const Products = () => {

    const productData = useSelector(productSlice.getInitialState);

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