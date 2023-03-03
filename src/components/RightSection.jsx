import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Logo from '../bobo.jpg'

const RightSection = ({setShow, show}) => {
  return (
    <div className='right'>
        <div className="top">
            {show && <button onClick={() => {setShow(false)}} id="menu-btn"><MenuIcon className='span'/></button>}
            <div className="theme-toggler">
                <DarkModeIcon className='span active'/>
                <LightModeIcon className='span'/>
            </div>
            <div className="profile">
                <div className="info">
                    <p>Hey, <b>Gabriel</b></p>
                    <small className="text-muted">Admin</small>
                </div>
                <div className="profile-photo">
                    <img src={Logo} alt="profile" />
                </div>
            </div>
        </div>
        <div className="recent-updates">
            <h2>Recent Updates</h2>
            <div className="updates">
                <div className="update">
                    <div className="profile-photo">
                        <img src={Logo} alt="profile" />
                    </div>
                    <div className="message">
                        <p><b>Sanusi Victor </b>received his order of Night lio tech GPS drone</p>
                        <small className="text-muted">2 minutes Ago</small>
                    </div>
                </div>
                <div className="update">
                    <div className="profile-photo">
                        <img src={Logo} alt="profile" />
                    </div>
                    <div className="message">
                        <p><b>Atunwa Gabriel </b>received his order of Night lio tech GPS drone</p>
                        <small className="text-muted">2 minutes Ago</small>
                    </div>
                </div>
                <div className="update">
                    <div className="profile-photo">
                        <img src={Logo} alt="profile" />
                    </div>
                    <div className="message">
                        <p><b>Ogundimu Adesola </b>received her order of Night lio tech GPS drone</p>
                        <small className="text-muted">2 minutes Ago</small>
                    </div>
                </div>
            </div>
        </div>
        <div className="sales-analytics">
            <h2>Sales Analytics</h2>
            <div className="item online">
                <div className="icon"><ShoppingCartIcon/></div>
                <div className="right">
                    <div className="info">
                        <h3>ONLINE ORDERS</h3>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>
                    <h5 className="success">+39%</h5>
                    <h3>3849</h3>
                </div>
            </div>
            <div className="item offline">
                <div className="icon"><LocalMallIcon/></div>
                <div className="right">
                    <div className="info">
                        <h3>OFFLINE ORDERS</h3>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>
                    <h5 className="danger">-17%</h5>
                    <h3>1100</h3>
                </div>
            </div>
            <div className="item customers">
                <div className="icon"><PersonIcon/></div>
                <div className="right">
                    <div className="info">
                        <h3>NEW CUSTOMERS</h3>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>
                    <h5 className="success">+25%</h5>
                    <h3>849</h3>
                </div>
            </div>
            <div className="item add-product">
                <div>
                    <AddIcon/>
                    <h3>Add Product</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightSection