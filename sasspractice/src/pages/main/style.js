import styled from "styled-components";

import { media, T, M } from "../../utils/mt";

export const Container = styled.div`
  width: 700px;
  background: violet;
  margin: 100px auto;

  ${media.tablet`
    width: ${T(500)};
    background: green;
  `}

  ${media.mobile`
    width: ${M`300`};
    background: tan;
  `}
`;

export const Ul = styled.ul`
  width: 100%;
`;

export const Li = styled.li`
  width: 100%;
  border-bottom: 1px solid #333;
`;

export const DIV = styled.div`
  padding: 10px;
`;
