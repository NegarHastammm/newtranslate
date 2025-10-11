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
      <main className=" font-Shabnam    min-h-screen  overflow-scroll  ">
        <main className=' '>
      <Image src="/bgPhone1.png" alt='bgPhone1' width={562.59} height={554.7} className='top-[45] left-[15]  lg:w-[562.59px] lg:h-[554.7px] lg:top-[-59px] lg:left-[390px] lg:fixed   fixed '  />
      
          <Image src="/bgPhone2.png" alt='bgPhone2' width={316.47} height={311.99} className='top-[200] left-[79] fixed' />
          
        <Image src="/bgPhone3.png" alt='bgPhone3' width={200.27} height={200.36} className='top-[250] left-[135] fixed' />
        {/* This is the card, our rectangular form.
          The card component from DaisyUI is used for a nice look and shadow.
          The card width is full on small screens and limited on larger screens (max-w-sm).
        */}
        <div className="card w-full       ">
                
      
            
          <div className="card-body ">
        
            {/* Logo section */}
            <div className="flex justify-center mb-6 ">
              {/* You can place your Next.js Image component or an img tag for the logo here */}
              <div className=" rounded-lg  flex items-center justify-center ">
                <span className="">
                  <Image src="/logo.png" alt='logo' width={337} height={205} className='top-[249] left-[71] fixed' />
                </span>
           
              </div>
                     <div className='w-[240] h-[19] top-[450] left-[84] font-bold size-[19] text-[#1B2559] fixed'>
              <p>دستیار هوشمندسازان ترجمه</p>
            </div>
            </div>
          

            {/* Mobile number input field */}
            <div className="form-control w-full">
              <label className="label" htmlFor="phone-input">
                <span className="label-text w-[177] h-[16] top-[700] left-[210] font-bold size-[16] text-[#1B2559] fixed">شماره همراه خود را وارد کنید</span>
              </label>
              <div className="fixed">
                {/* This section displays the Iran country code (+98).
                  It's positioned on the right side of the input using position: absolute.
                */}
                <div className="pointer-events-none  flex items-center px-3">
                </div>
                {/* Main number input field.
                  Right padding (pr-12) is added to create space for the country code.
                  direction: ltr ensures the number is typed correctly from left to right.
                */}
                <input
                  id="phone-input"
                  type="tel"
                  placeholder="9123456789"
                  className="input input-bordered w-[366] h-[62] top-[750] rounded-[7] border-[1] fixed pr-12 "
                  maxLength={10}
                  style={{ direction: 'ltr' }}
                />
              </div>
            </div>

            {/* Send SMS button */}
            <div className="form-control mt-6 bg-[#278760] w-[366] h-[62] top-[810] left-[55] rounded-[7] border-[1] fixed ">
              {/* A green button using the btn-success class from DaisyUI.
                You can change its color with other classes like btn-primary or a custom color with Tailwind.
              */}
              <button className="flex text-center justify-center w-[350]  items-center top-[850]  text-[#FFFFFF] fixed">ارسال پیامک</button>
            </div>

            {/* Login with username link */}
            <div className=" my-4 text-xs"></div>
            <div className="text-center">
              <a href="#" className="link link-hover text-sm w-[700] h-[16] top-[950] left-[-99] font-bold size-[16] text-[#278760] fixed ">
                ورود با نام کاربری و رمز عبور
              </a>
            </div>

          </div>
        </div>
        </main>
      </main>
      
    </>
  );
};

export default LoginPage;

