import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="bg-[rgba(37,43,66,1)] min-h-screen w-[1322px]">
      <Navbar />
      <div className="w-[1046px] h-[1028px] mt-[104px] ml-[197px] pt-[80px] p-[80px] flex flex-col items-center">
        <div className="w-[699px] h-[496px] flex flex-col items-center pt-[40px] p-[40px]">
          {/* Welcome Heading */}
          <div className="w-[77px] h-[24px] flex justify-center items-center mb-4">
            <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[rgba(35,166,240,1)] text-center">
              Welcome
            </h5>
          </div>

          {/* Main Heading */}
          <h1 className="font-Montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] text-center text-[rgba(255,255,255,1)]">
            Selling on the<br /> internet like a pro
          </h1>

          {/* Subheading / Paragraph */}
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-center text-[rgba(255,255,255,1)] mt-4">
            We know how large objects will act, but things on a<br /> small scale just do not act that way.
          </h4>
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button className="bg-[rgba(35,166,240,1)] text-white rounded-md shadow-md px-10 py-3 ">
              Get Quote Now
            </button>
           
            <button className="w-[162px] h-[52px] px-[40px] py-[15px] gap-[10px] rounded-md border border-[rgba(35,166,240,1)] text-[rgba(35,166,240,1)] flex items-center justify-center whitespace-nowrap">
              Learn More
            </button>
            
            </div>
            <div className="flex w-[1046px] gap-[30px] opacity-100 mt-20"> {/* Changed opacity-0 to opacity-100 */}
            <div className="w-[328px] h-[292px] px-[40px] py-[35px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] bg-white">
            <div className="w-[70px] h-[76px] px-[22px] py-[19px] bg-[rgba(255,220,209,1)]  rounded-md opacity-100 flex items-center justify-center">
             </div>
             <div className="w-[135px] h-[24px] mt-4">
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-left text-[rgba(37,43,66,1)]">training Courses</h5>
                <div className="w-[50px] h-[2px] bg-[rgba(231,64,64,1)] opacity-100 mt-4"></div>
                
                <div className="w-[222px] h-[60px] mt-4">
                   <p className="font-Montserrat font-normal text-[14px] leading-[20px] tracking[0.2px] text-[rgba(115, 115, 115, 1)]">The gradual accumulation of information about atomic and  small-scale behaviour...</p>
                </div>
              </div>
            </div>
            <div className="w-[328px] h-[292px] px-[40px] py-[35px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] bg-white">
            <div className="w-[70px] h-[76px] px-[22px] py-[19px] rounded-md opacity-100 flex items-center justify-center" style={{backgroundColor: "rgba(185, 234, 168, 1)"}}> </div>
            <div className="w-[168px] h-[24px] mt-4">
              <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[rgba(37, 43, 66, 1)">2,769 online courses</h5>
              <div className="w-[50px] h-[2px] bg-[rgba(231,64,64,1)] opacity-100 mt-4"></div>
            </div>
            <div className="w-[222px] h-[60px] mt-8">
              <p className="font-Montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[rgba(115, 115, 115, 1)]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
            </div>

            </div>
            <div className="w-[328px] h-[292px] px-[40px] py-[35px] pt-[35px] pr-[40px] pb-[35px] pl-[40px]" style={{ backgroundColor: "rgba(35, 166, 240, 1)" }}>

            <div className="w-[70px] h-[76px] px-[22px] py-[19px] bg-white rounded-md opacity-100 flex items-center justify-center"> </div>
            <div className="w-[135px] h-[24px] mt-4">
              <h5 className="font-Montserrat font-bold text-[16px] leading[24px] tracking-[0.1px] text-white">training Courses</h5>
              <div className="w-[50px] h-[2px] bg-white opacity-100 mt-4"></div>

            </div>
            <div className="w-[222px] h-[60px] mt-8">
              <p className="font-Montserrat font-normal text-[14px] leading[20px] tracking-[0.2px] text-white">The gradual accumulation of information about atomic and small-scale behaviour...</p>
             </div>
            </div>
          </div>


                
          </div>
        </div>
      </div>
    
  );
}
