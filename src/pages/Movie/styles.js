import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 300px;
    background: #f2f2f2;
`;

export const Title = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 35px;
  background: #e6e6e6; 

  span {
    margin-top: 15px;
    float: left;
    margin-left: 50px;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    color: #1b6193;
  }

  strong {
    float: right;
    font-size: 20px;
    color: #6d6a6a;
    font-weight: bold;
    margin-right: 15px;
    margin-top: 25px;
  }
`;

export const Info = styled.div`
    
  
`;

export const Sinopse = styled.div`
  max-width: 70%;
  float: left;
  margin-left: 50px;

  span {
    margin-top: 20px;
    font-size: 20px;
    color: #1b6193;
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  strong {
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin: 5px 30px 20px 0; 
    color: #6d6a6a;
  }

  p {
    display: flex;
    align-items: center; 
    justify-content: center;
    color: #6d6a6a;
  }

    ul {
      display: flex;
      list-style: none;
      margin: 0 0 35px 0;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: -15px 30px 0 0;
    }

    hr {
      margin: 10px 0 15px 0;
    }
`;

export const Box = styled.div`
    width: 100%;
    height: 300px;
    background: #f2f2f2;
`;

export const Side = styled.div`
    width: 100%;
    height: 350px;
    background: #f2f2f2;

    img {
      width: 20%;
      height: 350px;
      float: right;
    }
`;

export const Button = styled.div`
  button {
    padding: 5px 12px;
    border-radius: 25px;
    border: 21;
    border-color:#1b6193; 
    color: #1b6193;
    font-family: Arial, Helvetica, sans-serif;
    background: white;
    margin-left: 6px;
  }
`;

export const Bar = styled.div`
   
`;