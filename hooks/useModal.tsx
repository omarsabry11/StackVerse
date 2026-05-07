"use client"
import { useEffect, useState } from 'react'

export default function useModal() {

    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        function handleEsc(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        }
        
        if (isOpen) {
            window.addEventListener("keydown", handleEsc)
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }

        return () => {
            window.removeEventListener("keydown", handleEsc)
            document.body.style.overflow = "auto";
        }


    }, [isOpen])


    return { isOpen, setIsOpen }

}
