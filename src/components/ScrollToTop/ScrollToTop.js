import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'
import { VscArrowUp } from 'react-icons/vsc'
import '../ScrollToTop/scrolltotop.scss'

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll()
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
    if(pageYOffset > 400){
        setVisibility(true)
    }else{
        setVisibility(false)
    }
    }, [pageYOffset])

    const handleScroll = () => window.scrollTo({ top: 0, behavior: "smooth"})

    if(!visibility) {
        return false;
    }

    return (
    <>
    <div 
    className="scroll text-center" 
    onClick={handleScroll} >
     <VscArrowUp className="icon" />     
    </div>      
    </>
    )
}

export default ScrollToTop