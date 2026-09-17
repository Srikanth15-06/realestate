import React from 'react'

const BlogBg = () => {
    return (
        <div>
            <div className="relative h-[35em] bg-cover bg-center bg-[url('https://photos.zillowstatic.com/fp/9b01dba2b4411b45784506a291565969-cc_ft_1536.jpg')]">
                <div className="h-[35em] absolute inset-0 bg-[linear-gradient(to_bottom,transparent_1%,transparent_55%,white_100%)]">
                    <div className="h-full flex justify-center text-white items-center text-[3em] font-bold">ALL OURS Blogs</div>
                </div>
            </div>
        </div>
    )
}

export default BlogBg
