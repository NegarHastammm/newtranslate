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
      <main className="min-h-screen bg-[#F8F8F8] flex items-center justify-center p-4 font-Shabnam ">
    <div className="backbg">
      <div className='bg1 bg'>
  <Image src="/bg1.png" alt="bg1" width={2560} height={2525.23}  />
  </div>
  <div className='bg2 bg'>
  <Image src="/bg2.png" alt="bg2" width={1440.81} height={1421.26}  />
</div>
<div className='bg3 bg'>
  <Image src="/bg3.png" alt="bg3" width={910.56} height={912.73}  />
</div>
<div className='bg4 bg'>
  <Image src="/bg4.png" alt="bg4" width={454.19} height={456.37}  />
</div>
</div>

        {/* This is the card, our rectangular form.
          The card component from DaisyUI is used for a nice look and shadow.
          The card width is full on small screens and limited on larger screens (max-w-sm).
        */}
        <div className="card  absolute left-1/4 top-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white shadow-xl rounded-lg  ">
          <div className="card-body   ">
            
            {/* Logo section */}
            <div className="flex justify-center mb-6">
              {/* You can place your Next.js Image component or an img tag for the logo here */}
              <div className="w-32 h-16 rounded-lg bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">جای لوگو</span>
              </div>
            </div>

            {/* Mobile number input field */}
            <div className="form-control w-full">
              <label className="label" htmlFor="phone-input">
                <span className="label-text">شماره همراه خود را وارد کنید</span>
              </label>
              <div className="relative">
                {/* This section displays the Iran country code (+98).
                  It's positioned on the right side of the input using position: absolute.
                */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <span className="text-gray-500">+۹۸</span>
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
            <div className="form-control mt-6">
              {/* A green button using the btn-success class from DaisyUI.
                You can change its color with other classes like btn-primary or a custom color with Tailwind.
              */}
              <button className="btn btn-success text-white">ارسال پیامک</button>
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

