"use client";
import type { NextPage } from 'next';
import Image from 'next/image';

// This is a complete and standalone component for the login page.
// You can import and use it anywhere in your project.
const LoginPage: NextPage = () => {
  return (
    <>
      {/* Main page container.
        Uses flex to center the form vertically and horizontally.
        It has a simple gray background that you can replace with your own image.
        For example: className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/your-background.jpg')" }}
      */}
      <main className="w-[1920] h-[1156] bg-[#FFFFFF] flex items-center justify-center p-4 font-Shabnam ">
 



        {/* This is the card, our rectangular form.
          The card component from DaisyUI is used for a nice look and shadow.
          The card width is full on small screens and limited on larger screens (max-w-sm).
        */}
        <div className="card phoneCard flex text-center justify-center bg-[#FFFFFF]  right-[718] bottom-[257]        ">
          <div className="card-body   ">
            
            {/* Logo section */}
            <div className="flex justify-center ">
              {/* You can place your Next.js Image component or an img tag for the logo here */}
              <div className="    h-[205] w-[337] top-[31] left-[80] flex text-center justify-center ">
                <span className=" ">
                  <Image src="/logo.png" alt='logo' width={337} height={205} />
                </span>
               
              </div>
            </div>
             <div className='  flex text-center justify-center logoText text-[#1B2559] '>
                  <p className=' logoText  '>دستیار هوشمندسازان ترجمه</p>
                </div>

            {/* Mobile number input field */}
            
            <div className="form-control relative  ">
              <label className="label   " htmlFor="phone-input">
                <span className="label-text phoneNumber">شماره همراه خود را وارد کنید</span>
              </label>
              
              <div className="relative phoneBox">
                {/* This section displays the Iran country code (+98).
                  It's positioned on the right side of the input using position: absolute.
                */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3  ">
                  <span className="">+۹۸</span>
                </div>
                {/* Main number input field.
                  Right padding (pr-12) is added to create space for the country code.
                  direction: ltr ensures the number is typed correctly from left to right.
                */}
                <input
                  id="phone-input"
                  type="tel"
                  placeholder="9123456789"
                  className="input input-bordered w-full pr-12 text-left"
                  maxLength={10}
                  style={{ direction: 'ltr' }}
                />
              </div>
            </div>

            {/* Send SMS button */}
            <div className="form-control  message ">
              {/* A green button using the btn-success class from DaisyUI.
                You can change its color with other classes like btn-primary or a custom color with Tailwind.
              */}
              <button className=" text-white btn ">ارسال پیامک</button>
            </div>

            {/* Login with username link */}
            <div className="divider my-4 text-xs">یا</div>
            <div className="text-center">
              <a href="#" className="link link-hover text-sm">
                ورود با نام کاربری و رمز عبور
              </a>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;

