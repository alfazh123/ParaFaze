import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"


const Toast = () => {
    const { data: session } = useSession()
    const [isVisble, setIsVisible] = useState(true)

    useEffect(() => {
        const time = setTimeout(() => {
            setIsVisible(false)
        }, 3000);

        return () => {
            clearTimeout(time)
        }
    }, [3000])

    return (
        <div className={`absolute bg-slate-100 ring-2 ring-slate-300 px-3 py-2 rounded-md  xl:right-10 right-4 mr-4 md:w-60 w-48 text-xs flex-wrap top-20 ${isVisble ? "block" : "hidden"}`}>
            Welcome {session?.user?.name} 🎉
        </div>
    )
}

export default Toast