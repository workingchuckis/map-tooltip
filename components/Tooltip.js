import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

function Tooltip() {
  const portalRef = document.getElementById("portal") as HTMLElement;

  return createPortal(
    <StyledTooltipContainer>
      <div className="content"></div>
    </StyledTooltipContainer>,
    portalRef
  );
}

interface StyledTooltipContainerProps {
  readonly top?: number;
  readonly left?: number;
}

const StyledTooltipContainer = styled.div<StyledTooltipContainerProps>`
  position: absolute;
  top: ${({ top }) => top || 0}px;
  left: ${({ left }) => left || 0}px;
  width: 100px;
  height: 50px;
  background: #282727;
  .content {
    position: relative;
    width: 100%;
    height: 100%;

    &::after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid #282727;
      bottom: -8px;
      left: 0;
    }
  }
`;

export default Tooltip;