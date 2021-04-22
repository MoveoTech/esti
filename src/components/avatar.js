import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StoryStateRow from "monday-ui-react-core/dist/StoryStateRow.js";
import Tooltip from "monday-ui-react-core/dist/Tooltip.js";
import TooltipReference from "monday-ui-react-core/dist/TooltipReference.js";

export const Avatar = () => {

    return (<div>
        <StoryStateRow centerize>
            <div
                style={{
                    margin: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 1 auto"
                }}
            >
                <Tooltip
                    moveBy={{ main: 10, secondary: 0 }}
                    theme={select(
                        "Theme",
                        {
                            Dark: "dark",
                            Success: "success",
                            Error: "error",
                            Share: "share",
                            Private: "private",
                            Surface: "surface"
                        },
                        "dark"
                    )}
                    position={select("Tooltip Position", { Top: "center", Bottom: "bottom", Right: "right", Left: "left" }, "top")}
                    hideDelay={number("Hide Delay", 0)}
                    showDelay={number("Show Delay", 300)}
                    disableDialogSlide={true}
                    withoutDialog={boolean("Without Dialog", false)}
                    content={`I'm a tooltip`}
                    showTrigger={["mouseenter"]}
                    hideTrigger={["mouseleave"]}
                    containerSelector="body"
                    shouldShowOnMount
                >
                    <TooltipReference />
                </Tooltip>
                <span style={{ marginLeft: "8px", color: "var(--primary-text-color)" }}>Hover on me!</span>
            </div>
        </StoryStateRow>
    </div>
    );
}