import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Add, Remove } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import cartRedux from "../redux/cartRedux";

export default CartItem =(product)=>{
    const dispatch = useDispatch();
     //Cart Item
   const handleQuantityChange =(e)=>{
    const quantity = parseInt(e.target.value, 10);
    dispatch(updateProductQuantity({ id: product.id, quantity }));
   }
   const handleRemoveClick = () => {
    dispatch(removeProduct(product.id));
  };

return(
     <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add/>
                    <ProductAmount type="number" min="1" value={product.quantity} onChange={handleQuantityChange}>{product.quantity}</ProductAmount>
                      <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    Rs {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
                <button className="btn" onClick={handleRemoveClick}>Remove</button>
              </Product>
            ))}
            <Hr />
          </Info>
);
}         


const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  .btn{

  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;


const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;