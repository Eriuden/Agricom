export const MODIFY_CART = "MODIFY_CART"
export const CLEAN_CART = "CLEAN_CART"

//Correction à apporter au cas particulier de newProduct

type cartProps = {
    id :string,
    cart: [any],
    product: {id: string}
    newProduct : {id: string, quantity: number}
    quantity: number,
    quantityAdded: number
}
export const addToCart = async ({cart, newProduct, quantityAdded} : cartProps, dispatch:any) => {
        let same = cart.findIndex((cartIndexFound: any) => cartIndexFound.id === newProduct.id)
        if (same === -1) {
            newProduct.quantity = quantityAdded
            cart.push(newProduct)
        } else {
            cart[same].quantity += quantityAdded
        }
        let localCart = JSON.stringify(cart)
        window.localStorage.setItem("metalibaba", localCart)

        dispatch({
            type: MODIFY_CART,
            payload: cart,
        })
}

export const deleteFromCart = async ({cart, product} : cartProps, dispatch:any) => {
        let newCart = cart.filter((filteredCart: any) => filteredCart.id !== product.id)
        dispatch({
            type: MODIFY_CART,
            payload: newCart,
        })
}

export const cleanCart = async (dispatch:any) => {
        dispatch({
            type: CLEAN_CART,
            payload: null
        })
}