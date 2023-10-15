import React from 'react'
import Logo from './logo'
import Menu from './menu'

const Sidebar = () => {
    return (
        <div className="w-[275px] min-h-screen px-2">
            <Logo />
            <Menu />
        </div>
    )
}

export default Sidebar