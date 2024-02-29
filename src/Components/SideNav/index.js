import { useDispatch, useSelector } from 'react-redux';
import './_side-nav.scss'
import accordionCatSlice from '../../Redux/Accordion/accordionSlice';
import { useEffect } from 'react';
import { getCategories } from '../../Redux/Category/actions';

const SideNav = () => {

    const accordionData = useSelector(state => state.categoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCategories);
    },[]);

    return(

        <div className='side-nav'>
            <div className='section-title'>
                <h3>Catogory</h3>
            </div>

            <div className='accordion'>

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
                                                            <li className='sub-items'> <a href='#'>{subCategory.category}</a></li>
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

        </div>

  
    )
}

export default SideNav;