import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";

import './checkout.styles.scss'
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
const CheckoutPage = ({cartItems,totalValue}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                 <span>
                Produto
                 </span>
                </div>
                <div className="header-block">
                 <span>
                     Descrição
                 </span>
                </div>
                <div className="header-block">
                 <span>
                     Quantidade
                 </span>
                </div>
                <div className="header-block">
                 <span>
                     Preço
                 </span>
                </div>
                <div className="header-block">
                 <span>
                     Remover
                 </span>
                </div>
            </div>
            {
                cartItems.map(cartItem=>{
                    return (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                })

            }

            <StripeCheckoutButton price={totalValue} />
            <div className="total">
                <span>TOTAL : R$ {totalValue}</span>
            </div>
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems,
    totalValue:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)