import React from 'react'


function BestSellersCard(props) {
    const img1 = props.image1;
    const img2 = props.image2;

    return (
        <div className='min-w-[22rem] m-1 relative flex flex-col items-start justify-center group/items p-2'>
            <img src={img1} alt="model1 best seller" className='group-hover/items:hidden' />
            <img src={img2} alt="model1 best seller" className='hidden group-hover/items:block' />
            <div className='flex flex-col items-start justify-center p-2 gap-4 bg-white w-[100%]' >
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