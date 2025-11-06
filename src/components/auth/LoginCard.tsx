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
      <main className=" font-Shabnam bg-gray-100 overflow-scroll  min-h-screen      ">
        <Image src="/bg1.png" alt='bg1' width={2560} height={2525} className='top-[44.39] left-[5] hidden sm:block fixed lg:w-[1000] lg:h-[] lg:top-[] lg:left-[270] lg:fixed 
        sm:w-[] sm:h-[] sm:top-[] sm:left-[]
        xl:w-[2000] xl:h-[] xl:top-[420] xl:left-[60]
        2xl:w-[] 2xl:h-[] 2xl:top-[] 2xl:left-[]
        
      
      ' />
        <Image src="/bg2.png" alt='bg2' width={500} height={1421.26} className='top-[290] left-[140] hidden sm:block fixed lg:w-[700] lg:h-[] lg:top-[340] lg:left-[415]
        sm:w-[] sm:h-[] sm:top-[] sm:left-[]
         xl:w-[930] xl:h-[] xl:top-[805] xl:left-[240]
           2xl:w-[1000] 2xl:h-[] 2xl:top-[900] 2xl:left-[330]
         min-[320px]:w-[] min-[320px]:h-[] min-[320px]:top-[800px] min-[320px]:left-[600px]
         
         ' />
        <Image src="/bg3.png" alt='bg3' width={300} height={912.73} className='top-[390] left-[243] hidden sm:block fixed lg:w-[400] lg:h-[] lg:top-[470] lg:left-[570]
        sm:w-[] sm:h-[] sm:top-[] sm:left-[]
         xl:w-[630] xl:h-[] xl:top-[980] xl:left-[390]
          2xl:w-[] 2xl:h-[] 2xl:top-[1100] 2xl:left-[519]' />
        <Image src="/bg4.png" alt='bg4' width={200} height={456.37} className='top-[470] left-[296] hidden sm:block fixed lg:w-[] lg:h-[] lg:top-[575] lg:left-[675]
        sm:w-[] sm:h-[] sm:top-[] sm:left-[]
         xl:w-[400] xl:h-[] xl:top-[1160] xl:left-[507]
          2xl:w-[400] 2xl:h-[] 2xl:top-[1270] 2xl:left-[640]' />

        <main className=''>
      <Image src="/bgPhone1.png" alt='bgPhone1' width={562.59} height={554.7} className='top-[45] left-[15]  lg:w-[300px] lg:h-[390px] lg:top-[170px] lg:left-[630px] md:w-[370] md:h-[412] md:top-[112] md:left-[200] md:bg-[#FFFFFF] rounded-[7]   lg:bg-[#FFFFFF] sm:bg-[#FFFFFF] fixed 
            sm:w-[220] sm:h-[300] sm:top-[160] sm:left-[290] 
             xl:w-[450] xl:h-[550] xl:top-[750] xl:left-[471] 
              2xl:w-[] 2xl:h-[] 2xl:top-[800] 2xl:left-[635] '  />
      
          <Image src="/bgPhone2.png" alt='bgPhone2' width={316.47} height={311.99} className='top-[200] left-[79] lg:w-[210] lg:h-[210] lg:top-[263] lg:left-[675] lg:fixed fixed md:w-[259] md:h-[225] md:top-[200] md:left-[253] 
          sm:w-[150] sm:h-[150] sm:top-[230] sm:left-[325]
           xl:w-[300] xl:h-[300] xl:top-[870] xl:left-[550] 
            2xl:w-[300] 2xl:h-[300] 2xl:top-[919] 2xl:left-[710]' />
          
        <Image src="/bgPhone3.png" alt='bgPhone3' width={200.27} height={200.36} className='top-[250] left-[135] lg:w-[110] lg:h-[110] lg:top-[315] lg:left-[725] lg:fixed fixed md:w-[140] md:h-[140] md:top-[240] md:left-[310]   
        sm:w-[90] sm:h-[90] sm:top-[260] sm:left-[354]
         xl:w-[170] xl:h-[170] xl:top-[930] xl:left-[615] 
          2xl:w-[] 2xl:h-[] 2xl:top-[981] 2xl:left-[776] ' />
        {/* This is the card, our rectangular form.
          The card component from DaisyUI is used for a nice look and shadow.
          The card width is full on small screens and limited on larger screens (max-w-sm).
        */}
        <div className="card w-full     ">
                
      
            
          <div className="card-body ">
        
            {/* Logo section */}
            <div className="flex justify-center mb-6 ">
              {/* You can place your Next.js Image component or an img tag for the logo here */}
              <div className=" rounded-lg  flex items-center justify-center ">
                <span className="">
                  <Image src="/logo.png" alt='logo' width={337} height={205} className='top-[249] left-[71] lg:w-[170] lg:h-[120] lg:top-[250] lg:left-[705] lg:fixed fixed md:w-[150] md:h-[121] md:top-[200] md:left-[310]  
                  sm:w-[190] sm:h-[] sm:top-[215] sm:left-[310]
                   xl:w-[] xl:h-[] xl:top-[855] xl:left-[617] 
                    2xl:w-[] 2xl:h-[] 2xl:top-[900] 2xl:left-[780] ' />
                </span>
           
              </div>
                     <div className='w-[240] h-[19] top-[450] left-[84] font-bold size-[19] text-[#1B2559] lg:w-[232] lg:h-[19] lg:top-[360] lg:left-[640] lg:fixed fixed md:w-[] md:h-[] md:top-[309] md:left-[220]
                     sm:w-[160] sm:h-[50] sm:top-[321] sm:left-[320]  
                      xl:w-[700] xl:h-[] xl:top-[960] xl:left-[79]
                       2xl:w-[] 2xl:h-[] 2xl:top-[1020] 2xl:left-[250]'>
              <p>دستیار هوشمندسازان ترجمه</p>
            </div>
            </div>
          

            {/* Mobile number input field */}
            <div className="form-control w-full">
              <label className="label" htmlFor="phone-input">
                <span className="label-text w-[177] h-[16] top-[700] left-[210] font-bold size-[16] text-[#1B2559] lg:w-[177] lg:h-[16] lg:top-[410] lg:left-[720] lg:fixed fixed md:w-[] md:h-[] md:top-[350] md:left-[350] 
                sm:w-[160] sm:h-[] sm:top-[355] sm:left-[347]
                 xl:w-[700] xl:h-[] xl:top-[1000] xl:left-[200]
                  2xl:w-[] 2xl:h-[] 2xl:top-[1050] 2xl:left-[290]">شماره همراه خود را وارد کنید</span>
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
                  className="input input-bordered w-[366] h-[62] top-[750] rounded-[7] border-[1] lg:w-[250] lg:h-[42] lg:top-[450] lg:left-[660] lg:fixed fixed md:w-[300] md:h-[38] md:top-[390] md:left-[231] pr-12
                  sm:w-[190] sm:h-[30] sm:top-[380] sm:left-[310] 
                   xl:w-[350] xl:h-[50] xl:top-[1028] xl:left-[530] 
                    2xl:w-[260] 2xl:h-[] 2xl:top-[1079] 2xl:left-[730] "
                  maxLength={10}
                  style={{ direction: 'ltr' }}
                />
              </div>
            </div>

            {/* Send SMS button */}
            <div className="form-control mt-6 bg-[#278760] w-[366] h-[62] top-[810] left-[55] rounded-[7] border-[1] lg:w-[250] lg:h-[42] lg:top-[479] lg:left-[660] lg:fixed fixed md:w-[300] md:h-[38] md:top-[430] md:left-[231] md:cursor-pointer cursor-pointer
            sm:w-[190] sm:h-[30] sm:top-[390] sm:left-[310]  
             xl:w-[350] xl:h-[50] xl:top-[1120] xl:left-[530] 
              2xl:w-[260] 2xl:h-[] 2xl:top-[1130] 2xl:left-[730] ">
              {/* A green button using the btn-success class from DaisyUI.
                You can change its color with other classes like btn-primary or a custom color with Tailwind.
              */}
              <button className="flex text-center justify-center w-[350]  items-center top-[850]  text-[#100f0f]  lg:w-[81] lg:h-[27] lg:top-[510] lg:left-[740] lg:fixed  md:w-[300] md:h-[300] md:top-[320] md:left-[]  fixed
              sm:w-[190] sm:h-[40] sm:top-[410] sm:left-[310]
               xl:w-[] xl:h-[] xl:top-[1155] xl:left-[660]
                2xl:w-[] 2xl:h-[] 2xl:top-[1165] 2xl:left-[820]">ارسال پیامک</button>
            </div>

            {/* Login with username link */}
            <div className=" my-4 text-xs"></div>
            <div className="text-center">
              <a href="#" className="link link-hover text-sm w-[700] h-[16] top-[950] left-[-99] font-bold size-[16] text-[#278760] lg:w-[203] lg:h-[16] lg:top-[570] lg:left-[680] lg-fixed md:w-[] md:h-[] md:top-[500] md:left-[48] fixed 
              sm:w-[300] sm:h-[300] sm:top-[441] sm:left-[260]
               xl:w-[700] xl:h-[] xl:top-[1250] xl:left-[350]
                2xl:w-[] 2xl:h-[] 2xl:top-[] 2xl:left-[535]">
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

