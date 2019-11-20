import styled from 'styled-components';


export const Container = styled.div`
  align-items: center;
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

export const Box = styled.div`
  display: flex;
  margin-top: 40px;
  width: 80%;
  height: 280px;
  background: #ebebeb; 
`;

export const Side = styled.div`
   img {
     width: 200px;
    height: 280px;
  }
`;

export const Bar = styled.div`
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

export const Date = styled.div`
    font-size: 20px;
    color: #6d6a6a;
    font-weight: bold;
    margin-left: 120px;
    margin-top: 5px;
`;

export const Text = styled.div`
    font-size: 20px;
    color: #000000;
    margin: 20px;
`;

export const Details = styled.div`
    width: 100%;
    height: 220px;
`;

export const Button = styled.div`
  margin-left: 10px;

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

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 30px;
      margin-left: 20px;
    }
`;