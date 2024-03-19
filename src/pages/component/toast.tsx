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
        <div className="w-full flex relative items-center justify-center">
            <div className={`absolute bg-slate-100 ring-2 ring-blue-200 md:px-3 md:py-2 px-2 py-1 rounded-md right-4 mx-auto text-xs top-14 ease-in-out transition duration-700 ${isVisble ? "block" : "hidden"}`}>
                Welcome {session?.user?.name} 🎉
            </div>
        </div>
    )
}

export default Toast