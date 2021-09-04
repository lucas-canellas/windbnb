import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  padding: 4rem 0;

  

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
  

  .teste {
    flex: 1;
  }

  .button-search-container {
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .location {
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    height: 55px;
    margin-bottom: 2rem;

    .label-location {
      padding-top: 0.5rem;
      padding-left: 1.2rem;
      font-style: normal;
      font-weight: 800;
      font-size: 9px;
      line-height: 11px;
      text-transform: uppercase;
    }

    .location-selected {
      padding-top: 0.4rem;
      padding-left: 1.2rem;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
    }

    .button-search {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 126px;
      height: 48px;
      background: rgba(235, 87, 87, 0.9);
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      color: #FFF;
    }
  }

  .counter-container {
    margin: 1.5rem;
    .peoples {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
    }

    .title {
      font-style: normal;
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 0.5rem;
    }

    .counter {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  .cities {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;
