import { type FC } from "react"

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
                <div className="h-[40px] w-[40px]">{status}</div>
                <span className=" text-xs opacity-50 text-[#1E293B]">Заявка №{id}</span>
            </div>
            <div className="mt-5">
                <h3>{address}</h3>
                <div>
                    <span className="text-[8px] py-1 px-3 rounded-2xl bg-[#E9DBFB] text-[#9552DC]">{people}</span>
                    <span className="text-[8px] py-1 px-3 rounded-2xl bg-[#DAF4EB] text-[#23A037]">{start_at.toLocaleDateString()+ " - " + finsih_at.toLocaleDateString()}</span>
                </div>
                <p>{description}</p>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    )
}

export default RequestCard