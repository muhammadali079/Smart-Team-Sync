import { Separator } from "@/components/ui/separator"
import { Info } from "./_components/info"
import { BoardList } from "./_components/board-list"
import { Suspense } from "react"

const OrganzationIdPage = async () => {

    return (
        <div className='w-full mb-20'>
            <Info isPro={true} />
            <Separator className="my-4" />
            <div className="px-2 md:px-4">
                <Suspense fallback={<BoardList.Skeleton />}>
                    <BoardList />
                </Suspense>
            </div>
        </div>
    )
}

export default OrganzationIdPage
