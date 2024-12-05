function Sidebar() {
    return (
        <>
        <div className="customer-menu-sidebar">
                 <ul className="customer-menu-categories">
            <li className="customer-menu-category-item">All Menu</li>
            <li className="customer-menu-category-item" >Starter</li>
            <li className="customer-menu-category-item" >Main Course</li>
            <li className="customer-menu-category-item" >Beverages</li>
            <li className="customer-menu-category-item" >Deserts</li>
            </ul>
            </div>
        </>
    );
}

export default Sidebar;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Sidebar() {
//   const [categories, setCategories] = useState([]);
//   const [dishes, setDishes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All Menu");

//   useEffect(() => {
//     const fetchCategories = async ({ Id }) => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/categories/${Id}`);

//         // Check if the response contains valid categories
//         if (response.data && response.data.categories) {
//           setCategories(response.data.categories);  // Set categories with their dish counts
//           setDishes(response.data.categories.flatMap(cat => cat.dishes));  // Set dishes for All Menu
//         } else {
//           console.error('Invalid category data received');
//         }
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);


//   const handleCategoryClick = async (categoryId, categoryName) => {
//     setSelectedCategory(categoryName);
//     if (categoryName === "All Menu") {
//       // Show all dishes if "All Menu" is clicked
//       setDishes(categories.flatMap(cat => cat.dishes));
//     } else {
//       // Fetch dishes for the selected category
//       const selectedCategory = categories.find(cat => cat.category_id === categoryId);
//       setDishes(selectedCategory ? selectedCategory.dishes : []);
//     }
//   };

//   return (
//     <>
//       <div className="customer-menu-sidebar">
//         <ul className="customer-menu-categories">
//           {/* Check if categories are available before rendering */}
//           {categories.length === 0(
//             <>
//             <li className="customer-menu-category-item" onClick={() =>
//                     handleCategoryClick(category.category_id, category.category_name)
//                   }>All Menu</li>
//             <li className="customer-menu-category-item" >Starter</li>
//             <li className="customer-menu-category-item" >Main Course</li>
//             <li className="customer-menu-category-item" >Beverages</li>
//             <li className="customer-menu-category-item" >Deserts</li>
//               <li
//                 className="customer-menu-category-item"
//                 onClick={() => handleCategoryClick(null, "All Menu")}
//               >
//                 All Menu <span>{dishes.length} items</span>
//               </li>
//               {categories.map((category) => (
//                 <li
//                   key={category.category_id}
//                   className="customer-menu-category-item"
//                   onClick={() =>
//                     handleCategoryClick(category.category_id, category.category_name)
//                   }
//                 >
//                   {category.category_name} <span>{category.item_count} items</span>
//                 </li>
//               ))}
//             </>
//           )}
//         </ul>
//       </div>

//       {/* Displaying dishes for the selected category */}
//       <div className="category-dishes">
//         <h2>{selectedCategory} Dishes</h2>
//         <ul>
//           {dishes.length > 0 ? (
//             dishes.map((dish) => (
//               <li key={dish.dish_id}>
//                 <h3>{dish.dish_name}</h3>
//                 <p>{dish.dish_description}</p>
//               </li>
//             ))
//           ) : (
//             <p>No dishes available for this category.</p>
//           )}
//         </ul>
//       </div>
//     </>
//   );

// }

// export default Sidebar;

