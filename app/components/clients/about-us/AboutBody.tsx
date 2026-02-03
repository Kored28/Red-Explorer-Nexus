"use client";

import Image from 'next/image';

import AboutHistory from "@/public/images/about-history-img.jpg";
import Marshall from "@/public/images/Marshall.jpg";
import Tesla from "@/public/images/Tesla.jpg";
import Choco from "@/public/images/Chocolately.jpg";
import Hugo from "@/public/images/Hugo.jpg";


const AboutBody = () => {
  return (
    <div
        className={`
            flex flex-col items-center gap-10 lg:gap-23 sm:gap-15
            pt-43 pb-55.25
        `}
    >
        {/* About Us */}
        <div 
            className='flex flex-col max-w-360 gap-26.25'
        >
            <div
                className={`
                    flex flex-row items-center gap-18 w-full pl-7.5 pr-17.5
                `}
            >
                <h2
                    className={`
                        font-roboto text-[40px] text-[#4E4B66] w-[55%]
                        pl-10 pr-14 py-8.5 bg-dotted
                    `}
                >
                    Hey, We are the Red Explorers <br/>
                    Brief History <span className='text-[#FFA500] underline'>About Us.</span> 
                </h2>

                <p
                    className={`
                        w-[50%] font-lato font-bold text-lg leading-10 text-justify
                    `}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. 
                    Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. 
                    Nec tortor ut cursus ornare nibh vivamus. 
                    Quam elementum at velit viverra mattis. <br/>
                    Eleifend enim, praesent eu, leo semper quis et. 
                    Nisl neque malesuada arcu, felis, vitae rhoncus morbi volutpat ante. 
                    Adipiscing mauris 
                </p>
            </div>

            <div
                className='flex flex-col gap-13.5 px-5 lg:px-17'
            >
                <Image 
                    src={AboutHistory}
                    alt='Red Explorer Group Photo'
                    className='w-full h-118 object-cover'
                />

                <div className='flex flex-col gap-5'>
                    <p
                        className={`
                            font-lato font-bold text-black text-lg leading-10
                        `}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Facilisis ut natoque imperdiet faucibus. 
                        Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                        Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus. 
                        Nisl quam massa sapien tempor semper. Hac tempus pellentesque nibh duis ultrices. 
                        Senectus sagittis id ullamcorper mi eget pellentesque egestas. In ut sollicitudin ut orci volutpat egestas fermentum. 
                        Sit turpis diam risus leo bibendum neque, quis in vitae.
                    </p>
                    <p
                        className={`
                            font-lato font-bold text-black text-lg leading-10
                        `}
                    >
                        Praesent enim augue tellus vitae placerat purus pretium at massa. 
                        Aliquet a malesuada eget posuere. Pellentesque euismod nulla praesent rhoncus.
                    </p>
                </div>
            </div>


            <div
                className='flex flex-col gap-15 px-5 lg:px-17'
            >
                {/* Row 1 */}
                <div
                    className='flex flex-row gap-12 w-full'
                >
                    {/* Our Story */}
                    <div
                        className='flex flex-col gap-9.5 w-[50%]'
                    >
                        <h3
                            className='font-lato font-normal text-[36px] leading-10'
                        >
                            Our Story
                        </h3>

                        <div
                            className='flex flex-col gap-5'
                        >
                            <p
                                className={`
                                    font-lato font-bold text-black text-lg leading-10 text-justify
                                `}  
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. 
                            </p>
                            <p
                                className={`
                                    font-lato font-bold text-black text-lg leading-10 text-justify
                                `}  
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                                Rhoncus lectus hendrerit pharetra vitae magna. 
                                Pharetra, tortor pharetra vitae rhoncus.
                            </p>
                            <p
                                className={`
                                    font-lato font-bold text-black text-lg leading-10 text-justify
                                `}  
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                                Rhoncus lectus hendrerit pharetra vitae magna. 
                                Pharetra, tortor pharetra vitae rhoncus.
                            </p>
                            <p
                                className={`
                                    font-lato font-bold text-black text-lg leading-10 text-justify
                                `}  
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. 
                            </p>
                        </div>
                    </div>

                    {/* Who Are Red Explorers*/}
                    <div
                        className='flex flex-col gap-9.5 w-[50%]'
                    >
                        <h3
                            className='font-lato font-normal text-[36px] leading-10'
                        >
                            Who Are Red Explorers
                        </h3>

                        <div
                            className='flex flex-col gap-5'
                        >
                            <p
                                className={`
                                    font-lato font-bold text-black text-lg leading-10 text-justify
                                `}  
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. 
                            </p>
                            <p
                                className={`
                                    font-lato font-bold text-black text-lg leading-10 text-justify
                                `}  
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                                Rhoncus lectus hendrerit pharetra vitae magna. 
                                Pharetra, tortor pharetra vitae rhoncus.
                            </p>
                            <p
                                className={`
                                    font-lato font-bold text-black text-lg leading-10 text-justify
                                `}  
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                                Rhoncus lectus hendrerit pharetra vitae magna. 
                                Pharetra, tortor pharetra vitae rhoncus.
                            </p>
                            <p
                                className={`
                                    font-lato font-bold text-black text-lg leading-10 text-justify
                                `}  
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. 
                            </p>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div
                    className='flex flex-row gap-12 w-full'
                >
                    {/* About Our Cameraman */}
                    <div
                        className='flex flex-col gap-9.5 w-[50%]'
                    >
                        <h3
                            className='font-lato font-normal text-[36px] leading-10'
                        >
                            About Our Cameraman
                        </h3>

                        <div
                            className='flex flex-col gap-5'
                        >
                            <p
                                className={`
                                    font-lato font-bold text-black text-lg leading-10 text-justify
                                `}  
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus.
                                Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                                Rhoncus lectus hendrerit pharetra vitae magna. 
                                Pharetra, tortor pharetra vitae rhoncus. 
                            </p>
                           
                            <p
                                className={`
                                    font-lato font-bold text-black text-lg leading-10 text-justify
                                `}  
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                                Rhoncus lectus hendrerit pharetra vitae magna. 
                                Pharetra, tortor pharetra vitae rhoncus.
                            </p>
                            <p
                                className={`
                                    font-lato font-bold text-black text-lg leading-10
                                `}  
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. 
                            </p>
                        </div>
                    </div>

                    {/* What you’ll Learn Here */}
                    <div
                        className='flex flex-col gap-9.5 w-[50%]'
                    >
                        <h3
                            className='font-lato font-normal text-[36px] leading-10'
                        >
                            What you’ll Learn Here
                        </h3>

                        <div
                            className='flex flex-col gap-5'
                        >
                            <p
                                className={`
                                    font-lato font-bold text-black text-lg leading-10 text-justify
                                `}  
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus.
                                Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Facilisis ut natoque imperdiet faucibus. 
                                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                                Rhoncus lectus hendrerit pharetra vitae magna. 
                                Pharetra, tortor pharetra vitae rhoncus. 
                            </p>

                            <div
                                className='flex flex-col gap-9.5'
                            >
                                <h6
                                    className='font-lato font-normal text-2xl leading-10'
                                >
                                    On Our Website You’ll find:
                                </h6>

                                <div
                                    className='flex flex-col gap-7.5'
                                >
                                    <p
                                        className={`
                                            font-lato font-bold text-black text-lg leading-3 
                                            text-justify
                                        `} 
                                    >
                                        &gt; Lorem ipsum dolor sit amet, consectetur.
                                    </p>
                                    <p
                                        className={`
                                            font-lato font-bold text-black text-lg leading-2 
                                            text-justify
                                        `} 
                                    >
                                        &gt; Lorem ipsum dolor sit amet, consectetur.
                                    </p>
                                    <p
                                        className={`
                                            font-lato font-bold text-black text-lg leading-2 
                                            text-justify
                                        `} 
                                    >
                                        &gt; Lorem ipsum dolor sit amet, consectetur.
                                    </p>
                                    <p
                                        className={`
                                            font-lato font-bold text-black text-lg leading-2 
                                            text-justify
                                        `} 
                                    >
                                        &gt; Lorem ipsum dolor sit amet, consectetur.
                                    </p>
                                    <p
                                        className={`
                                            font-lato font-bold text-black text-lg leading-2 
                                            text-justify
                                        `} 
                                    >
                                        &gt; Lorem ipsum dolor sit amet, consectetur.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>

        {/* Images */}                                 
        <div 
            className='bg-[#EDEDED] flex flex-col items-center w-full py-12 px-5 lg:px-17'
        >
            <div
                className='flex flex-row justify-center gap-6 lg:gap-28 max-w-360'
            >
                <Image
                    src={Marshall}
                    alt='Marshall Logo'
                    className='w-51.25 h-35.5 object-cover'
                />
                <Image
                    src={Tesla}
                    alt='Tesla Logo'
                    className='w-51.25 h-35.5 object-cover'
                />
                <Image
                    src={Choco}
                    alt='Chocolately Logo'
                    className='w-51.25 h-35.5 object-cover'
                />
                <Image
                    src={Hugo}
                    alt='Hugo Logo'
                    className='w-51.25 h-35.5 object-cover'
                />
            </div>                                            
        </div>

        {/* Reviews */}
        <div 
            className='flex flex-col max-w-360 gap-26 px-5 lg:px-17'
        >
            <div
                className={`
                    flex flex-row items-center gap-34.75 w-full
                `}
            >
                <h2
                    className={`
                        font-roboto text-[40px] text-black w-[50%]
                    `}
                >
                    What <span className='text-[#FFA500] underline'> Customer says </span> <br/>
                    <span className='underline'>About us? </span>  
                </h2>

                <p
                    className={`
                        w-[50%] font-lato font-bold text-lg leading-10
                    `}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. 
                    Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. 
                    Nec tortor ut cursus ornare nibh vivamus. 
                    Quam elementum at velit viverra mattis.
                    Eleifend enim, praesent eu, leo semper quis et. 
                    Nisl neque malesuada arcu, felis, vitae rhoncus morbi volutpat ante. 
                    Adipiscing mauris 
                </p>
            </div>

            <div className='flex flex-row gap-20.25'>
                <div 
                className={`bg-white flex flex-col gap-5 py-13.5 pl-13.5 pr-5.5 rounded-[30px]
                    shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]
                `}
                >
                    <p
                        className={`
                            font-lato font-bold text-black text-lg leading-10
                        `}
                    >
                        Praesent enim augue tellus vitae placerat purus pretium at massa. 
                        Aliquet a malesuada eget posuere. Pellentesque euismod nulla praesent rhoncus.
                    </p>

                    <h4
                        className={`
                        font-lato text-2xl text-black w-[50%] leading-5
                    `}
                    >
                        Joy Kim <br/>
                        <span className='text-lg'>explorer</span>
                    </h4>
                </div>
                
                <div 
                className={`bg-white flex flex-col gap-5 py-13.5 pl-13.5 pr-5.5 rounded-[30px]
                    shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]
                `}
                >
                    <p
                        className={`
                            font-lato font-bold text-black text-lg leading-10
                        `}
                    >
                        Praesent enim augue tellus vitae placerat purus pretium at massa. 
                        Aliquet a malesuada eget posuere. Pellentesque euismod nulla praesent rhoncus.
                    </p>

                    <h4
                        className={`
                        font-lato text-2xl text-black w-[50%] leading-5
                    `}
                    >
                        Joy Kim <br/>
                        <span className='text-lg'>explorer</span>
                    </h4>
                </div>
                <div 
                className={`bg-white flex flex-col gap-5 py-13.5 pl-13.5 pr-5.5 rounded-[30px]
                    shadow-inner-[0_2px_6px_0_rgba(0,0,0,0.197)] shadow-[0_6px_14px_0_rgba(0,0,0,0.283)]
                `}
                >
                    <p
                        className={`
                            font-lato font-bold text-black text-lg leading-10
                        `}
                    >
                        Praesent enim augue tellus vitae placerat purus pretium at massa. 
                        Aliquet a malesuada eget posuere. Pellentesque euismod nulla praesent rhoncus.
                    </p>

                    <h4
                        className={`
                        font-lato text-2xl text-black w-[50%] leading-5
                    `}
                    >
                        Joy Kim <br/>
                        <span className='text-lg'>explorer</span>
                    </h4>
                </div>

            </div>            
            

        </div>

    </div>
  )
}

export default AboutBody