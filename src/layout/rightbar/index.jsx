import React from 'react'

const Rightbar = () => {
    return (
        <aside>
            <div className="w-[350px] min-h-screen bg-black mt-1">
                <label className='flex items-center h-[44px] text-[#71767A] focus-within:text-[#1C9BEF] bg-[#202327] rounded-3xl border border-transparent focus-within:border-[#1C9BEF]'>
                    <svg viewBox="0 0 24 24" className="absolute w-9 pl-4">
                        <path
                            fill="currentColor"
                            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z">
                        </path>
                    </svg>
                    <input
                        className="p-2w w-full bg-transparent text-white pl-14  outline-none"
                        placeholder="Ara"
                        type="text"
                    />
                </label>
                <div className="px-4 py-2.5 mt-4 w-full h-[166px] bg-[#16181C] rounded-2xl">
                    <h1 className="font-bold text-xl">
                        Premium'a Abone Ol
                    </h1>
                    <p className="my-2 font-bold text-[15px]">
                        Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.
                    </p>
                    <button className="flex items-center p-4 h-9 bg-[#1C9BEF] rounded-full text-white font-bold hover:opacity-90">
                        Abone ol
                    </button>
                </div>
                <div className=" mt-4 w-full bg-[#16181C] rounded-2xl ">
                    <h1 className="px-4 py-2.5 font-bold text-xl">
                        İlgini çekebilecek gündemler
                    </h1>
                    <div className=" hover:bg-[#202327] px-4 py-2.5">
                        <a href="/">
                            <h1 className="text-[#71767A] text-sm">Türkiye tarihinde gündemde</h1>
                            <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
                            <h1 className="text-[#71767A] text-sm">16,7 B posts</h1>
                        </a>
                    </div>
                    <div className=" hover:bg-[#202327] px-4 py-2.5">
                        <a href="/">
                            <h1 className="text-[#71767A] text-sm">Türkiye tarihinde gündemde</h1>
                            <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
                            <h1 className="text-[#71767A] text-sm">43,1 B posts</h1>
                        </a>
                    </div>
                    <div className=" hover:bg-[#202327] px-4 py-2.5">
                        <a href="/">
                            <h1 className="text-[#71767A] text-sm">Türkiye tarihinde gündemde</h1>
                            <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
                            <h1 className="text-[#71767A] text-sm">23,6 B posts</h1>
                        </a>
                    </div>
                    <div className=" hover:bg-[#202327] px-4 py-2.5">
                        <a href="/">
                            <h1 className="text-[#71767A] text-sm">Türkiye tarihinde gündemde</h1>
                            <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
                            <h1 className="text-[#71767A] text-sm">14,9 B posts</h1>
                        </a>
                    </div>
                    <div className="hover:bg-[#202327] hover:rounded-b-2xl px-4 py-2.5">
                        <a href="/">
                            <h1 className="text-[#217CBD]">Daha fazla göster</h1>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Rightbar