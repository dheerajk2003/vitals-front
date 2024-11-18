import { useEffect } from 'react';
import hero1 from '../assets/HandUP.png'
import hero2 from '../assets/HandDown.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export default function Home() {

 //   const [mySvg , setMySvg] =  useState("");

    useEffect(() => {
        // getImg();
    },[])

    useGSAP(() => {
        gsap.from("#heroImg2",{
            y:180,
            opacity:0,
            scale: .9,
            duration: 1
        })
        gsap.from("#heroImg1",{
            y: -180,
            opacity:0,
            scale: .9,
            duration: 1
        })

        gsap.from(".slideText",{
            x: 100,
            opacity:0,
            scale: .4,
            duration: 1
        })
    })

    // async function getImg(){
    //     const responce = await fetch(hero1);
    //     setMySvg(await responce.text());
    // }

    return (
        <div className='w-screen h-screen flex flex-col items-end justify-center overflow-hidden bg-red-50'>
            {/* <div className='absolute w-full' dangerouslySetInnerHTML={{ __html: mySvg }}></div> */}
            <img id="heroImg2" src={hero2} alt="" className='absolute top-20 left-0 h-5/6' />
            <img id="heroImg1" src={hero1} alt="" className='absolute top-20 left-0 h-5/6' />
            <div className="flex flex-col items-center justify-center z-10 pr-24 text-red-600">
                <h1 className="slideText mb-3 font-extrabold text-8xl ">
                    Vital Credits
                </h1>
                {/* <p>We provide support in case of emergency blood need.</p> */}
            </div>
        </div>
    )
}