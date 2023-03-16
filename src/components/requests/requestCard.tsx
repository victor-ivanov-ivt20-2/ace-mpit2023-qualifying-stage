import { useEffect, type FC } from "react"
import Image from "next/image"
import reject from '~/assets/reject.png'
import boost from '~/assets/boost.png'
interface RequestCardProps {
    address: string,
    description: string,
    people: string,
    start_at: Date,
    finsih_at: Date,
    status: string,
    userId: string,
    tenantId: string,
    id: number
}
enum Status {
    confirmed,
    waiting,
    processing,
    stopped,
    declined,
}
const RequestCard: FC<RequestCardProps> = ({
    address, description, people, start_at,
    finsih_at, status, userId, tenantId, id
}) => {


    return (
        <div className="flex flex-col justify-space-between w-[300px] h-[320px] py-4 px-5 bg-[#FCFCFC] rounded-2xl border-[1px] border-black border-opacity-[0.08]">
            <div>
                <div className="flex justify-between items-center">
                    <div className="h-[40px] w-[40px]"><Image src={boost} alt={status} width={40} height={40} /></div>
                    <span className=" text-xs opacity-50 text-[#1E293B]">Заявка №{id}</span>
                </div>
                <div className="mt-5">
                    <h1 className=" font-extrabold text-[16px] leading-6">Цена неопределена</h1>
                    <h3 className="mb-3 font-bold text-[12px] leading-[16px] ">{address ? address : ""}</h3>
                    <div className="flex gap-1">
                        <span className="text-[10px] font-bold leading-[11px] py-1 px-3 rounded-2xl bg-[#E9DBFB] text-[#9552DC]">{people}</span>
                        <span className="text-[10px] font-bold leading-[11px] py-1 px-3 rounded-2xl bg-[#DAF4EB] text-[#23A037]">{start_at.toLocaleDateString(undefined, { month: "numeric", day: "numeric" }) + " - " + finsih_at.toLocaleDateString(undefined, { month: "numeric", day: "numeric" })}</span>
                    </div>
                    <p className="mt-3 text-[#1E293B] font-medium text-xs opacity-50">{description}</p>
                </div>
            </div>
            <div className="h-full flex justify-center items-end">
                <button className="rounded-[8px] w-full h-11 bg-indigo-100 text-[#317DFC] font-medium text-base leading-[24px]">В обработке</button>
            </div>
        </div>
    )
}

export default RequestCard