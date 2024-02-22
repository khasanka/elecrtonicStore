import './_side-nav.scss'

const SideNav = () => {

    return(

        <div className='side-nav'>
            <div className='section-title'>
                <h3>Catogory</h3>
            </div>

            <div className='accordion'>
                <div className='accordion-item individual-category'>
                    <div className='accordion-header'>
                        <button className='accordion-button' data-bs-target='#accordion-heading-one' data-bs-toggle='collapse'>
                            <div className='category-title'>
                                <a href='#'>Components</a>
                                
                            </div>
                        </button>
                    </div>
                    <div className='accordian-collapse collapse show' id='accordion-heading-one'>
                        <div className='accordion-body'>
                            <ul>
                                <li className='sub-items'> <a href='#'>LED</a></li>
                                <li className='sub-items'> <a href='#'>Diode</a></li>
                                <li className='sub-items'> <a href='#'>Resistor</a></li>
                                <li className='sub-items'> <a href='#'>Push Button</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>

  
    )
}

export default SideNav;