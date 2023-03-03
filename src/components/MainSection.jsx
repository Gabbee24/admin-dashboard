import AnalyticsIcon from '@mui/icons-material/Analytics';
import BarChartIcon from '@mui/icons-material/BarChart';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import RecentOrders from './RecentOrders';

const MainSection = () => {
  return (
    <main style={{color: 'black'}}>
        <h1>Dashboard</h1>

        <div className="date">
            <input type="date" />
        </div>

        <div className="insights">
            <div className="sales">
                <AnalyticsIcon className='span'/>
                <div className="middle">
                    <div className="left">
                        <h3>Total Sales</h3>
                        <h1>$25,024</h1>
                    </div>
                    <div className="progress">
                        <svg className='svg'>
                            <circle cx='38' cy='38' r='36'></circle>
                        </svg>
                        <div className="number">
                            <p>81%</p>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>Last 24 Hours</small>           
            </div>
            {/* ----------------------- */}
            <div className="expenses">
                <BarChartIcon className='span'/>
                <div className="middle">
                    <div className="left">
                        <h3>Total Expenses</h3>
                        <h1>$14,160</h1>
                    </div>
                    <div className="progress">
                        <svg className='svg'>
                            <circle cx='38' cy='38' r='36'></circle>
                        </svg>
                        <div className="number">
                            <p>62%</p>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>Last 24 Hours</small>           
            </div>
            {/* ---------------------- */}
            <div className="income">
                <StackedLineChartIcon className='span'/>
                <div className="middle">
                    <div className="left">
                        <h3>Total Income</h3>
                        <h1>$10,864</h1>
                    </div>
                    <div className="progress">
                        <svg className='svg'>
                            <circle cx='38' cy='38' r='36'></circle>
                        </svg>
                        <div className="number">
                            <p>44%</p>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>Last 24 Hours</small>           
            </div>
        </div>
        <RecentOrders/>
    </main>
  )
}

export default MainSection