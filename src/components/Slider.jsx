// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';
import data from './../data';

const Slider = () => {


  return (
    <>
      <Swiper
       grabCursor={true} 
        className="h-screen w-full"
        spaceBetween={0}
        modules={[Autoplay]}
        autoplay={{ delay: 8000 }}
        loop={true}
        effect="fade"
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((value, index) =>{
          return (
        <SwiperSlide key={index} className="h-screen w-full py-24 2xl:container 2xl:mx-auto px-28">
          <div className={"w-full h-full border-2 border-slate-100 overflow-hidden shadow-2xl rounded-xl flex " + (value.BgCar)}>
            {/* left side */}
            {/* car img */}
            <span className="w-1/2 h-full flex items-center justify-center p-6 xl:px-20">
              <img
              id='car'
                className={"aspect-square object-contain h-full w-full " + (value.classImg)}
                src={value.carImg}
                alt="car"
              />
            </span>
            {/* right side */}
            <span className="w-1/2 h-full px-10 xl:px-20 flex flex-col bg-gray-50 items-center">
              {/* logo brand */}
              <div className="flex items-center justify-center h-20 w-20 pt-6">
                <img className="aspect-auto" src={value.carLogo} alt="logo" />
              </div>
              {/* name and model */}
              <div className="flex w-full items-center justify-between font-bold text-2xl pt-6 px-1">
                <span>{value.carName}</span>
                <span>
                  مدل : <span>{value.carYear}</span>
                </span>
              </div>
              {/* line */}
              <span className="w-full py-[1px] bg-slate-400 my-4"></span>
              {/* detail car */}
              <div className="w-full font-semibold flex text-slate-700 justify-between items-center pt-2 pb-4 2xl:pt-4 2xl:pb-">
                   {/* left */}
                   <div className="w-1/2 h-full flex items-center flex-col gap-y-8">
                  {/* color */}
                  <div className="flex justify-end items-center gap-x-2 ">
                    <span>
                      رنگ بدنه : <span>{value.carColor}</span>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                        />
                      </svg>
                    </span>
                  </div>
                  {/* karkard */}
                  <div className="flex justify-end items-center gap-x-2 ">
                    <span>
                      {' '}
                      کارکرد : <span>{value.carKarkard}</span>
                    </span>
                    <span>
                      <svg
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5501 2H9.45007C7.65007 2 7.25008 2.90001 7.02008 4.01001L6.20007 7.92999H17.8001L16.9801 4.01001C16.7501 2.90001 16.3501 2 14.5501 2Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.2401 14.3199C19.3201 15.1699 18.6401 15.9 17.7701 15.9H16.4101C15.6301 15.9 15.5201 15.57 15.3801 15.15L15.23 14.7199C15.03 14.1299 14.9001 13.7299 13.8501 13.7299H10.1401C9.10005 13.7299 8.94005 14.1799 8.76005 14.7199L8.61005 15.15C8.47005 15.56 8.36006 15.9 7.58006 15.9H6.22005C5.35005 15.9 4.67005 15.1699 4.75005 14.3199L5.16006 9.89996C5.26006 8.80996 5.47005 7.91992 7.37005 7.91992H16.62C18.52 7.91992 18.7301 8.80996 18.8301 9.89996L19.2401 14.3199Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.20009 5.75H5.47009"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.53 5.75H17.8"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.65002 10.8301H9.82004"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.1801 10.8301H16.3501"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 17V18"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 21V22"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3 18L2 22"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21 18L22 22"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/2 h-full flex flex-col gap-y-8">
                  {/* girbox */}
                  <div className="flex justify-end items-center gap-x-2 ">
                    <span>
                      گیربکس : <span>{value.carGirbox}</span>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                        />
                      </svg>
                    </span>
                  </div>
                  {/* sokht */}
                  <div className="flex justify-end items-center gap-x-2 ">
                    <span>
                      {' '}
                      سوخت : <span>{value.carSokht}</span>
                    </span>
                    <span>
                      <svg
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 22V5C3.5 3 4.84 2 6.5 2H14.5C16.16 2 17.5 3 17.5 5V22H3.5Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2 22H19"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.39 9.99998H12.62C13.66 9.99998 14.51 9.49999 14.51 8.10999V6.87999C14.51 5.48999 13.66 4.98999 12.62 4.98999H8.39C7.35 4.98999 6.5 5.48999 6.5 6.87999V8.10999C6.5 9.49999 7.35 9.99998 8.39 9.99998Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.5 13H9.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.5 16.01L22 16V10L20 9"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  {/* bime */}
                  <div className="flex justify-end items-center gap-x-2 ">
                    <span>
                      {' '}
                      بیمه : <span>{value.carBime}</span>
                    </span>
                    <span>
                      <svg
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.49 2.23006L5.50003 4.11006C4.35003 4.54006 3.41003 5.90006 3.41003 7.12006V14.5501C3.41003 15.7301 4.19003 17.2801 5.14003 17.9901L9.44003 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.9901C19.83 17.2801 20.61 15.7301 20.61 14.5501V7.12006C20.61 5.89006 19.67 4.53006 18.52 4.10006L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.05005 11.8701L10.66 13.4801L14.96 9.18005"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                </div>
                {/* line */}
                <span className="w-full py-[1.5px] bg-slate-400 "></span>
                {/* tozihat */}
                <div className='flex w-full pt-4'>
                <div className="flex flex-row-reverse w-full items-center gap-2 font-semibold text-slate-700 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                  </span>
                  <span>توضیحات : {value.carTozih}</span>
                </div>
                </div>
                {/* price  */}
                <span className={'p-3 w-3/4 mt-8 ring-2 ring-offset-4  rounded-lg text-white text-lg flex justify-center items-center font-semibold ' +  (value.bgBtn)}>
                {value.carPrice} تومان </span>
            </span>
          </div>
        </SwiperSlide>
          )
        })}
      
      </Swiper>
    </>
  );
};

export default Slider;
