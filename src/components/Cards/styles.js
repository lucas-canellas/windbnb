import styled from 'styled-components';

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
  

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 1199.98px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 575.98px) {
        grid-template-columns: 1fr;
     }

`