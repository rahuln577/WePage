export default function AboutusCard() {
    return (
        <div className=" w-full my-4 h-[40rem] relative ">
            <img src={require('../../assets/model1.jpg')} alt="banner" className='w-full relative h-full object-cover' />
            <div className=' absolute top-0 w-[100%] h-full bg-gradient-to-tr from-black backdrop-blur-sm'>
                <div className='absolute right-0 mr-8 lg:w-[50%] w-[60%]  h-[100%] flex flex-col items-end lg:justify-center justify-end p-4'>
                    <span className='lg:text-[2rem] text-[1.5rem] w-full text-right text-white ' >Lorem Lorem, ipsum dolor..</span>
                    <span className='lg:text-[2rem] text-[1.5rem] w-full text-right text-white' >ipsum Lorem, ipsum. Lorem, ipsum..</span>
                    <span className='lg:text-[2rem] text-[1.5rem] w-full text-right text-white' >lorrrrr.</span>
                </div>
            </div>
        </div>
    )
}