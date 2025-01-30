import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { toast } from "react-toastify"
import product_img from '../assets/products/products.js'

export const PageContext = createContext();

const PageContextProvider = (props) => {

    const currency = "₹"

    //const backendUrl = import.meta.env.VITE_BACKEND_URL
    const backendUrl = "https://federal-backend.vercel.app"
    

    const navigate = useNavigate();

    const [login, setLogin] = useState(false)
    const [orderConfirm, setOrderConfirm] = useState(false)
    const [cart, setCart] = useState([])
    const [order, setOrder] = useState({
        name: "",
        empNum: "",
        email: "",
        phoneno: "",
        billNumber: "",
        cart: [],
        bankIfsc: "ESMF0001924",
        bankName: "ESAF Bank",
        bankLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
        address: "Thiruvanmiyur",
        remark: ""
    })
    const [branchInfo, setBranchInfo] = useState({})

    const getBranchInfo = async () => {
        try {
            const branchName = localStorage.getItem("branchName");
            // console.log(branchName)
            const response = await axios.post(backendUrl + "/api/bankAcc/getbankinfo", { branchName })
            // console.log(response)
            if (response.data.success)
                await setBranchInfo(response.data.branchInfo)
            else {
                console.log(response.data.message)
                toast.error("Couldn't load branch infomation!")
            }

        } catch (err) {
            console.log(err)
            toast.error("Couldn't load branch information!")
        }
    }

    const newOrder = async () => {
        try {
            const response = await axios.post(backendUrl + "/api/order/new", { order })

            if (response.data.success) {
                toast.success("Order Placed Successfully")
                setCart([])
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error(error)
            toast.error(error.message)
        }
    }

    const addToCart = (item, qty) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.name === item.name
                        ? { ...cartItem, qty: Number(cartItem.qty + qty[cartItem.name]), totalAmt: cartItem.totalAmt + (qty[cartItem.name] * item.price) }
                        : cartItem
                );
            } else {
                return [...prevCart, { name: item.name, img: item.img, qty: qty[item.name], price: item.price, totalAmt: qty[item.name] * item.price }];
            }
        });
        toast.success(`${item.name} Added To Cart`, {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const incrementQty = (itemName) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.name === itemName
                    ? { ...cartItem, qty: cartItem.qty + 1 }
                    : cartItem
            )
        );
    };

    const decrementQty = (itemName) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.name === itemName && cartItem.qty > 1
                    ? { ...cartItem, qty: cartItem.qty - 1 }
                    : cartItem
            ).filter((cartItem) => cartItem.qty > 0)
        );
    };

    const removeFromCart = (itemName) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.name !== itemName));
    };


    const products = [
        { name: "CASH RECEIVED", price: 70, img: 0 },
        { name: "CASH PAID", price: 70, img: 1 },
        { name: "TRANSFER", price: 70, img: 2 },
        { name: "CTS CLEARING", price: 70, img: 3 },
        { name: "ACCOUNT CLOSED ON", price: 260, img: 4 },
        { name: "BRANCH HEAD", price: 260, img: 5 },
        { name: "ASSISTANT MANAGER", price: 260, img: 6 },
        { name: "REGISTERED WITH AD", price: 260, img: 7 },
        { name: "ACCOUNT PAYEE ONLY", price: 70, img: 8 },
        { name: "VALID FOR 3 MONTHS ONLY", price: 260, img: 9 }
        
    ]


    // useEffect(()=>{
    //     console.log(cart)
    // },[cart])

    const value = {
        backendUrl,
        navigate,
        login, setLogin,
        branchInfo, setBranchInfo, getBranchInfo,
        products,
        cart, addToCart, decrementQty, incrementQty, removeFromCart, setCart,
        order, setOrder, newOrder,
        orderConfirm, setOrderConfirm,
        currency
    }

    return (
        <PageContext.Provider value={value}>
            {props.children}
        </PageContext.Provider>
    )

}

export default PageContextProvider