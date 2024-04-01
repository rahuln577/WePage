export default function ProductsCard({prod}) {
    return (
        <div className="min-w-[20rem] m-2 relative">
            <img src={require(`../assets/model1.jpg`)} alt="" />
            <div className='w-full absolute bottom-0 h-[100%] bg-gradient-to-t from-black text-white flex flex-col items-start justify-end p-4'>
                <h2 className='text-[1.5rem] font-semibold'>Shirts Full Sleves</h2>
                <h4 className='text-[1rem]'>Lorem ipsum dolor sit amet.</h4>
            </div>
        </div>
    )
}