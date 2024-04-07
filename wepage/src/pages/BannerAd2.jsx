export default function BannerAd2() {
    return (
        <div className=" w-full my-4 h-[20rem] relative ">
            <img src={require('../assets/banner1 (2).jpg')} alt="banner" className='w-full relative h-full object-cover' />
            <div className=' absolute top-0 w-[100%] h-full bg-gradient-to-tr from-black backdrop-blur-sm'>
                <div className='absolute right-0 mr-8 w-[50%]  h-[100%] flex flex-col items-end justify-center '>
                    <span className='lg:text-[2rem] text-[1.5rem] text-white ' >Lorem Lorem, ipsum dolor..</span>
                    <span className='lg:text-[2rem] text-[1.5rem] text-white' >ipsum Lorem, ipsum. Lorem, ipsum..</span>
                    <span className='lg:text-[2rem] text-[1.5rem] text-white' >lorrrrr.</span>
                </div>
            </div>
        </div>
    )
}