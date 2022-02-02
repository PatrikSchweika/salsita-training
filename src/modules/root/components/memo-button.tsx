import React, {MouseEvent} from "react";

type MemoButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const MemoButton = React.memo(
    (buttonProps : MemoButtonProps) => {
        console.log("Rendering button...");
        return (
            <button onClick={buttonProps.onClick}>{buttonProps.children}</button>
        )
    }
)