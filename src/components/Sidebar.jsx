import React from 'react';
import Logo from '../logo.jpg';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MailOutline from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InsightsIcon from '@mui/icons-material/Insights';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = ({setShow, show}) => {
  return (
    // <div className="container">
        <aside>
            <div className="top">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <h2>GA<span className='danger'>BBY</span> </h2>
                </div>
                <div onClick={() => {setShow(true)}} className="close" id="close-btn">
                    <CloseIcon/>
                </div>
            </div>

            <div className="sidebar">
                <a href="#">
                    <DashboardIcon/>
                    <h3>Dashboard</h3>
                </a>
                <a className='active' href="#">
                    <PersonOutlineIcon/>
                    <h3>Customers</h3>
                </a>
                <a href="#">
                    <ReceiptLongIcon/>
                    <h3>Orders</h3>
                </a>
                <a href="#">
                    <InsightsIcon/>
                    <h3>Analytics</h3>
                </a>
                <a href="#">
                    <MailOutline/>
                    <h3>Messages</h3>
                    <span className="message-count">26</span>
                </a>
                <a href="#">
                    <DomainVerificationIcon/>
                    <h3>Products</h3>
                </a>
                <a href="#">
                    <ReportGmailerrorredIcon/>
                    <h3>Reports</h3>
                </a>
                <a href="#">
                    <SettingsIcon/>
                    <h3>Settings</h3>
                </a>
                <a href="#">
                    <AddIcon/>
                    <h3>Add Products</h3>
                </a>
                <a href="#">
                    <LogoutIcon/>
                    <h3>Log Out</h3>
                </a>
            </div>
        </aside>
    // </div>
  )
}

export default Sidebar