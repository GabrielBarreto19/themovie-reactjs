import styled from 'styled-components';


export const Page = styled.div`
  align-items: center;
`;

export const List = styled.ul`
    display: flex;
    background: #ebebeb;
    margin: 2% 10% 2% 10%;
    height: 280px;
`;

export const Li = styled.li`
   list-style: none;
   width: 100%;

   img {
     width: 200px;
     height: 275px;
     float: left;
  }

  div {
    width: 100%;
    height: 80px;
    background: #1b6193;
  }

  span {
    font-size: 20px;
    color: #6d6a6a;
    font-weight: bold;
    margin-left: 120px;
    margin-top: 5px;
  }

  p {
    font-size: 20px;
    color: #6d6a6a;
    font-weight: bold;
  }

  span {
    font-size: 20px;
    color: #6d6a6a;
    margin: 20px;
  }

  strong {
    margin-left: 110px;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    color: #6de9e5;
  }

  button {
    padding: 6px;
    border-radius: 25px;
    border: 21;
    border-color:#1b6193; 
    color: #1b6193;
    font-family: Arial, Helvetica, sans-serif;
    background: white;
    margin-left: 6px;
  }

`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  input {
    border-radius: 30px;
    width: 80%;
    height: 45px;
    background: #ebebeb;
    border: 0;
    padding: 30px
  }

  input::placeholder{
    color: #a1bdce;
    font-size: 16px;
  }
`;

export const Title = styled.div`
    width: 100%;
    height: 60px;
    background: #1b6193;
    
    strong {
      margin-left: 110px;
      font-size: 30px;
      font-family: Arial, Helvetica, sans-serif;
      color: #6de9e5;
    }
`;

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 30px;
      margin: 10px;
    }
`;

