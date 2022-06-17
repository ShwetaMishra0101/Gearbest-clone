import React from "react";
import styled from "../style/cart.module.css";
import Counter from '../footer/Counter'
import { Link } from "react-router-dom";

const Cart = () => {
  return (
      
    <div className={styled.cartDiv}>
      <div className={styled.headingDiv}>
        <div className={styled.hFirstDiv}>Selected Item(s)</div>
        <div className={styled.hsecondDiv}>
          <div>Unit Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div>Operation</div>
        </div>
      </div>
      <div className={styled.cart}>
        <input type="checkbox" name="" id="" />
        <div className={styled.firstDiv}>
          <img
            className={styled.img}
            src="https://gloimg.gbtcdn.com/soa/gb/item/6878027957345120256/16534/goods_img-v1/671d0ade390e.jpg"
            alt=""
          />
        </div>
        <div className={styled.secDiv}>
          <h4>
            New high quality watches creative casual fashion quartz watches
            Europe and America men watches
          </h4>
        </div>
        <div>
          <h4>$69.99</h4>
        </div>
        <div className={styled.thrdDiv}><Counter/></div>
        <div className={styled.fDiv}>$69.99</div>
        <div className={styled.fifDiv}>
            <p className={styled.p}>Edit</p>
            <p className={styled.p}>Favorites</p>
            <p className={styled.p}>Delete</p>
            </div>
      </div>
      <div className={styled.cart}>
        <input type="checkbox" name="" id="" />
        <div className={styled.firstDiv}>
          <img
            className={styled.img}
            src="https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16534/goods_img-v1/ed230b4b2700.jpg"
            alt=""
          />
        </div>
        <div className={styled.secDiv}>
          <h4>
            New high quality watches creative casual fashion quartz watches
            Europe and America men watches
          </h4>
        </div>
        <div>
          <h4>$69.99</h4>
        </div>
        <div className={styled.thrdDiv}><Counter/></div>
        <div className={styled.fDiv}>$69.99</div>
        <div className={styled.fifDiv}>
            <p className={styled.p}>Edit</p>
            <p className={styled.p}>Favorites</p>
            <p className={styled.p}>Delete</p>
            </div>
      </div>

      <div className={styled.chekDiv}>

          <div className={styled.mDivckek}>
              <div className={styled.imgDiv}><img className={styled.ckImg} src="https://css.gbtcdn.com/imagecache/gbw/img/site/money_back@.png" alt="" />
              <label htmlFor=""><h4>45 days</h4><p>Money Back Guarantee</p></label></div>

              <div className={styled.imgDiv}><img className={styled.ckImg} src="https://css.gbtcdn.com/imagecache/gbw/img/site/repair@.png" alt="" />
              <label htmlFor=""><h4>360 days</h4><p>Free Repair Warranty</p></label></div>
          </div>
          <div className={styled.mDivckek2}>
              <div>
                  <p>
Your subtotal</p>
<p>Promotion</p>
<h5>Total</h5>
              </div>
              <div>
                  <p>$48.99</p>
                  <p>-$00.00</p>
                  <h2 className={styled.h2}>$48.99</h2>
                  <Link to="/check">
                  <button>Checked Out</button>
                  </Link>
              </div>

          </div>
      </div>
    </div>
  );
};

export default Cart;
