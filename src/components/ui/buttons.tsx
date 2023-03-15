import { type FC } from "react";
import type { Button } from "~/interfaces/props";


export const PrimaryButton: FC<Button> = ({children, onClick}) => {
    
    return (
        <button className="bg-blue text-xl text-white rounded-2xl w-[229px] h-[76px] ml-3" onClick={onClick}>
            {children}
        </button>
    )
}
interface HeaderButton extends Button {
    height?: string,
    width?: string,
    color?: string
}
export const HeaderButton: FC<HeaderButton> = ({children, onClick, height="40px", width="100px", color = "white"}) => {
    const style = {
        height: height,
        width: width,
        backgroundColor: color
    }
    return (
        <button style={style} className={color === "white" ?  "border-blue border-2 rounded-[24px] text-center text-blue font-bold" : "rounded-[24px] text-center text-blue font-bold" } onClick={onClick}>
            {children}
        </button>
    )
}