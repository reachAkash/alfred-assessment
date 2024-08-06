// import { addToCart, removeFromCart } from "@/redux/foodSlice";
// import { RootState } from "@/redux/store";
// import React, { useState } from "react";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import { RxCross1 } from "react-icons/rx";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const RestrauntMenu: React.FC = () => {
//   const [selectedItems, setSelectedItems] = useState<any>([]);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const restraunt = useSelector((store: RootState) => store.cart.currentRes);
//   const menu = restraunt.menu;
//   const handleRemoveCart = (item: string) => {
//     dispatch(removeFromCart(item));
//   };

//   const handleAddCart = () => {
//     dispatch(addToCart(selectedItems));
//   };

//   const addToSelected = (currItem: any) => {
//     const alreadyInCart = selectedItems.findIndex((item: any) => {
//       return item.name === currItem.name;
//     });

//     if (alreadyInCart !== -1) {
//       setSelectedItems((prev: any) =>
//         prev.filter((item: any) => item.name !== currItem.name)
//       );
//     } else {
//       setSelectedItems((prev: any) => [...prev, currItem]);
//     }
//   };

//   console.log(selectedItems);

//   return (
//     <div className="container py-4 space-y-8">
//       <div className="flex items-center gap-4">
//         <div
//           onClick={() => navigate(-1)}
//           className="bg-gray-100 rounded-full p-3"
//         >
//           <IoIosArrowRoundBack className="text-2xl" />
//         </div>
//         <div className="font-semibold text-2xl">{restraunt?.name}</div>
//       </div>
//       <div className="space-y-7">
//         {menu?.map((item) => {
//           return (
//             <div
//               onClick={() => addToSelected(item)}
//               className="flex items-center justify-between"
//             >
//               <div className="flex items-center justify-normal gap-4">
//                 <div>
//                   <img
//                     className="cart-image flex-shrink-0 rounded-lg"
//                     src={item?.image}
//                   />
//                 </div>
//                 <div>
//                   <div className="space-y-4">
//                     <div className="font-medium text-2xl">{item?.item}</div>
//                     <div className="">Rs. {item?.price}</div>
//                   </div>
//                 </div>
//               </div>
//               <input
//                 type="checkbox"
//                 onClick={() => handleRemoveCart(item?.item)}
//               />
//             </div>
//           );
//         })}
//       </div>
//       <button
//         onClick={handleAddCart()}
//         className="bg-black text-white rounded-full px-3 py-2 w-full active:scale-95 transition-all ease-in-out duration-300"
//       >
//         Add To Cart
//       </button>
//     </div>
//   );
// };

// export default RestrauntMenu;

import { addToCart, removeFromCart } from "@/redux/foodSlice";
import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RestrauntMenu: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const restraunt = useSelector((store: RootState) => store.cart.currentRes);
  const menu = restraunt.menu;

  const handleAddCart = () => {
    dispatch(addToCart(selectedItems));
  };

  const addToSelected = (currItem: any) => {
    setSelectedItems((prevSelectedItems: any) => {
      const alreadyInCart = prevSelectedItems.findIndex(
        (item: any) => item.name === currItem.name
      );

      if (alreadyInCart !== -1) {
        return prevSelectedItems.filter(
          (item: any) => item.name !== currItem.name
        );
      } else {
        return [...prevSelectedItems, currItem];
      }
    });
  };

  const isSelected = (item: any) => {
    return selectedItems.some(
      (selectedItem: any) => selectedItem.name === item.name
    );
  };

  return (
    <div className="container py-4 space-y-8">
      <div className="flex items-center gap-4">
        <div
          onClick={() => navigate(-1)}
          className="bg-gray-100 rounded-full p-3"
        >
          <IoIosArrowRoundBack className="text-2xl" />
        </div>
        <div className="font-semibold text-2xl">{restraunt?.name}</div>
      </div>
      <div className="space-y-7">
        {menu?.map((item: any) => (
          <div
            key={item.name}
            onClick={() => addToSelected(item)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center justify-normal gap-4">
              <div>
                <img
                  className="cart-image flex-shrink-0 rounded-lg"
                  src={item?.image}
                  alt={item?.item}
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="font-medium text-2xl">{item?.item}</div>
                  <div className="">Rs. {item?.price}</div>
                </div>
              </div>
            </div>
            <input
              type="checkbox"
              checked={isSelected(item)}
              readOnly
              className="pointer-events-none"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleAddCart}
        className="bg-black text-white rounded-full px-3 py-2 w-full active:scale-95 transition-all ease-in-out duration-300"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default RestrauntMenu;
