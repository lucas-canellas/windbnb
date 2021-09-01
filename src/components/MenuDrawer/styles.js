import styled from "styled-components";


export const Content = styled.div`
  margin: 5.8rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  .city,
  .guest,
  .button {
    background-color: #fff;
    height: 55px;
  }

  .city,
  .guest {
    display: flex;
    padding: 0.5rem 1.5rem;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    border-radius: 16px;
  }

  #location,
  #guests {
    font-style: normal;
    font-weight: 800;
    font-size: 9px;
    line-height: 11px;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: .3rem;

  }

  #location-name, #guest-name {

  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 127px;
    height: 55px;
    background: #eb5757;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
  }
`;
