const Footer = () => {
    return (
        <>
        <div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
       {/* <div className="flex flex-col text-white">
        <p>Featured News</p>
        <p>Most viewd</p>
        <p>Readers choices</p>
       </div> */}

       {/* <div className="flex flex-col text-white">
        <p>About us</p>
        <p>Our Impacts</p>
        <p>For Members</p>
       </div> */}

       <div className="flex flex-col text-white">
        <p>Evets</p>
        <p>Press Inquiries</p>
        <p>Contact us</p>
       </div>
        </div>
        <p className="py-2 pb-6 text-center text-white bg-black text-sm">All rights reserved @XYZ SCHOOL 2023</p>
        </>
    )
  }
  
  export default Footer;