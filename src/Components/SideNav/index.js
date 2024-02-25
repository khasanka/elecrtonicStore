import { useSelector } from 'react-redux';
import './_side-nav.scss'
import accordionCatSlice from '../../store/accordionCatSlice';

const SideNav = () => {

    const accordionData = useSelector(accordionCatSlice.getInitialState);

    return(

        <div className='side-nav'>
            <div className='section-title'>
                <h3>Catogory</h3>
            </div>

            <div className='accordion'>

                {
                   accordionData.map( (accodionCategory, key) => {
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
                                        {accodionCategory.items.map((item) =>{
                                            return (
                                                <li className='sub-items'> <a href='#'>{item}</a></li>

                                            )
                                        })}
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                    )
                   })
                }

            </div>

        </div>

  
    )
}

export default SideNav;