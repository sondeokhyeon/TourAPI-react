import { css } from "styled-components";

const Theme = {
  mobile: (...style) => css`
    @media only screen and (min-width: 300px) and (max-width: 800px) {
      ${css(style)}
    }
  `,
};

export default Theme;
