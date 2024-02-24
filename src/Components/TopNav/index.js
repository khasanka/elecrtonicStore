import './_top-nav.scss'

const TopNav = () => {

    return (
        <div>
            <div className='header bg-dark'>
                <div className='row top-nav-row'>
                    {/* brand name */}
                    <div className='brand my-1'>
                        <h1>ElecShop</h1>
                    </div>
                    {/* Search bar */}
                    <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
                        <div className='dropdown m-0 p-0'>
                            <select className='select-btn w-100 p-0 m-0'>
                                <option>Components</option>
                                <option>Equipments</option>
                                <option>Boards</option>
                            </select>

                        </div>
                        <input className='form-control' placeholder='Search...' />
                        <button><i className='fa fa-search' /></button>
                    </div>
                    {/* login */}
                    <div className='login-container p-0'>
                        <i className='fa fa-user-circle user-icon' />
                        <h5> <a href='#'>Login </a> </h5> / <h5> <a href='#'> Register </a> </h5>
                    </div>
                    {/* cart and wishlist */}
                    <div className='cart-wishlist'>
                        <ul className='p-0'>
                            <li className='list-icon'><i className='fa fa-heart' /></li>
                            <li className='list-icon'><i className='fa fa-shopping-cart' /></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopNav;