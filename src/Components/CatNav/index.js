import { useDispatch, useSelector } from 'react-redux'
import './_cat-nav.scss'
import categorySlice from '../../Redux/Category/categorySlice'
import { useEffect } from 'react';
import { getCategories } from '../../Redux/Category/actions';

const CatNav = () => {

    const categories = useSelector(state=>state.categoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    },[])

    console.log(categories);

    return(
        <>
            <div className='cat-nav-container container'>
                <ul>
                    { 
                        categories.map((cat) => {
                            if(cat.parentCategory === null)  {
                                return (
                                    <li className='list-item'> <a href='#'>{cat.category}</a></li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </>
    )
} 

export default CatNav;