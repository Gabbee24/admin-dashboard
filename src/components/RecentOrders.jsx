import React from 'react'

const RecentOrders = () => {
  return (
    <div className='recent-orders'>
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foldable Mini Drone</td>
            <td>85631</td>
            <td>Due</td>
            <td className='warning'>Pending</td>
            <td className='primary'>Details</td>
          </tr>
          <tr>
            <td>Foldable Mini Drone</td>
            <td>85631</td>
            <td>Due</td>
            <td className='warning'>Pending</td>
            <td className='primary'>Details</td>
          </tr>
          <tr>
            <td>Foldable Mini Drone</td>
            <td>85631</td>
            <td>Due</td>
            <td className='warning'>Pending</td>
            <td className='primary'>Details</td>
          </tr>
          <tr>
            <td>Foldable Mini Drone</td>
            <td>85631</td>
            <td>Due</td>
            <td className='warning'>Pending</td>
            <td className='primary'>Details</td>
          </tr>
          <tr>
            <td>Foldable Mini Drone</td>
            <td>85631</td>
            <td>Due</td>
            <td className='warning'>Pending</td>
            <td className='primary'>Details</td>
          </tr>
        </tbody>
      </table>
      <a href="#">Show All</a>
    </div>
  )
}

export default RecentOrders