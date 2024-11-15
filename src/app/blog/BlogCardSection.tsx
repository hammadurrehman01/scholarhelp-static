import Image from 'next/image'
import React from 'react'

function BlogCardSection() {
    return (
        <div className='mt-5 max-w-screen-xl mx-auto'>
            <div className='grid lg:grid-cols-3 grid-cols-1 px-2 gap-2'>
                <div className='col-span-2 bg-red-500 '>
                    <div className='grid grid-cols-2 gap-2 p-2'>
                        <div className='rounded-lg border-2 border-black overflow-hidden'>
                            <Image className='mx-auto rounded-lg' src={'/blog-post-img/blog-post-1.webp'} width={400} height={300} alt='blog' />
                        </div>
                        <div className='rounded-lg border-2 border-black h-24'></div>
                    </div>
                </div>
                <div className='bg-blue-800 h-10'></div>
            </div>
        </div>
    )
}

export default BlogCardSection