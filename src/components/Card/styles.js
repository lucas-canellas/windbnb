import styled from "styled-components";

export const Content = styled.div`
  img {
    border-radius: 1.5rem;
  }

  .card-info {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  #place-house {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    button {
      background-color: #fff;
      border: 1px solid #4f4f4f;
      border-radius: 12px;
      padding: 7px 10px;
      color: #4f4f4f;
      font-weight: 700;
      font-size: 0.75rem;
    }

    & > p {
      color: #828282;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }
  }

  #rate {
    display: flex;
    align-items: center;
  }

  #apartment-feature {
    padding-top: 1rem;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
  }
`;
