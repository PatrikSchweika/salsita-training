import React from "react";

type MemoButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const MemoButton = React.memo(
    (buttonProps : MemoButtonProps) => {
        console.log("Rendering button...");
        return (
            <button {...buttonProps} />
        )
    }
)