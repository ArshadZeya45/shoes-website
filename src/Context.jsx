import React, { createContext } from "react";
import { useState } from "react";

export const myContext = createContext()


function Context(props){

    const [open , close] = useState(false)

    const menu = ()=>{
      return close(!open)
    }

    const [image , setImage] = useState([
      {image : "https://rukminim2.flixcart.com/image/750/900/xif0q/shoe/k/x/8/8-wht-purple-peach-wsnk-08-8-footox-wht-purple-peach-original-imagskugxgsfybkh.jpeg?q=20&crop=false"},
      {image : "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/t/3/n/3-875-mlt-3-deals4you-multi-original-imagg27xn9hnxw6h.jpeg?q=90&crop=false"},
      {image : "https://m.media-amazon.com/images/I/61vxTNNKUOL._AC_UY1000_.jpg"},
      {image : "https://assets.vogue.in/photos/61d2a6f10e5ab333fd4955f6/2:3/w_2560%2Cc_limit/Nike%2520customised%2520sneakers.jpg"},
      {image : "https://ca-times.brightspotcdn.com/dims4/default/15a30ea/2147483647/strip/true/crop/6122x4081+0+1/resize/1440x960!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb3%2F10%2F10c245034893adf233fc1cf3071a%2F1351750-fi-sneaker-buyer-coolkicks-jlc-16185-021.jpg"},
      {image : "https://5.imimg.com/data5/SELLER/Default/2023/10/351213810/KG/OH/GP/39807035/7-1800-black-white-shoes-waan-black-white-original-imagsz57knv7zdfg.jpg"},
      {image : "https://assets.ajio.com/medias/sys_master/root/20230228/z0n6/63fe1f06aeb26924e3993594/-473Wx593H-469435738-white-MODEL.jpg"},
      {image : "https://redtape.com/cdn/shop/files/RSL0562_1.jpg?v=1711713359"},
      {image :"https://www.shutterstock.com/image-vector/modern-colored-sneaker-3d-realistic-260nw-2388803243.jpg"},
      {image : "https://facts.net/wp-content/uploads/2023/12/19-sneaker-facts-1701796924.jpg"},

    ])

    const [data , setData] = useState([
      {id:0,name:"Jack & Jones Sneakers",price : "799",isAdded:false,image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/26685628/2023/12/27/4e3a6fa4-5b18-419b-8009-af8b49a0e9731703673230312JackJonesMenWhitePrintedSneakers1.jpg"},
      {id:1,name:"Roadster Men White & Grey Colourblocked Lightweight Sneakers",price : "899",isAdded:false,image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCDaieLyRXMh01qWnfn9gaaFT_DyokT17RQkz5mmydRGgnK0hzN24NS8PCWFSkWccO2KuLR1zcp4UPUYTvUC9UUPTxsY7o21dnHZdRs_kRG7OMWL44a2I2AA"},
      {id:2,name:"Forca Men Panelled Sneakers",price : "1799",isAdded:false,image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3r7tiSRQlXkcz-iwF4262-Y-ngOwLQ_jN9Bz5BgnLamlOlg_6ForUiBmEHotp13yaWVTGNtz3TUy7OOhxLKdMGrcaCw-4akwTmL3k9OEeIn8aU03rkeGPy6Y"},
      {id:3,name:"WAYVY Casual Sneakers For Men Sneakers For Men",price : "990",isAdded:false,image:"https://rukminim2.flixcart.com/image/750/900/xif0q/shoe/t/q/t/7-men-s-high-neck-shoes-klair-grey-black-original-imaghua9buhqspuq.jpeg?q=20&crop=false"},
      {id:4,name:"Neeman's Ease Walk Sneakers",price : "1699",isAdded:false,image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdXxcNlgJsxePIhz8x6hzF98efxNIGtLoV_3lJBNVIcWrnZM0xgJsc6maVHfvbL9_Zk1eFMgW6B3U2MOAMMGGkPnqavt_CIMoL71ntvXXKuQ_0i6QRnaxnMwfe"},
      {id:5,name:"Mast & Harbour Men Cream-Coloured & Red Colourblocked Sneakers",price : "720",isAdded:false,image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQRFti99M32rLrcddxqZLgciChRJjxZpFNBgfwteBKjiXWboOVsxAf9jMI09DwF6iUX4YQhfVOWuMeYMmAyw363F1Zjp6buYhY2XsTXi0Q"},
      {id:6,name:"Sixth Street Mens Flare Sneakers",price : "720",isAdded:false,image:"https://m.media-amazon.com/images/I/61RQqTJImhL.jpg"},
      {id:7,name:"The Roadster Lifestyle Co Women.",price : "939",isAdded:false,image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSzBgu8m8per2P61huBgZetJBH1Z5j8stgM-1SqOIIZ_9SedQt1SAlCBeBbgM5LV7_Pg5vuooSltiDhCGTjOKn5uemUyk85oLZ6AA47C44"},
      {id:8,name:"Mast & Harbour Men White & Grey Colourblocked Sneakers",price : "689",isAdded:false,image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTCATgpCAqaWyvrVuwPA76_pBGLzYFvbzZRM_k3Sm9jqgCZ7lLDvNYE6vPHLpK0DqSeTEegP4orsBcy-dt8LjbNr9TPvgPGK5tzOfji7JUNWtg34X4ikfHc"},
      {id:9,name:"The Roadster Lifestyle Co Men.",price : "959",isAdded:false,image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3P9EOKH2IoBAJJwJaAwX6dhNDVIB4TEymxOILisBky4lMVfLdf4ftW69iSNH785YS46BwkalQxCpfJv6fdIzkHWoiZg8ZFsLMp4XABKKVERdKQAYFw4U_TQ"},
      {id:10,name:"The Roadster Lifestyle Co Women. Printed Lace Ups Sneakers ",price : "639",isAdded:false,image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS28h_tShHqXjBBSNICWN1iFAlzwlXzK2mMF1UkausErcbJq7nYuoBcU_QRdZh2Ki9fUiULKgZMJtcvxwn22QwQQzKBHExSdCeL9lNsy16YVEX4z4O1mkIp"},
      {id:11,name:"Mast & Harbour Men White Round Toe Lightweight Sneakers ",price : "692",isAdded:false,image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTR02TfVxYlBh0dFxKkLuBuH2y4kasbaBNMA53mcajrQCEbaIwVXpBJ38wYaTccSOMFHZvyWUXiX1t3eFk0wrQDS8rfg8Yk2N5OnON2s74e-ZycHFoEfMfPzsE"},
      {id:12,name:"Mast & Harbour Men Red Colourblocked Lightweight Sneakers",price : "699",isAdded:false,image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrdMYpdThKY01hP5ewRYY33Z8HbQDAdSVOl0fLTrKCbZUXS1mN7g6f1VfdFb4jEfyQsUqYUAYz5Xk5eiQFCc-1sNhf91mfcsdXSK_0nneoeXTxEzslumIdXJI"},
      {id:13,name:"Mast & Harbour Men White Colourblocked PU Sneakers",price : "758",isAdded:false,image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQL43ygo4SGfpzU4Tan6Ut8huvQNaHU-CiNbobL6Je0Bl5JDKqqPBLr8MlcxkVbiLIgDGm_3J-nuxvMIjpTji6Z9BULZlO6VswYzK_Mt5G4"},
      {id:14,name:"Layasa Women Colourblocked Round Toe Lightweight Sneakers",price : "699",isAdded:false,image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAJEOGLDK0HgNm_xOFvOn30OQOpvs5jT0Bq4X-3qmWwu_NlMnVRCyIH17xrcJgr_hRDxDNNa1o9UAkwC9qqHmqmHMr0L7HRTDlJonoDLcHDTbEtbR3wezRIg"},
      {id:15,name:"El Paso Women Round Toe Lightweight Mid-Top Sneakers",price : "899",isAdded:false,image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS2LisX1wSe-tOfprJ2B7Uxht1sR30OBLiN45ADgbTkvJg9M0QEANapl1kqTT3ic5oILPjavCNwSUeZh4iC_o4dZajYwOBlU9Fd32Q0jzxrG3SmMUEfJh8Vww"},
    ])

    const getAddedItems = ()=>{
      return data.filter(el=>el.isAdded)
       
      
    }
    

    




   return (
    <myContext.Provider value={{menu,open,image,data,setData,getAddedItems}}>
        {props.children}
    </myContext.Provider>
   )
}

export default Context;