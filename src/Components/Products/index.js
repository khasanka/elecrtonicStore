import { useDispatch, useSelector } from 'react-redux'
import './_products.scss'
import { useEffect } from 'react';
import { getProducts } from '../../Redux/Product/action';
import { addCartItem } from '../../Redux/Cart/CartSlice';
import { Link } from 'react-router-dom';


const Products = () => {

    const productData = useSelector(state => state.pr.products );
    const cart = useSelector(state => state.cartReducer)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const addToCart = (itemData) => {
        // this will call defind 'addCartItem()' arrow function throuh dispatch hook
        dispatch(addCartItem(itemData));
        
    };

    console.log(cart);

    return(
        <div className='product-container'>
            {
                productData.map((product, key) =>{
                    return (
                        <div className='mx-5 p-3 product-card '>
                            <div className='product-image-container'>
                                <img src={require('../../assets/'+product.image)}/>
                            </div>
                            <div className='product-info '>
                                <h5>
                                    <Link to="/productDetils">{product.name}</Link>
                                </h5>
                                <p className='product-price'>LKR {product.price}</p>
                                <div className='product-rating'>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                </div>
                                <div >
                                    <div className='cart-button' onClick={() => addToCart(product)}>
                                        <div className='cart-icon-container'>
                                            <i className='fa fa-shopping-cart mx-4'/>
                                        </div>
                                        <div className='cart-text-container'>
                                            <p>Add to Cart</p>
                                        </div>
                                    </div>

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