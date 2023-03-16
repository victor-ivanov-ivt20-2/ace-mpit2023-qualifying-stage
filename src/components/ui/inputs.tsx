import IMask from "imask";
import { type FC, useState, type SetStateAction, useRef, useEffect } from "react";
import { ChevronDown } from "~/assets/svg/Chevron";
import type { Input } from "~/interfaces/props";

export const PrimaryInput: FC<Input> = ({ value, onChange, type = "text", placeholder = "" }) => {

    return (
        <input className="h-[40px] w-[300px] p-5 rounded-xl outline-none border-collapse" type={type} value={value} onChange={onChange} placeholder={placeholder} />
    )
}

export const DateInput: FC<{ placeholder: string, getter: (gett: string | null) => void }> = ({ placeholder, getter }) => {
    const [date, setDate] = useState<string>(new Date().toLocaleString())
    useEffect(() => {
        getter(date)
    }, [date])
    return (
        <div className="flex w-[260px]  flex-col relative">
            <div className={"bg-gray items-center cursor-pointer flex h-[76px] px-[24px] justify-between w-full"}>
                <span className="absolute -top-[34px] left-0 font-medium text-lg leading-6 text-grayer">{placeholder}</span>
                <input value={date} onChange={e => setDate(e.target.value)}  className=" bg-slate-100 outline-none text-lg w-full" type="date" name="" id="" />
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
    placeholder: string,
    getter: (gett: string | null) => void
}

export const Dropdown: FC<Dropdown> = ({ data, classs = "", placeholder, getter }) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const toggleDropdown = () => setOpen(!isOpen)
    const h = (item: string | null) => {
        getter(item)
        if (item === selectedItem) {
            setSelectedItem(null)
        } setSelectedItem(item)
        setOpen(false)
    }
    return (
        <div className="flex w-[260px]  flex-col relative">
            <div className={classs + " bg-gray items-center cursor-pointer flex h-[76px] px-[24px] justify-between w-full"} onClick={toggleDropdown}>
                <span>{selectedItem ? <><span className="absolute -top-[34px] left-0 font-medium text-lg leading-6 text-grayer">{placeholder}</span>
                    <span className="text-lg">{items.find(item => item == selectedItem)}</span>
                </> : <span className="text-lg">{placeholder}</span>}</span>

                <ChevronDown />
            </div>
            <div className={isOpen ? "block text-lg h-[260px] absolute top-[76px] w-[260px] overflow-auto cursor-pointer" : "hidden"}>
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