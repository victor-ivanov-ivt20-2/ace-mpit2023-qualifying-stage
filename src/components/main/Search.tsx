import SearchStar from "~/assets/svg/SearchStarComponent"
import { PrimaryButton } from "../ui/buttons"
import { DateInput, Dropdown } from "../ui/inputs"

const Search = () => {
    return (
        <div className="mt-[150px] flex flex-col justify-center items-center gap-[48px] pb-[216px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="relative font-black text-[64px] leading-[87px] text-dark flex items-center gap-2">
                    Путешествовать с нами
                    <span className="flex mt-[6px] text-white z-20 justify-center items-end bg-green w-[237px] h-[76px] rounded-[50px]">легче</span>
                    <div className="absolute -right-[30px] z-10 -top-[24px]">
                        <SearchStar />
                    </div>
                </h1>
                <span className="text-dark text-[32px] leading-[44px] font-bold">Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
            </div>
            <div className="flex flex-col gap-2.5 mt-[34px]">
                <div className="flex gap-[3px] items-start">
                    <Dropdown classs="rounded-l-xl" data={["Тикси", "Не тикси"]} placeholder="Куда"></Dropdown>
                    <DateInput placeholder="Когда"></DateInput>
                    <DateInput placeholder="Обратно"></DateInput>
                    <Dropdown classs="rounded-r-xl" data={["1 человек", "2 - 3 человек", "4 - 5 человек", " 6 - 10 человек"]} placeholder="Гости"></Dropdown>
                    <PrimaryButton onClick={() => console.log("s")}>Оставить заявку</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default Search