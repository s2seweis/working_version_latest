import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 0px;
  z-index: 1;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
  z-index: 1;

`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
  z-index: 1;

`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  z-index: 1;

`;
