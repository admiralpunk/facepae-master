import Sidebar from "../sidebar";
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from "axios";
// Socket.IO connection
const socket = io('http://localhost:3000');

// Sidebar Component
const OrderList = ({ onSelectOrder }) => {
    const [orders, setOrders] = useState({
        newOrders: [],
        inProgressOrders: [],
        completedOrders: [],
    });

    useEffect(() => {
        socket.on('orderUpdate', (data) => {
            setOrders({
                newOrders: data.newOrders,
                inProgressOrders: data.preparingOrders,
                completedOrders: data.finishedOrders,
            });
        });

        return () => {
            socket.off('orderUpdate');
        };
    }, []);

    const handleOrderClick = (order) => {
        onSelectOrder(order); // Pass the selected order's details to the parent component
    };

    return (
        <div className="orders">
            <h2 className="order-list-title">Order List</h2>
            <div className="order-section">
                <h3>New Orders</h3>
                <div className="new-order-list-container">
                    {orders.newOrders.map((order) => (
                        <div key={order.order_id} className='user' onClick={() => handleOrderClick(order)}>
                            <span>{order.table_no}</span>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className="order-section">
                <h3>In Progress Orders</h3>
                <div className="progress-order-list-container">
                    {orders.inProgressOrders.map((order) => (
                        <div key={order.order_id} className='user' onClick={() => handleOrderClick(order)}>
                            <span>{order.table_no}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="order-section">
                <h3>Completed Orders</h3>
                <div className="completed-order-list-container">
                    {orders.completedOrders.map((order) => (
                        <div key={order.order_id} className='user' onClick={() => handleOrderClick(order)}>
                            <span>{order.table_no}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// OrderDetails Component
const OrderDetails = ({ order, onStatusChange }) => {
    const [orderDetails, setOrderDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            if (!order) return;
            const token = localStorage.getItem('token');
            setLoading(true);
            setError(null);

            try {console.log(order);
                const response = await axios.get(`http://localhost:3000/api/order/${order.order_id}`,{
                    
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                });
                setOrderDetails(response.data); // Assuming the response is an array of dish details
            } catch (err) {
                setError('Failed to fetch order details');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [order]);

    // const updateOrderStatus = (orderId, status) => {
    //     socket.emit('updateOrderStatus', { orderId, status });
    //     onStatusChange(orderId, status);
    // };

    function updateOrderStatus(order_no, status, order_id, orderDetails) {
        console.log('order status changed'),
        console.log(order_no, status,order_id,orderDetails)
        socket.emit("updateOrderStatus", {
            
            
          order_no,
          status,
          order_id,
          orderDetails
        });
      }

    if (loading) return <div>Loading order details...</div>;
    if (error) return <div>{error}</div>;

    if (!order) return <div>Select an order to view details</div>;

    return (
        <div className="orderdetails">
            <h2>Order Details</h2>
            <p><strong>Order ID:</strong> {order.order_id}</p>
            <p><strong>Details:</strong>
                {orderDetails.length > 0 ? (
                    orderDetails.map((detail, index) => (
                        <div key={index}>
                            <p><strong>Dish:</strong> {detail.dish_name}</p>
                            <p><strong>Quantity:</strong> {detail.quantity}</p>
                            <p><strong>Customization:</strong> {detail.customization || 'No customization'}</p>
                        </div>
                    ))
                ) : (
                    <p>No details available for this order.</p>
                )}
            </p>

            {/* <button onClick={() => updateOrderStatus(order.order_items[0].order_no, 0,order.order_id,order.order_items)}>Move to New</button> */}
            <button onClick={() => updateOrderStatus(order.order_items[0].order_no, 1,order.order_id,orderDetails[0])}>Accept and print</button>
            <button onClick={() => updateOrderStatus(order.order_items[0].order_no,2,order.order_id,orderDetails[0])}>order Completed</button>
        </div>
    );
};
// const OrderDetails = ({ order, onStatusChange }) => {
//     const [orderDetails, setOrderDetails] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchOrderDetails = async () => {
//             if (!order || order.order_items.length === 0) return;
//             const token = localStorage.getItem('token');
//             setLoading(true);
//             setError(null);

//             try {
//                 console.log("order: "+order)
//                 console.log("order_nos. :"+order.order_items)
//                 // Collecting all the order_no values from the order_items array
//                 const orderNos = order.order_items.map(item => item.order_id);

//                 // Fetching details for each order_no using Promise.all to fetch all asynchronously
//                 const responsePromises = orderNos.map(order_no => 
//                     axios.get(`http://localhost:3000/api/order/${order_no}`, {
//                         headers: {
//                             "Authorization": `Bearer ${token}`
//                         }
//                     })
//                 );

//                 // Waiting for all the requests to finish
//                 const responses = await Promise.all(responsePromises);
//                 console.log(responses)
//                 // Extracting the data from all the responses and setting it to orderDetails
//                 const allOrderDetails = responses.map(res => res.data);
                
//                 setOrderDetails(allOrderDetails); // Assuming the response is an array of dish details
//                 console.log(allOrderDetails);
//             } catch (err) {
//                 setError('Failed to fetch order details');
//                 console.error(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchOrderDetails();
//     }, [order]);

//     const updateOrderStatus = (orderId, status) => {
//         socket.emit('updateOrderStatus', { orderId, status });
//         onStatusChange(orderId, status);
//     };

//     if (loading) return <div>Loading order details...</div>;
//     if (error) return <div>{error}</div>;

//     if (!order) return <div>Select an order to view details</div>;

//     return (
//         <div className="orderdetails">
//             <h2>Order Details</h2>
//             <p><strong>Order ID:</strong> {order.order_id}</p>
//             <p><strong>Details:</strong>
//                 {orderDetails.length > 0 ? (
                    
//                     orderDetails.map((details, index) => (
//                         console.log(details),
//                         <div key={index}>
//                             <h4>Order No: {details.order_no}</h4>
//                             <p><strong>Dish:</strong> {details.dish_name}</p>
//                             <p><strong>Quantity:</strong> {details.quantity}</p>
//                             <p><strong>Customization:</strong> {details.customization || 'No customization'}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No details available for this order.</p>
//                 )}
//             </p>

//             <button onClick={() => updateOrderStatus(order.order_id, 0)}>Move to New</button>
//             <button onClick={() => updateOrderStatus(order.order_id, 1)}>Move to Preparing</button>
//             <button onClick={() => updateOrderStatus(order.order_id, 2)}>Move to Finished</button>
//         </div>
//     );
// };

// AdminPanel Component (Main Container)
const Orders = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orders, setOrders] = useState({
        newOrders: [],
        inProgressOrders: [],
        completedOrders: [],
    });

    const handleOrderSelect = (order) => {
        setSelectedOrder(order);
    };

    const handleOrderStatusChange = (orderId, newStatus) => {
        const updatedOrders = { ...orders };

        // Move the order to the appropriate section based on the new status
        if (newStatus === 0) {
            // Move to New
            const orderToMove = updatedOrders.inProgressOrders.find((order) => order.order_id === orderId) ||
                updatedOrders.completedOrders.find((order) => order.order_id === orderId);

            if (orderToMove) {
                updatedOrders.newOrders.push(orderToMove);
                updatedOrders.inProgressOrders = updatedOrders.inProgressOrders.filter((order) => order.order_id !== orderId);
                updatedOrders.completedOrders = updatedOrders.completedOrders.filter((order) => order.order_id !== orderId);
            }
        } else if (newStatus === 1) {
            // Move to Preparing
            const orderToMove = updatedOrders.newOrders.find((order) => order.order_id === orderId);

            if (orderToMove) {
                updatedOrders.inProgressOrders.push(orderToMove);
                updatedOrders.newOrders = updatedOrders.newOrders.filter((order) => order.order_id !== orderId);
            }
        } else if (newStatus === 2) {
            // Move to Finished
            const orderToMove = updatedOrders.inProgressOrders.find((order) => order.order_id === orderId);

            if (orderToMove) {
                updatedOrders.completedOrders.push(orderToMove);
                updatedOrders.inProgressOrders = updatedOrders.inProgressOrders.filter((order) => order.order_id !== orderId);
            }
        }

        setOrders(updatedOrders); // Update the orders state
    };

    return (
        <>
            <Sidebar />
            <OrderList onSelectOrder={handleOrderSelect} />
            <OrderDetails
                order={selectedOrder}
                onStatusChange={handleOrderStatusChange}
            />
        </>
    );
};

export default Orders;













// import { Link } from "react-router-dom";
// function Orders() {
//     return (
//         <>
//             <Sidebar />
//             <div className="orders">
//                 <h2 className="order-list-title">Order List</h2>
//                 <div className="new-orders">
//                     <h5 className="new-title">New</h5>
//                     <div className="new-order-list-container">
//                         <Link to='/orderdetails'>
//                             <div className="user user1">
//                                 <img src="/pfp1.svg" alt="" />
//                                 <span className="table-no">05</span>
//                             </div>
//                         </Link>
//                         <div className="user user2">
//                             <img src="/pfp2.svg" alt="" />
//                             <span className="table-no">12</span>
//                         </div>
//                         <div className="user user3">
//                             <img src="/pfp3.svg" alt="" />
//                             <span className="table-no">14</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="in-progress-orders">
//                     <h5 className="in-progress-title">In Progress</h5>
//                     <div className="in-progress-order-list-container">
//                         <div className="user user1">
//                             <img src="/pfp4.svg" alt="" />
//                             <span className="table-no" style={{ color: '#BCD0DA' }}>09</span>
//                         </div>
//                         <div className="user user2">
//                             <img src="/pfp3.svg" alt="" />
//                             <span className="table-no" style={{ color: '#BCD0DA' }}>11</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="completed-orders">
//                     <h5 className="completed-title">Completed</h5>
//                     <div className="completed-order-list-container">
//                         <div className="user user1">
//                             <img src="/pfp1.svg" alt="" />
//                             <span className="table-no">06</span>
//                         </div>
//                         <div className="user user2">
//                             <img src="/pfp2.svg" alt="" />
//                             <span className="table-no">14</span>
//                         </div>
//                         <div className="user user3">
//                             <img src="/pfp3.svg" alt="" />
//                             <span className="table-no">13</span>
//                         </div>
//                         <div className="user user1">
//                             <img src="/pfp1.svg" alt="" />
//                             <span className="table-no">02</span>
//                         </div>
//                         <div className="user user2">
//                             <img src="/pfp2.svg" alt="" />
//                             <span className="table-no">04</span>
//                         </div>
//                         <div className="user user3">
//                             <img src="/pfp3.svg" alt="" />
//                             <span className="table-no">15</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Orders;