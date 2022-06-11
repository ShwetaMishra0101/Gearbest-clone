
export const HOME_DATA ="HOME_DATA"
export const COUPON ="COUPON"
export const SUPER_DEALS = "SUPER_DEALS"
export const APPLY_ONLY="APPLY_ONLY"
export const NEW_ARRIVAlS= "NEW_ARRIVAlS" 


export const getHomeData = (payload)=>({
    type:HOME_DATA,
    payload
})

export const getCoupnData = (payload)=>({
    type:COUPON,
    payload
})

export const getSuperDealsData = (payload)=>({
    type:SUPER_DEALS,
    payload
})

export const getApplyData = (payload)=>({
    type:APPLY_ONLY,
    payload
})

export const getNEWData = (payload)=>({
    type:NEW_ARRIVAlS,
    payload
})



export const getallHomeData =(dispatch)=>{

    fetch(`http://localhost:3000/home`)
    .then((res)=>res.json())
    .then((res)=>dispatch(getHomeData(res)))
        
}

export const getallCuopneData =(dispatch)=>{

    fetch(` http://localhost:3000/Cuopon`)
    .then((res)=>res.json())
    .then((res)=>dispatch(getCoupnData(res)))
        
}

export const getallSuperdealData =(dispatch)=>{

    fetch(`http://localhost:3000/Super`)
    .then((res)=>res.json())
    .then((res)=>dispatch(getSuperDealsData(res)))
        
}

export const getallAppData =(dispatch)=>{

    fetch(`http://localhost:3000/App`)
    .then((res)=>res.json())
    .then((res)=>dispatch(getApplyData(res)))
        
}

export const getallNewData =(dispatch)=>{

    fetch(`http://localhost:3000/New`)
    .then((res)=>res.json())
    .then((res)=>dispatch(getNEWData(res)))
        
}

