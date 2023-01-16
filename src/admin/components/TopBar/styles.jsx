import styled from 'styled-components';

export const TopNav = styled.div`
  overflow: hidden;
  background-color: #333;
  width: 100%;
  display: flex;
  
`;


export const TopNavLink = styled.div`
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  :hover {
    background-color: #ddd;
    color: black;
  }
  .active {
    background-color: #04AA6D;
    color: white;
  }
`;