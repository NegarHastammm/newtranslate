// components/auth/LoginCard.tsx
'use client';
import React from 'react';
// Import Next.js Image component for optimized image loading
import Image from 'next/image'; 

const LoginCard: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 💡 Add your actual SMS sending logic here
    console.log('Sending SMS to:', phoneNumber);
  };

  return (
    // 1. Main Container: Full screen, centered, and relative for background image positioning
    
    <div className="   flex items-center justify-center w-[483] h-[621] top-[257] left-[718] right-[718] min-h-screen min-w-screen font-shabnam rounded-[15] ">
      <Image src="/vector3.png" alt='vector' fill className='w-[562] h-[554] top-[-59]' />
      
      {/* 2. Background Image: Uses next/image for optimization */}
      <Image
        src="/Vector.png" // Path to your image in the /public folder
        alt="Login Background"
        fill // Makes the image fill the parent container
        style={{ objectFit: 'cover' }} // Ensures the image covers the area without distortion
        priority // Loads the image with high priority (it's essential for the initial page)
        className="z-0" // Stays at the bottom layer
      />
      
      {/* 3. Overlay Layer: A semi-transparent layer for better text readability on top of the image */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      
      {/* 4. Login Form Card: The actual form container (DaisyUI 'card') */}
      <div 
        className="card w-full max-w-sm shadow-2xl  p-6 md:p-8 z-20"
      >
        <form onSubmit={handleSubmit} className="card-body p-0">
          
          {/* Logo Placeholder Area */}
          <div className="flex justify-center ">
            <div className=" relative  w-[337] h-[205] top-[31] ">
                <Image
                    src="/logo.png" 
                    alt="Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
          </div>
          {/*text translate */}
          <div className=' font-bold flex text-center justify-center '>
            <p className='w-[232] h-[19] top-[243] size-[19] text-[#1B2559] tracking-[100%] leading-12'>
              دستیار هوشمندسازان ترجمه
            </p>
          </div>
          
          {/* Phone Number Input Field */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-right w-[177] h-[16] font-bold text-[#1B2559] leading-12 ">شماره تلفن خود را وارد کنید</span>
            </label>
            <div className="flex border  rounded-lg overflow-hidden bg-white" dir="ltr">
              
              {/* Iran Country Code */}
              <span className=" w-[27] h-[62]  borfer-r-[7] text-[#1B2559] flex items-center justify-center font-bold  font-shabnam">
                +98
              </span>

              {/* Input Field: uses dir="ltr" for correct number alignment */}
              <input
                type="tel"
                placeholder="مثال: 9123456789" // 10-digit example
                className="input  border-none h-[62] text-right placeholder-gray-400 focus:outline-none focus:ring-0 bg-[#FFFFFF]"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength={10}
                required
              />
            </div>
          </div>

          {/* Submit Button (Send SMS) */}
          <div className="form-control ">
            {/* DaisyUI btn and btn-success for green color */}
            <button type="submit" className="w-full h-[62]  border-[1] rounded-[7] left-[40]   bg-[#278760] font-bold text-[#FFFFFF] border-[#278760] ">
              ارسال پیامک
            </button>
          </div>

          {/* Alternative Login Link */}
          <div className="text-center mt-6">
            <a href="/login/password" className="link link-hover w-[203] h-[16] top[147] font-bold text-[#278760]">
              ورود با نام کاربری و پسورد
            </a>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginCard;