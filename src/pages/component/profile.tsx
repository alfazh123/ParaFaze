import { useState, useEffect, useRef } from "react";
import { IoPersonCircleOutline, IoLogOutOutline } from "react-icons/io5";
import { signOut } from "next-auth/react";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOutsideClick = (e: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(e.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div ref={dropdownRef}>
            <button title="profile" type="button" onClick={handleDropdownClick}>
                <IoPersonCircleOutline className="text-5xl text-white rounded-full" />
            </button>

            {isOpen && (
                <div className="origin-top-right right-40 absolute bg-white ring-3 ring-slate-300 rounded-md w-48">
                    <div
                        className="py-2"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <p
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                            role="menuitem"
                            onClick={() => signOut()}
                        >
                            Logout{" "}
                            <IoLogOutOutline className="inline text-lg" />
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
