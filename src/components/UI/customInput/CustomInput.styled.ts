import styled from 'styled-components';

export const CustomInputStyled = styled.div`
  position: relative;
  width: 100%;

  > div {
    position: relative;
    padding: 14px 16px;
    color: #d0cfcf;
    border: 1px solid #d0cfcf;
    border-radius: 4px;
    height: 54px;

    span {
      pointer-events: none;
    }

    span:nth-child(1) {
      position: absolute;
      left: 16px;
      top: 14px;
      padding: 0px 4px;
      background-color: #f8f8f8;

      transition: 0.2s left, top ease;
    }

    input {
      width: 100%;
      height: 26px;
      border: none;
      outline: none;
      background: transparent;
      color: rgba(0, 0, 0, 0.87);
      pointer-events: all;
    }
  }
`;
