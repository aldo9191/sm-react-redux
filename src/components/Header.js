import { SendRounded, HomeRounded, AddCircleOutline, FavoriteBorderRounded, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import logo from '../assets/img/logo.png'



function Header() {
  return (
    <Container>
      <Wrapper>
        <HeaderLogo>
          <img src={logo} alt="logo" />
        </HeaderLogo>
        <SearchContainer>
          <Search/>
          <input type="search" placeholder="Buscar"/>
        </SearchContainer>
        <HeaderRight>
          <List>
            <SendRounded className='rotate' />
          </List>
          <Down>
            <List>
              <HomeRounded/>
            </List>
            <List>
              <AddCircleOutline/>
            </List>
            <List>
              <FavoriteBorderRounded/>
            </List>
            <List>
              <Avatar/>
            </List>
          </Down>
        </HeaderRight>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 54px;
  background-color: #fff;
  border-bottom: 1px solid rgba(219,219,219,1);
  position: sticky;
  top:0;
  z-index: 9999;

`;

const Wrapper = styled.div`
@media(min-width: 1024px){
  max-width: 1000px;
  margin: 0 auto;
}
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  img{
    object-fit: contain;
    width: 80%;
    margin-top: 15px;
  }
`;

const SearchContainer = styled.div`
  display:none;
  
  @media(min-width: 1024px){
    display: inline-flex;
  }

  align-items: center;
  color: rgba(219,219,219,1);
  border: 1px solid rgba(219,219,219,1);
  padding: 5px 5px;
  border-radius: 4px; 
svg{
  height: 20px;
}

  input{
    border:none;
    height:100%;
    background-color: transparent;

    :focus{
      outline:none;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items:center;
`;

const List = styled.li`
  list-style: none;
  margin: 0 16px;

  svg{
    font-size: 25px;
    cursor: pointer;
  }

  .rotate{
    transform: rotate(-45deg);
  }
`;

const Down = styled.div`
  @media(max-width: 1024px){
    position: fixed;
    bottom: 0;
    background:white;
    left: 0;
    right: 0;
    justify-content: space-between;
    border-top: 1px solid rgba(219,219,219,1);
    padding: 10px ;
  }

  display: flex;  
  align-items: center;
`;
