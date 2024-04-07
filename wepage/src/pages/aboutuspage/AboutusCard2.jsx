export default function AboutusCard2() {
    return (
        <div className=" w-full my-4 h-[40rem] relative ">
            <img src={require('../../assets/model2.jpg')} alt="banner" className='w-full relative h-full object-cover' />
            <div className=' absolute top-0 w-[100%] h-full bg-gradient-to-tl from-black backdrop-blur-sm'>
                <div className='absolute left-0 ml-8 lg:w-[50%] w-[60%]  h-[100%] flex flex-col items-start lg:justify-center justify-end p-4 '>
                    <span className='lg:text-[2rem] text-[1.5rem] text-white ' >Lorem Lorem, ipsum dolor..</span>
                    <span className='lg:text-[2rem] text-[1.5rem] text-white' >ipsum Lorem, ipsum. Lorem, ipsum..</span>
                    <span className='lg:text-[2rem] text-[1.5rem] text-white' >lorrrrr.</span>
                </div>
            </div>
        </div>
    )
}