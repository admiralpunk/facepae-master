// Make the changes here to add running price calucaltion in Add Button
// import React, { useState, useEffect } from "react";
// import Sidebar from "./sidebar";

// function Menu() {
//   const [items, setItems] = useState([
//     { id: 1, name: "Paneer Masala", price: 250, quantity: 0, image: "/menu-food-imgs/image.svg" },
//     { id: 2, name: "Dhal Makhani", price: 200, quantity: 0, image: "/menu-food-imgs/image-1.svg" },
//     { id: 3, name: "Malai Kofta", price: 300, quantity: 0, image: "/menu-food-imgs/image-2.svg" },
//     { id: 4, name: "Mushroom Masala", price: 250, quantity: 0, image: "/menu-food-imgs/image-3.svg" },
//     { id: 5, name: "Paneer Masala", price: 250, quantity: 0, image: "/menu-food-imgs/image.svg" },
//     { id: 6, name: "Dhal Makhani", price: 200, quantity: 0, image: "/menu-food-imgs/image-1.svg" },
//     { id: 7, name: "Malai Kofta", price: 300, quantity: 0, image: "/menu-food-imgs/image-2.svg" },
//     { id: 8, name: "Mushroom Masala", price: 250, quantity: 0, image: "/menu-food-imgs/image-3.svg" },
//   ]);

//   const selectedItems = items.filter(item => item.quantity > 0);
//   const totalPrice = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   // Modal state variables
//   const [isHalfFullOpen, setIsHalfFullOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
//   const [isBillModalOpen, setIsBillModalOpen] = useState(false);
//   const [isPaymentModalOpen, setisPaymentModalOpen] = useState(false);
//   const [isQRModalOpen, setisQRModalOpen] = useState(false);

//   const [progress, setProgress] = useState(100); // Timer progress for QR payment
//   const [fullCount, setFullCount] = useState(0); // Full size count
//   const [halfCount, setHalfCount] = useState(0); // Half size count

//   // Timer progress effect for payment modal
//   useEffect(() => {
//     if (progress > 0) {
//       const timer = setInterval(() => {
//         setProgress(prevProgress => prevProgress - 0.125);
//       }, 1000);

//       return () => clearInterval(timer);
//     }
//   }, [progress]);

//   // Increment/Decrement functions for item sizes
//   const incrementFull = () => setFullCount(fullCount + 1);
//   const decrementFull = () => {
//     if (fullCount > 0) setFullCount(fullCount - 1);
//   };

//   const incrementHalf = () => setHalfCount(halfCount + 1);
//   const decrementHalf = () => {
//     if (halfCount > 0) setHalfCount(halfCount - 1);
//   };



//   const handleIncrease = (id) => {
//     setItems(items.map(item =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     ));
//   };

//   const handleDecrease = (id) => {
//     setItems(items.map(item =>
//       item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
//     ));
//   };

//   return (
//     <>
//       {/* Sidebar Component */}
//       <Sidebar />

//       {/* Main Menu Content */}
//       <div className={`customer-menu-container ${isModalOpen ? 'blurred' : ''}`}>
//         <div className="customer-menu-searchbar">
//           <h1 className="customer-menu-title">Menu</h1>
//           <input type="text" placeholder="Search a food" className="customer-menu-search-input" />
//           <div className="customer-menu-order-details">
//             <span className="customer-menu-order-id"># 219</span>
//             <div className="customer-menu-table-no">T2</div>
//           </div>
//         </div>

//         {/* Menu Items */}
//         <div className="customer-menu-items">
//           {items.map((item) => (
//             <div className="customer-menu-item" key={item.id}>
//               <img src={item.image} alt={item.name} className="customer-menu-item-image" />
//               <h3 className="customer-menu-item-name">{item.name}</h3>
//               <p className="customer-menu-item-description">
//                 A delicious meal with balanced flavors and rich taste.
//               </p>
//               <div className="customer-menu-item-footer">
//                 <span className="customer-menu-item-price">₹ {item.price}</span>
//                 <div className="customer-menu-item-controls">
//                   <button className="customer-menu-minus-btn" onClick={() => setIsHalfFullOpen(true)}>Add</button>  {/*  need to work on this part  */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Continue Button */}
//         <button className="customer-menu-continue-btn" onClick={() => setIsModalOpen(true)}>
//           <span role="img" aria-label="cart">🛒</span> Continue
//         </button>
//       </div>

//       {/* Half/Full Selection Modal */}
//       {isHalfFullOpen && (
//         <div className="add-modal">
//           <div className="add-modal-content">
//             <div className="modal-header">
//               <img src="/menu-food-imgs/image.svg" alt="Paneer Masala" className="modal-image" />
//               <span className="modal-title">Paneer Masala</span>
//             </div>
//             <div className="modal-content">
//               {/* {category === 'Curry' && ( */}
//                 <div className="size-section">
//                   <h3>Size</h3>
//                   <div className="size-row">
//                     <span>Full</span>
//                     <div className="counter">
//                       <button onClick={decrementFull}>-</button>
//                       <span>{fullCount}</span>
//                       <button onClick={incrementFull}>+</button>
//                     </div>
//                   </div>
//                   <div className="size-row">
//                     <span>Half</span>
//                     <div className="counter">
//                       <button onClick={decrementHalf}>-</button>
//                       <span>{halfCount}</span>
//                       <button onClick={incrementHalf}>+</button>
//                     </div>
//                   </div>
//                 </div>
//               {/* )} */}
//               {/* {category === 'Beverage' && (
//                 <div className="size-section">
//                   <h3>Options</h3>
//                   <div className="size-row">
//                     <span>With Ice</span>
//                     <div className="counter">
//                       <button onClick={decrementWithIce}>-</button>
//                       <span>{withIceCount}</span>
//                       <button onClick={incrementWithIce}>+</button>
//                     </div>
//                   </div>
//                   <div className="size-row">
//                     <span>Without Ice</span>
//                     <div className="counter">
//                       <button onClick={decrementWithoutIce}>-</button>
//                       <span>{withoutIceCount}</span>
//                       <button onClick={incrementWithoutIce}>+</button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {category === 'Soup' && (
//                 <div className="size-section">
//                   <h3>Size</h3>
//                   <div className="size-row">
//                     <span>Full</span>
//                     <div className="counter">
//                       <button onClick={decrementFull}>-</button>
//                       <span>{fullCount}</span>
//                       <button onClick={incrementFull}>+</button>
//                     </div>
//                   </div>
//                   <div className="size-row">
//                     <span>Half</span>
//                     <div className="counter">
//                       <button onClick={decrementHalf}>-</button>
//                       <span>{halfCount}</span>
//                       <button onClick={incrementHalf}>+</button>
//                     </div>
//                   </div>
//                 </div>
//               )} */}
//               <button className="done-button" onClick={() => setIsHalfFullOpen(false)}>Done</button>
//             </div>
//           </div>
//         </div>
//       )}


//       {/* Order Summary Modal */}
//       {isModalOpen && (
//         <div className="order-summary-modal">
//           <div className="order-summary-content">
//             <div className="order-summary-header">
//               <div className="backbtn" onClick={() => {
//                 setIsModalOpen(false);
//                 setIsConfirmModalOpen(false);
//                 setIsBillModalOpen(false);
//                 setisQRModalOpen(false);
//               }}>&lt;</div>
//               <div className="order-summary-details">
//                 <span className="order-summary-id"># 219</span>
//                 <div className="order-summary-table-no">T2</div>
//               </div>
//             </div>

//             <h2 style={{ textAlign: 'left' }}>Order Summary</h2>

//             <div className="order-summary-amount">
//               {selectedItems.length === 0 ? (
//                 <>
//                   <img src="/menu-food-imgs/Group 69.svg" alt="" style={{ height: '7rem' }} />
//                   <p>No items in your cart.</p>
//                 </>
//               ) : (
//                 <>
//                   <ul>
//                     {selectedItems.map((item) => (
//                       <li key={item.id}>
//                         {item.name}
//                         <div className="order-summary-item-controls">
//                           <button
//                             className="order-summary-minus-btn"
//                             onClick={() => handleDecrease(item.id)}
//                             disabled={item.quantity === 0}
//                           >
//                             -
//                           </button>
//                           <span className="order-summary-quantity">{item.quantity}</span>
//                           <button
//                             className="order-summary-plus-btn"
//                             onClick={() => handleIncrease(item.id)}
//                           >
//                             +
//                           </button>
//                         </div>
//                         ₹{item.price * item.quantity}
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </div>

//             <div className="order-summary-bottom">
//               <div className="order-summary-total-price">
//                 <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total:</p>
//                 <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹{totalPrice}</span>
//               </div>
//               <button onClick={() => {
//                 setIsConfirmModalOpen(true);
//                 setIsModalOpen(false);
//               }} className="order-summary-content-btn">
//                 Confirm Order
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Confirm Order Modal */}
//       {isConfirmModalOpen && (
//         <div className="order-addon-modal">
//           <div className="order-addon-content">
//             <div className="order-addon-header">
//               <div className="backbtn" onClick={() => {
//                 setIsModalOpen(false);
//                 setIsConfirmModalOpen(false);
//                 setIsBillModalOpen(false);
//                 setisQRModalOpen(false);
//               }}>
//                 &lt;
//               </div>

//               <div className="order-addon-details">
//                 {/* <div className="order-addon-details-left">
//                 <img src="/menu-food-imgs/Timer.svg" alt="" />
//                 <div className="order-coming-time">
//                   12:00 <br /> minutes
//                 </div>
//               </div> */}
//                 <div className="order-addon-details-right">
//                   <span className="order-addon-id"># 219</span>
//                   <div className="order-addon-table-no">T2</div>
//                 </div>
//               </div>
//             </div>

//             <h2 style={{ textAlign: 'left', fontSize: '2rem' }}>Order Summary</h2>
//             <p style={{ textAlign: 'left', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Click + to repeat order</p>
//             <div className="order-addon-amount">
//               {selectedItems.length === 0 ? (
//                 <>
//                   <img src="/menu-food-imgs/Group 69.svg" alt="" style={{ height: '7rem' }} />
//                   <p>No items in your cart.</p>
//                 </>
//               ) : (
//                 <>
//                   <ul>
//                     {selectedItems.map((item) => (
//                       <li key={item.id}>
//                         {item.name}
//                         <div className="order-summary-item-controls">
//                           <button
//                             className="order-summary-minus-btn"
//                             onClick={() => handleDecrease(item.id)}
//                             disabled={item.quantity === 0}
//                           >
//                             -
//                           </button>
//                           <span className="order-summary-quantity">{item.quantity}</span>
//                           <button
//                             className="order-summary-plus-btn"
//                             onClick={() => handleIncrease(item.id)}
//                           >
//                             +
//                           </button>
//                         </div>
//                         ₹{item.price * item.quantity}
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </div>

//             <div className="order-addon-bottom">
//               <div className="order-addon-total-price">
//                 <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total:</p>
//                 <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹{totalPrice}</span>
//               </div>
//               <button onClick={() => {
//                 setIsConfirmModalOpen(false);
//                 setIsBillModalOpen(true);
//               }} className="order-addon-content-btn">
//                 Proceed to Pay
//               </button>
//               <button onClick={() => {
//                 setIsModalOpen(false);
//                 setIsConfirmModalOpen(false);
//                 setIsBillModalOpen(false);
//                 setisQRModalOpen(false);
//               }} className="order-addon-new-btn">
//                 Add new Item
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Bill Modal */}
//       {isBillModalOpen && (
//         <div className="bill-modal">
//           <div className="bill-content">
//             <div className="bill-header">
//               <div className="bill-header-left">
//                 <div className="backbtn" onClick={() => {
//                   setIsConfirmModalOpen(true);
//                   setIsBillModalOpen(false);
//                 }}>
//                   &lt;
//                 </div>
//                 <div className="customer-detail">
//                   <span className="orderID">#219</span>
//                   <span className="orderDate">November 07, 2024</span>
//                   <span className="orderTimer">11:20am</span>
//                 </div>
//               </div>
//               <div className="bill-table-no">T2</div>
//             </div>

//             <div className="bill-body">
//               <span className="bill-invoice-no" style={{ borderBottom: `1px solid rgba(77, 77, 77, 0.634)`, width: '100%', textAlign: 'left', paddingBottom: '0.7rem', fontSize: '1.2rem' }}>Invoice <b>#219</b></span>
//               <h2>Bill Summary</h2>
//               <ul>
//                 {selectedItems.map((item) => (
//                   <li key={item.id}>
//                     <p className="food-name">
//                       <span>{item.name}</span>
//                       <span>x{item.quantity}</span>
//                     </p>
//                     <p className="food-price">
//                       <span>₹{item.price * item.quantity}</span>
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//               <div className="bill-total">
//                 <div className="bill-total-row">
//                   <p>Item Total:</p>
//                   <p className="light-p">₹{totalPrice}</p>
//                 </div>
//                 <div className="bill-total-row">
//                   <p>GST and Restaurant Charges:</p>
//                   <p className="light-p">₹250</p>
//                 </div>
//                 <div className="bill-total-row">
//                   <p>Grand Total:</p>
//                   <p className="light-p">₹{totalPrice + 250}</p>
//                 </div>
//               </div>
//               <button onClick={() => {
//                 setIsBillModalOpen(false);
//                 setisPaymentModalOpen(true);
//               }} className="bill-confirm-btn">
//                 CONFIRM
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Payment Modal */}
//       {isPaymentModalOpen && (
//         <div className="payment-modal">
//           <div className="payment-content">
//             <div className="payement-header" onClick={() => {
//               setisPaymentModalOpen(false);
//               setIsBillModalOpen(true);
//             }}>
//               <img src="/payment-imgs/Right.svg" alt="" />
//             </div>
//             <div className="payement-body">
//               <div className="payment-body-title">
//                 <h2 style={{ fontSize: '2.2rem' }}>Payment Method</h2>
//                 <h5>Choose your payment method</h5>
//               </div>
//               <div className="payment-body-row disable">
//                 <div className="left-content">
//                   <img src="/payment-imgs/fp.svg" alt="" />
//                   <div className="left-content-content">
//                     <h1 className="payment-method-name">FacePae <span style={{ fontSize: '1.5rem' }}>(Coming Soon)</span></h1>
//                     <h4 className="payment-method-desc">Pay with your Face</h4>
//                   </div>
//                 </div>
//                 <div className="right-checkbox">
//                   <input type="radio" disabled />
//                 </div>
//               </div>
//               <div className="payment-body-row">
//                 <div className="left-content">
//                   <img src="/payment-imgs/image-2.svg" alt="" />
//                   <div className="left-content-content">
//                     <h1 className="payment-method-name">UPI Scan Code</h1>
//                     <h4 className="payment-method-desc">Pay using QR Scanner</h4>
//                   </div>
//                 </div>
//                 <div className="right-checkbox">
//                   <input type="radio" />
//                 </div>
//               </div>
//               <div className="payment-body-row">
//                 <div className="left-content">
//                   <img src="/payment-imgs/cash.svg" alt="" />
//                   <div className="left-content-content">
//                     <h1 className="payment-method-name">Pay at Restaurant</h1>
//                     <h4 className="payment-method-desc">Pay by Cash/Card</h4>
//                   </div>
//                 </div>
//                 <div className="right-checkbox">
//                   <input type="radio" />
//                 </div>
//               </div>
//               <button onClick={() => {
//                 setisPaymentModalOpen(false);
//                 setisQRModalOpen(true);
//               }} className="payment-content-btn">
//                 Pay
//               </button>
//             </div>
//           </div>
//         </div>
//       )}



//       {isQRModalOpen && (
//         <div className="qr-modal">
//           <div className="qr-content">
//             <div className="qr-header">
//               <span className="backbtn" onClick={() => {
//                 setisPaymentModalOpen(true);
//                 setisQRModalOpen(false);
//               }}
//                 style={{ fontSize: '2.4rem', marginRight: '1.5rem' }}>
//                 &larr;
//               </span>
//               <div className="note">
//                 <i className="fas fa-info-circle"></i>
//                 <span style={{ fontWeight: 'bold' }}>Note: Please do not close the screen until payment is done</span>
//               </div>
//             </div>
//             <div className="qr-amount">₹{totalPrice}</div>
//             <div className="qr-instructions">Scan the code to pay</div>
//             <div className="qr-code">
//               <img src="/payment-imgs/image 23.svg" alt="QR Code" />
//             </div>
//             {/* <ol className="qr-instructions" style={{textAlign:'left'}}>
//               <li>Go to UPI ID linked mobile app</li>
//               <li>Scan the code through Scanner</li>
//               <li>Complete the payment</li>
//             </ol> */}
//             <div className="qr-footer" style={{ fontWeight: 'bold' }}>
//               This page will automatically expire in 2 minutes
//               <div className="qr-timer">
//                 <div
//                   className="qr-timer-progress"
//                   style={{ width: `${progress}%` }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Menu;











































// Older Version Keep this its a working one with a good running tabs activity
import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import axios from "axios";

function Menu() {
  const restaurantId =22
  useEffect(() => {
    // Fetch data and process dish images
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/menu"); // Replace with your API endpoint
      const data = await response.json();
  
      // Add quantity = 0 and handle image processing
      const updatedData = data.map((item) => {
        const base64Image = item.dish_images?.[0]?.dish_image; // Access first image in the dish_images array
        const imageFormat = '*' // Assume JPEG as default or get dynamically if available
  
        return {
          ...item,
          quantity: 0, // Add default quantity
          image: base64Image 
            ? `data:image/${imageFormat};base64,${base64Image}` 
            : "/sklton_img.png", // Fallback image
        };
      });
  
      console.log(updatedData);
      setItems(updatedData);
    };
  
    fetchData();
  }, []);
  
  

  const handleIncrease = (id) => {
    setItems(
      items.map((item) =>
        item.dish_id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id) => {
    setItems(
      items.map((item) =>
        item.dish_id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };


  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isBillModalOpen, setIsBillModalOpen] = useState(false);
  const [isPaymentModalOpen, setisPaymentModalOpen] = useState(false);
  const [isQRModalOpen, setisQRModalOpen] = useState(false);

  const progress = 'hi'

  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(false);
    setIsBillModalOpen(false);
    setisPaymentModalOpen(false);
    setisQRModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // const handleConfirmOrder = () => {
  //   setIsConfirmModalOpen(true);
  //   setIsModalOpen(false);
  // };

  const handleConfirmOrder = async () => {
    // setIsLoading(true);
    try {
      const tableNo = 4
      const orderDetails = selectedItems.map(item => ({
        dish_id: item.dish_id,
        quantity: item.quantity,
      }));
      console.log(orderDetails, tableNo);
  
      const response = await axios.post(
        "http://localhost:3000/api/post-order",
        {
          tableNo,
          orderDetails,
          restaurantId,
        }
      );
  
      const responseData = response.data; // Use a different name for destructured data
      console.log("Order Response:", responseData);
  
      // setOrderId(responseData.order?.id || orderId); // Update order ID if available from API
      setIsConfirmModalOpen(true);
      setIsBillModalOpen(false);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };
  
  
  const handleProceedToPay = () => {
    setIsBillModalOpen(true);
    setIsConfirmModalOpen(false);
  };
  
  const handlepayment = () => {
    setisPaymentModalOpen(true);
    setIsBillModalOpen(false);
  }
  
  const handleQR = () => {
    setisQRModalOpen(true);
    setisPaymentModalOpen(false);
  }

  const handleCloseBillModal = () => {
    setIsBillModalOpen(false);
    setIsConfirmModalOpen(true);
  }

  const handleClosePaymentModal = () => {
    setisPaymentModalOpen(false);
    setIsBillModalOpen(true);
  }

  const handleCloseQRModal = () => {
    setisQRModalOpen(false);
    setisPaymentModalOpen(true);
  }

  const selectedItems = items.filter(item => item.quantity > 0);
  const totalPrice = selectedItems.reduce((total, item) => total + item.dish_cost * item.quantity, 0);



  return (
    <>
      <Sidebar />
      <div className={`customer-menu-container ${isModalOpen ? 'blurred' : ''}`}>
        <div className="customer-menu-searchbar">
          <h1 className="customer-menu-title">Menu</h1>
          <input type="text" placeholder="Search a food" className="customer-menu-search-input" />
          <div className="customer-menu-order-details">
            <span className="customer-menu-order-id"># 219</span>
            <div className="customer-menu-table-no">T2</div>
          </div>
        </div>

        <div className="customer-menu-items">
            {items.map((item) => (
              <div className="customer-menu-item" key={item.dish_id}>
                <img src={item.image} alt={item.dish_name} className="customer-menu-item-image" />
                <h3 className="customer-menu-item-name">{item.dish_name}</h3>
                <p className="customer-menu-item-description">
                {item.dish_description || 'No Description'}
                </p>
                <div className="customer-menu-item-footer">
                  <span className="customer-menu-item-price">₹ {item.dish_cost}</span>
                  <div className="customer-menu-item-controls">
                    <button
                      className="customer-menu-minus-btn"
                      onClick={() => handleDecrease(item.dish_id)}
                      disabled={item.quantity === 0}
                    >
                      -
                    </button>
                    <span className="customer-menu-quantity">{item.quantity}</span>
                    <button
                      className="customer-menu-plus-btn"
                      onClick={() => handleIncrease(item.dish_id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* <button style={{ padding: '0.3rem 1rem', cursor: 'pointer' }} className="btn">Customize</button> */}
              </div>
            ))}
          </div>
        <button className="customer-menu-continue-btn" onClick={handleOpenModal}>
          <span role="img" aria-label="cart">🛒</span> Continue
        </button>
      </div>




      {/* Order Summary Modal */}
      {isModalOpen && (
        <div className="order-summary-modal">
          <div className="order-summary-content">
            <div className="order-summary-header">
              <div className="backbtn" onClick={handleCloseModal}>&lt;</div>
              <div className="order-summary-details">
                <span className="order-summary-id"># 219</span>
                <div className="order-summary-table-no">T2</div>
              </div>
            </div>
            <h2 style={{ textAlign: 'left' }}>Order Summary</h2>
            <div className="order-summary-amount">
              {selectedItems.length === 0 ? (
                <>
                  <img src="/menu-food-imgs/Group 69.svg" alt="" style={{ height: '7rem' }} />
                  <p>No items in your cart.</p>
                </>
              ) : (
                <>
                  <ul>
                    {selectedItems.map((item) => (
                      <li key={item.dish_id}>
                        {item.dish_name}
                        <div className="order-summary-item-controls">
                          <button
                            className="order-summary-minus-btn"
                            onClick={() => handleDecrease(item.dish_id)}
                            disabled={item.quantity === 0}
                          >
                            -
                          </button>
                          <span className="order-summary-quantity">{item.quantity}</span>
                          <button
                            className="order-summary-plus-btn"
                            onClick={() => handleIncrease(item.dish_id)}
                          >
                            +
                          </button>
                        </div>
                        ₹{item.dish_cost * item.quantity}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="order-summary-bottom">
              <div className="order-summary-total-price">
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total:</p>
                <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹{totalPrice}</span>
              </div>
              <button onClick={handleConfirmOrder} className="order-summary-content-btn">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}





      {/* Confirm Order Modal */}
      {isConfirmModalOpen && (
        <div className="order-addon-modal">
          <div className="order-addon-content">
            <div className="order-addon-header">
              <div className="backbtn" onClick={handleCloseModal}>&lt;</div>
              <div className="order-addon-details">
                {/* <div className="order-addon-details-left">
                  <img src="/menu-food-imgs/Timer.svg" alt="" />
                  <div className="order-coming-time">
                    12:00 <br /> minutes
                  </div>
                </div> */}
                <div className="order-addon-details-right">
                  <span className="order-addon-id"># 219</span>
                  <div className="order-addon-table-no">T2</div>
                </div>
              </div>
            </div>

            <h2 style={{ textAlign: 'left', fontSize: '2rem' }}>Order Summary</h2>
            <p style={{ textAlign: 'left', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Click + to repeat order</p>
            <div className="order-addon-amount">
              {selectedItems.length === 0 ? (
                <>
                  <img src="/menu-food-imgs/Group 69.svg" alt="" style={{ height: '7rem' }} />
                  <p>No items in your cart.</p>
                </>
              ) : (
                <>
                  <ul>
                    {selectedItems.map((item) => (
                      <li key={item.dish_id}>
                        {item.dish_name}
                        <div className="order-summary-item-controls">
                          <button
                            className="order-summary-minus-btn"
                            onClick={() => handleDecrease(item.dish_id)}
                            disabled={item.quantity === 0}
                          >
                            -
                          </button>
                          <span className="order-summary-quantity">{item.quantity}</span>
                          <button
                            className="order-summary-plus-btn"
                            onClick={() => handleIncrease(item.dish_id)}
                          >
                            +
                          </button>
                        </div>
                        ₹{item.dish_cost * item.quantity}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="order-addon-bottom">
              <div className="order-addon-total-price">
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total:</p>
                <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹{totalPrice}</span>
              </div>
              <button onClick={handleProceedToPay} className="order-addon-content-btn">
                Proceed to Pay
              </button>
              <button onClick={handleCloseModal} className="order-addon-new-btn">
                Add new Item
              </button>
            </div>
          </div>
        </div>
      )}




      {/* Bill Summary Modal */}
      {isBillModalOpen && (
        <div className="bill-modal">
          <div className="bill-content">
            <div className="bill-header">
              <div className="bill-header-left">
                <div className="backbtn" onClick={handleCloseBillModal}>&lt;</div>
                <div className="customer-detail">
                  <span className="orderID">#219</span>
                  <span className="orderDate">November 07, 2024</span>
                  <span className="orderTimer">11:20am</span>
                </div>
              </div>
              <div className="bill-table-no">T2</div>
            </div>

            <div className="bill-body">
              <span className="bill-invoice-no" style={{ borderBottom: `1px solid rgba(77, 77, 77, 0.634)`, width: '100%', textAlign: 'left', paddingBottom: '0.7rem', fontSize: '1.2rem' }}>Invoice <b>#219</b></span>
              <h2>Bill Summary</h2>
              <ul>
                {selectedItems.map((item) => (
                  <li key={item.id}>
                    <p className="food-name">
                      <span>{item.dish_name}</span>
                      <span>x{item.quantity}</span>
                    </p>
                    <p className="food-price">
                      <span>₹{item.dish_cost * item.quantity}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <div className="bill-total">
                <div className="bill-total-row">
                  <p>Item Total:</p>
                  <p className="light-p">₹{totalPrice}</p>
                </div>
                <div className="bill-total-row">
                  <p>GST and Restaurant Charges:</p>
                  <p className="light-p">₹250</p>
                </div>
                <div className="bill-total-row">
                  <p>Grand Total:</p>
                  <p className="light-p">₹{totalPrice + 250}</p>
                </div>
              </div>
              <button onClick={handlepayment} className="bill-confirm-btn">
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      )}







      {isPaymentModalOpen && (
        <div className="payment-modal">
          <div className="payment-content">
            <div className="payement-header" onClick={handleClosePaymentModal}>
              <img src="/payment-imgs/Right.svg" alt="" />
            </div>

            <div className="payement-body">
              <div className="payment-body-title">
                <h2 style={{ fontSize: '2.2rem' }}>Payment Method</h2>
                <h5>Choose your payment method</h5>
              </div>


              <div className="payment-body-row disable">
                <div className="left-content">
                  <img src="/payment-imgs/fp.svg" alt="" />
                  <div className="left-content-content">
                    <h1 className="payment-method-name">FacePae <span style={{ fontSize: '1.5rem' }}>(Coming Soon)</span></h1>
                    <h4 className="payment-method-desc">Pay with your Face</h4>
                  </div>
                </div>
                <div className="right-checkbox">
                  <input type="radio" disabled />
                </div>
              </div>


              <div className="payment-body-row">
                <div className="left-content">
                  <img src="/payment-imgs/image-2.svg" alt="" />
                  <div className="left-content-content">
                    <h1 className="payment-method-name">UPI Scan Code</h1>
                    <h4 className="payment-method-desc">Pay using QR Scanner</h4>
                  </div>
                </div>
                <div className="right-checkbox">
                  <input type="radio" />
                </div>
              </div>


              <div className="payment-body-row">
                <div className="left-content">
                  <img src="/payment-imgs/cash.svg" alt="" />
                  <div className="left-content-content">
                    <h1 className="payment-method-name">Pay at Restaurant</h1>
                    <h4 className="payment-method-desc">Pay by Cash/Card</h4>
                  </div>
                </div>
                <div className="right-checkbox">
                  <input type="radio" />
                </div>
              </div>
              <button onClick={handleQR} className="payment-content-btn">
                Pay
              </button>
            </div>
          </div>
        </div>
      )}






      {isQRModalOpen && (
        <div className="qr-modal">
          <div className="qr-content">
            <div className="qr-header">
              <span className="backbtn" onClick={handleCloseQRModal} style={{ fontSize: '2.4rem', marginRight: '1.5rem' }}>&larr;</span>
              <div className="note">
                <i className="fas fa-info-circle"></i>
                <span style={{ fontWeight: 'bold' }}>Note: Please do not close the screen until payment is done</span>
              </div>
            </div>
            <div className="qr-amount">₹{totalPrice}</div>
            <div className="qr-instructions">Scan the code to pay</div>
            <div className="qr-code">
              <img src="/payment-imgs/image 23.svg" alt="QR Code" />
            </div>
            {/* <ol className="qr-instructions" style={{textAlign:'left'}}>
              <li>Go to UPI ID linked mobile app</li>
              <li>Scan the code through Scanner</li>
              <li>Complete the payment</li>
            </ol> */}
            <div className="qr-footer" style={{ fontWeight: 'bold' }}>
              This page will automatically expire in 2 minutes
              <div className="qr-timer">
                <div
                  className="qr-timer-progress"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
















// import React, { useState } from "react";
// import axios from "axios";
// import Sidebar from "./sidebar";

// function Menu() {
//   const [items, setItems] = useState([
//     { id: 1, name: "Paneer Masala", price: 250, quantity: 0, image: "/menu-food-imgs/image.svg" },
//     { id: 2, name: "Dhal Makhani", price: 200, quantity: 0, image: "/menu-food-imgs/image-1.svg" },
//     { id: 3, name: "Malai Kofta", price: 300, quantity: 0, image: "/menu-food-imgs/image-2.svg" },
//     { id: 4, name: "Mushroom Masala", price: 250, quantity: 0, image: "/menu-food-imgs/image-3.svg" },
//     { id: 5, name: "Paneer Masala", price: 250, quantity: 0, image: "/menu-food-imgs/image.svg" },
//     { id: 6, name: "Paneer Masala", price: 250, quantity: 0, image: "/menu-food-imgs/image.svg" }
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
//   const [isBillModalOpen, setIsBillModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const [orderId, setOrderId] = useState("#219"); // Dynamic order ID
//   const [tableNo, setTableNo] = useState("13"); // Example table number

//   const selectedItems = items.filter(item => item.quantity > 0);
//   const totalPrice = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   const handleIncrease = (id) => {
//     setItems(items.map(item =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     ));
//   };

//   const handleDecrease = (id) => {
//     setItems(items.map(item =>
//       item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
//     ));
//   };

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setIsConfirmModalOpen(false);
//     setIsBillModalOpen(false);
//   };

  // const handleConfirmOrder = async () => {
  //   setIsLoading(true);
  //   try {
  //     const token = localStorage.getItem('token');
  //     console.log('Token being sent:', token);
  
  //     // Check if token exists
  //     if (!token) {
  //       alert('You are not logged in. Please log in first.');
  //       return; // Stop further execution
  //     }
  
  //     const orderDetails = selectedItems.map(item => ({
  //       dish_id: item.id,
  //       quantity: item.quantity,
  //     }));
  //     console.log(orderDetails, tableNo);
  
  //     const response = await axios.post(
  //       "http://localhost:3000/api/post-order",
  //       {
  //         tableNo,
  //         orderDetails,
  //       }
  //     );
  
  //     const responseData = response.data; // Use a different name for destructured data
  //     console.log("Order Response:", responseData);
  
  //     setOrderId(responseData.order?.id || orderId); // Update order ID if available from API
  //     setIsConfirmModalOpen(false);
  //     setIsBillModalOpen(true);
  //   } catch (error) {
  //     console.error("Error placing order:", error);
  //     alert("Failed to place order. Please try again.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  

//   return (
//     <>
//       <Sidebar />
//       <div className={`customer-menu-container ${isModalOpen ? 'blurred' : ''}`}>
//         <div className="customer-menu-searchbar">
//           <h1 className="customer-menu-title">Menu</h1>
//           <input type="text" placeholder="Search a food" className="customer-menu-search-input" />
//           <div className="customer-menu-order-details">
//             <span className="customer-menu-order-id">{orderId}</span>
//             <div className="customer-menu-table-no">{tableNo}</div>
//           </div>
//         </div>

//         <div className="customer-menu-items">
//           {items.map((item) => (
//             <div className="customer-menu-item" key={item.id}>
//               <img src={item.image} alt={item.name} className="customer-menu-item-image" />
//               <h3 className="customer-menu-item-name">{item.name}</h3>
//               <p className="customer-menu-item-description">
//                 A juicy, seasoned patty served with toppings like lettuce, tomato, cheese, and sauces for a smoky, flavorful bite.
//               </p>
//               <div className="customer-menu-item-footer">
//                 <span className="customer-menu-item-price">₹ {item.price}</span>
//                 <div className="customer-menu-item-controls">
//                   <button
//                     className="customer-menu-minus-btn"
//                     onClick={() => handleDecrease(item.id)}
//                     disabled={item.quantity === 0}
//                   >
//                     -
//                   </button>
//                   <span className="customer-menu-quantity">{item.quantity}</span>
//                   <button
//                     className="customer-menu-plus-btn"
//                     onClick={() => handleIncrease(item.id)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="customer-menu-continue-btn" onClick={handleOpenModal}>
//           <span role="img" aria-label="cart">🛒</span> Continue
//         </button>
//       </div>

//       {/* Order Summary Modal */}
//       {isModalOpen && (
//         <div className="order-summary-modal">
//           <div className="order-summary-content">
//             <div className="order-summary-header">
//               <div className="backbtn" onClick={handleCloseModal}>&lt;</div>
//               <div className="order-summary-details">
//                 <span className="order-summary-id">{orderId}</span>
//                 <div className="order-summary-table-no">{tableNo}</div>
//               </div>
//             </div>
//             <h2>Order Summary</h2>
//             <ul>
//               {selectedItems.map((item) => (
//                 <li key={item.id}>
//                   {item.name} x{item.quantity} = ₹{item.price * item.quantity}
//                 </li>
//               ))}
//             </ul>
//             <div className="order-summary-total-price">
//               Total: ₹{totalPrice}
//             </div>
//             <button
//               onClick={handleConfirmOrder}
//               className="order-summary-content-btn"
//               disabled={isLoading}
//             >
//               {isLoading ? "Placing Order..." : "Confirm Order"}
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Menu;