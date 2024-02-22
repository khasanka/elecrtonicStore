import SideNav from '../SideNav';
import './_main-component.scss'

const MainComponent = () => {

    return (
        <div>
           <div className='container-fluid '>
                <div className='col-lg-2 col-md-3 col-sm-4'>
                    <SideNav/>
                </div>
           </div>
        </div>

    )

}

export default MainComponent;