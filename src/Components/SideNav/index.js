import { useDispatch, useSelector } from 'react-redux';
import './_side-nav.scss'
import { useEffect, useState } from 'react';
import { getCategories } from '../../Redux/Category/actions';
import { filterByPrice, filterProducts } from '../../Redux/Product/productSlice';

const SideNav = () => {

    // === this is for dategory data (get data from categoryReducer)
    const accordionData = useSelector(state => state.categoryReducer.categories);

    // ---- Here we are fech original values from DB (Actually we get data form productReduser here)
    const fetchedProductData = useSelector(state => state.pr);
    const [products, setProducts] = useState();
    const [minPriceLimit,setMinPriceLimit] = useState(0);
    const [maxPriceLimit,setMaxPriceLimit] = useState(20000);


    const dispatch = useDispatch();
    // useEffect(()=>{
    //     // === here we are triggering DB Call
    //     dispatch(getCategories);
    // },[]);


    // ---- Here fetch data from productReduser, set those products into 'products' using useState()
    useEffect( () => {
        setProducts(fetchedProductData.products);
    },[fetchedProductData.status]); // inside [fetchedProductData.status] we are waiting to change 'fetchedProductData' productReduser status 'idel' to 'sucess'

    // --- this is button action send all newly loaded products and selectedCategory as payload to  filterProducts() raduser in product slice 
    const filterData = (selectedCategory) => {
        // console.log("selectedCaregory => ",selectedCategory);
        // console.log("products => ",products);
        const payload = {selectedCategory, products};
        dispatch(filterProducts(payload));
    }

    const applyPriceFilter = () => {
        const payload = {products, minPriceLimit, maxPriceLimit};
        dispatch(filterByPrice(payload));
    }

    const setPriceLimit = (e, stateFlag) => {
        if(stateFlag === 'max') {
            setMaxPriceLimit(e.target.value);
        } else  if(stateFlag === 'min') {
            setMinPriceLimit(e.target.value);
        }
    };

    return(

        <div className='side-nav'>
            <div className='section-title'>
                <h3>Catogory</h3>
            </div>

            <div className='accordion my-3'>

                {
                   accordionData.map( (accodionCategory, key) => {
                    if(accodionCategory.parentCategory === null) {

                        return (
                            <div className='accordion-item individual-category'>
                                <div className='accordion-header'>
                                    <button className='accordion-button' data-bs-target={"#collapse" + key} data-bs-toggle='collapse'>
                                        <div className='category-title'>
                                            <a href='#'>{accodionCategory.category}</a>
                                            
                                        </div>
                                    </button>
                                </div>
                                <div className='accordian-collapse collapse show' id={"collapse" + key}>
                                    <div className='accordion-body'>
                                        <ul>
                                            {
                                                accordionData.map((subCategory ) =>{
                                                    if(subCategory.parentCategory == accodionCategory.categoryId) {
                                                        return (
                                                            <li className='sub-items'> <a href='#' onClick={()=> filterData(subCategory)}>{subCategory.category}</a></li>
                                                        )
                                                    }
        
                                                })
                                            }
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
    
                        )
                    }
                   })
                }

            </div>

            <div className='price-filter-container'>
                    <div className='section-title'>
                        <h3>Filter By Price</h3>
                    </div>
                
                <div>
                    <label>Min : {minPriceLimit} </label>
                    <input
                        className='form-range'
                        type='range'
                        min={0}
                        max={20000}
                        step={100}
                        onChange={(e) => setPriceLimit(e,"min")}

                    />
                </div>
                <div>
                    <label>Max : {maxPriceLimit} </label>
                    <input
                        className='form-range'
                        type='range'
                        min={100}
                        max={20000}
                        step={100}
                        onChange={(e) => setPriceLimit(e,"max")}

                    />
                </div>
                <button className='btn btn-outline-dark my-3'
                    onClick={applyPriceFilter}
                >Apply Filter</button>
            </div>
        </div>

  
    )
}

export default SideNav;