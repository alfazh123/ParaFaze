export default function LoadOutput () {
    return (
        <div className="flex gap-2">
            <p className="text-gray-600 font-semibold">Loading...</p>
            <div className="w-6 h-6 border-t-2 border-b-2 border-gray-600 rounded-full animate-spin"></div>
        </div>
    )
}
