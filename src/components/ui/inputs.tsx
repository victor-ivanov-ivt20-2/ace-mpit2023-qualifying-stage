import { type FC } from "react";
import type { Input } from "~/interfaces/props";


export const PrimaryInput: FC<Input> = ({value, onChange, type="text", placeholder=""}) => {
    
    return (
        <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
    )
}