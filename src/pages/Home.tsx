import hero1 from '../assets/hero1.jpg'
export default function Home() {

    return (
        <>
            <img id="heroImg" src={hero1} alt="" className='absolute -z-10 w-full h-screen' />
            <div className="flex flex-col items-center justify-center w-full h-screen z-10 text-white">
                <h1 className="mb-3 font-bold text-6xl">
                    Welcome to Vital Credits
                </h1>
                <p>We provide support in case of emergency blood need.</p>
            </div>
        </>
    )
}