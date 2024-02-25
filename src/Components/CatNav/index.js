import { useSelector } from 'react-redux'
import './_cat-nav.scss'
import categorySlice from '../../store/categorySlice'

const CatNav = () => {

    const categories = useSelector(categorySlice.getInitialState)

    return(
        <>
            <div className='cat-nav-container container'>
                <ul>
                    { 
                        categories.map((cat) => {
                            return (

                                <li className='list-item'> <a href='#'>{cat}</a></li>

                            )
                        })
                       
                    }
                </ul>
            </div>
        </>
    )
} 

export default CatNav;