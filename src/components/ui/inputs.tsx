import IMask from "imask";
import { type FC, useState, type SetStateAction, useRef, useEffect } from "react";
import { ChevronDown } from "~/assets/svg/Chevron";
import type { Input } from "~/interfaces/props";

export const PrimaryInput: FC<Input> = ({ value, onChange, type = "text", placeholder = "" }) => {

    return (
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
    )
}

export const DateInput: FC<{ placeholder: string }> = ({ placeholder }) => {
    return (
        <div className="flex w-[260px]  flex-col relative">
            <div className={"bg-gray items-center cursor-pointer flex h-[76px] px-[24px] justify-between w-full"}>
                <span className="absolute -top-[34px] left-0 font-medium text-xl leading-6 text-grayer">{placeholder}</span>
                <input className=" bg-slate-100 outline-none w-full" type="date" name="" id="" 
                min={(new Date()).toISOString()} max="18.03.2024" />
                <div className=" bg-slate-100 absolute right-4">
                    <ChevronDown />
                </div>
            </div>
        </div>
    )
}

interface Dropdown {
    data: string[]
    classs?: string,
    placeholder: string
}

export const Dropdown: FC<Dropdown> = ({ data, classs = "", placeholder }) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const toggleDropdown = () => setOpen(!isOpen)
    const h = (item: string | null) => {
        if (item === selectedItem) {
            setSelectedItem(null)
        } setSelectedItem(item)
        setOpen(false)
    }
    return (
        <div className="flex w-[260px]  flex-col relative">
            <div className={classs + " bg-gray items-center cursor-pointer flex h-[76px] px-[24px] justify-between w-full"} onClick={toggleDropdown}>
                <span>{selectedItem ? <><span className="absolute -top-[34px] left-0 font-medium text-xl leading-6 text-grayer">{placeholder}</span>
                    <span>{items.find(item => item == selectedItem)}</span>
                </> : <span>{placeholder}</span>}</span>

                <ChevronDown />
            </div>
            <div className={isOpen ? "block h-[260px] absolute top-[76px] w-[260px] overflow-auto cursor-pointer" : "hidden"}>
                {items.map((item) => {
                    return (
                        <div className="my-0.5 px-6 py-2 bg-slate-100 h-12" key={item} onClick={() => h(item)}>
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}