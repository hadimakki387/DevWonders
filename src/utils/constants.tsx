import { keyframes } from "@emotion/react";

export const customAnimation = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, -25%, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;
export const shortCustomAnimation = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, -15%, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;