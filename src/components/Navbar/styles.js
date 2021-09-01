import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

  .guests {
    background-color: #FFF;
    padding: 1rem;
    width: 110px;
    height: 53px;
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    color: #BDBDBD;
  }

  .name-city {
    color: #BDBDBD;
  }

  .name-city,
  .icon {
    padding: 0 1rem;
    background-color: #FFF;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;
