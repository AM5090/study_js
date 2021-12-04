import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 10px 0;
    font-size: 14px;
    flex-wrap: wrap;
    cursor: pointer;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 10px;
    margin-right: 5px;
    min-width: 60px;
    text-align: right;
`;

const TrashButton = styled.button`
    width: 19px;
    height: 17px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 12px;
    width: 100%;
`;

export const OrderListItem = ({ order, index, deleteItem }) => {

    const { openItem: { setOpenItem } } = useContext(Context);
    
    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ');

    const refDeleteButton = useRef(null);

    return (
    <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
        <ItemName>{order.name} {order.choice}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
        <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)} />
        { topping && <Toppings>Допы: {topping}</Toppings> }
    </OrderItemStyled>
)};