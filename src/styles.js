import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";

export const GlobalStyle = createGlobalStyle`
body {
color: ${(props) => props.theme.mainColor};
background: ${(props) => props.theme.backgroundColor};
}
`;

export const ItemWrapper = styled.div`
  margin: 20px;
  img {
    height: 200px;
    width: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
  hight: 25%;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const UpdateButtonStyled = styled.p`
  color: orange;
`;

export const AddButtonStyled = styled(BsPlusCircle)`
  height: 2rem;
  width: 2rem;
  color: green;
  float: right;
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
  float: right;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const StyledLink = styled(Link)`
  img {
    width: 50%;
    hight: 50%;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(props) => props.theme.mainColor};
  &.active {
    color: ${(props) => props.theme.red};
  }
`;
