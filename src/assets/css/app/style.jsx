import styled from 'styled-components';

export const Container = styled.main`
  flex-grow: 1;
  display: flex;
  padding: 20px;
  gap: 20px;
  justify-content: center;
  .box-primary {
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .box-selects {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
    }

    .box-details {
      display: flex;
      flex-direction: column;
      gap: 20px;

      height: fit-content;
      width: 100%;
      max-width: 320px;
      div {
        display: flex;
        flex-direction: column;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #515151;
      }
    }
  }

  .box-maps {
    display: flex;
    justify-content: center;
    gap: 20px;
    svg {
      width: 100%;
      height: min-content;
      filter: drop-shadow(0px 0px 1px black);
    }

    .box-map-brazil,
    .box-map-city {
      width: fit-content;
      height: fit-content;
      position: relative;
      padding: 36px;
      border-radius: 8px;
      border: 1px solid #515151;
      max-width: 520px;
      h2 {
        text-transform: uppercase;
      }
    }

    .box-map-brazil {
      position: relative;
      background-color: #999999;
      h2 {
        position: absolute;
        top: 8px;
        left: 12px;
      }
    }

    .box-map-city {
      background-color: #999999;
      h2 {
        position: absolute;
        top: 8px;
        left: 12px;
      }
    }

    .map-brazil {
      fill: #3da558;
      ${({ selectedState }) => `#UF-${selectedState}`} {
        fill: #396745;
      }
    }

    .map-city {
      fill: #3da558;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 701px) and (max-width: 1080px) {
    .box-maps {
      flex-direction: column;
      justify-content: start;
    }
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    .box-primary {
      max-width: 520px;
      .box-details {
        max-width: 520px;
      }
    }
    .box-maps {
      flex-grow: 1;
      flex-direction: column;
      justify-content: start;
    }
  }
`;
