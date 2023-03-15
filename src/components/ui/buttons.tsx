import { type FC } from "react";
import type { Button } from "~/interfaces/props";


export const PrimaryButton: FC<Button> = ({children, onClick}) => {
    
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}