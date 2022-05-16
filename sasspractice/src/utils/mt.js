import { css } from "styled-components";

const sizes = {
  tablet: 768,
  mobile: 428,
};

export const media = Object.keys(sizes).reduce((acc, cur) => {
  // Object.keys() 객체 넣고 돌리면 key 만 모인 배열이 생성 그 배열을 reduce 배열 함수로
  // acc는 callback 함수 , cur은 현재 요소
  acc[cur] = (...args) => css`
    @media screen and (max-width: ${sizes[cur]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export const M = (size) => `calc(100vw * calc(${size}/428))`;

export const T = (size) => `calc(100vw * calc(${size}/768))`;
