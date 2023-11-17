function Tooltip() {
    const portalRef = document.getElementById("portal") as HTMLElement;
    const { isTooltipVisible, top, left } = useTooltip();
  
    return createPortal(
      isTooltipVisible ? (
        <StyledTooltipContainer top={top} left={left}>
          <div className="content"></div>
        </StyledTooltipContainer>
      ) : null,
      portalRef
    );
  }