import { type FC } from "react"
import Image from "next/image"
import reject from '~/assets/reject.png'
interface RequestCardProps {
    address: number,
    description: string,
    people: number,
    start_at: Date,
    finsih_at: Date,
    status: string,
    userId: string,
    tenantId: string,
    id: number
}
const RequestCard: FC<RequestCardProps> = ({
    address, description, people, start_at, 
    finsih_at, status, userId, tenantId, id
}) => {

    return (
        <div className="w-[300px] h-[320px] py-4 px-5 bg-[#FCFCFC] rounded-2xl border-[1px] border-black border-opacity-[0.08]">
            <div className="flex justify-between items-center">
                <div className="h-[40px] w-[40px]"><Image src={reject} alt={status} width={40} height={40} /></div>
                <span className=" text-xs opacity-50 text-[#1E293B]">Заявка №{id}</span>
            </div>
            <div className="mt-5">
                <h3 className="mb-3 font-bold text-[16px] leading-[22px] max-w-[170px]">{address ? "Таттинский улус, село Харбалах " : ""}</h3>
                <div className="flex gap-1">
                    <span className="text-[10px] font-bold leading-[11px] py-1 px-3 rounded-2xl bg-[#E9DBFB] text-[#9552DC]">{people} человек</span>
                    <span className="text-[10px] font-bold leading-[11px] py-1 px-3 rounded-2xl bg-[#DAF4EB] text-[#23A037]">{start_at.toLocaleDateString(undefined, {month: "numeric", day: "numeric"}) + " - " + finsih_at.toLocaleDateString(undefined, {month: "numeric", day: "numeric"})}</span>
                </div>
                <p className="mt-3 text-[#1E293B] font-medium text-xs opacity-50">{description}</p>
            </div>
            <div className="">
                <button>Отказ принят</button>
            </div>
        </div>
    )
}

export default RequestCard