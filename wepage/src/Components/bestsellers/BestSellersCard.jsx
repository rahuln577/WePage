import React from 'react'


function BestSellersCard(props) {
    const img1 = props.image1;
    const img2 = props.image2;

    return (
        <div className='min-w-[16.5rem] relative flex flex-col items-start justify-center group/items '>
            <img src={img1} alt="model1 best seller" className='w-full h-full group-hover/items:hidden' />
            <img src={img2} alt="model1 best seller" className='w-full h-full hidden group-hover/items:block' />
            <div className='w-full flex flex-col items-start justify-center p-2 gap-4'>
                <div>
                    <h2 className='text-[1.2rem] font-bold '>Signode mens wear shirt</h2>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <h3 className='text-[1rem] line-through'>1800$</h3>
                    <h3 className='text-[1rem] font-bold'>1800$</h3>
                </div>
            </div>
        </div>
    )
}

export default BestSellersCard