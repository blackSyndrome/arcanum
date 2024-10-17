import Image from "next/image";

const LoginPageLeftSide = () => {
   return (
      <div className="w-full md:w-2/3 h-full flex items-center justify-center relative">
         <div className="relative w-full h-full flex flex-col p-4 md:p-8">
            {/* Dark overlay for the image */}
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>

            <div className="relative z-20 flex items-center justify-between text-2xl md:text-3xl font-bold text-white mb-auto">
               <div className="flex items-center">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="mr-2 h-5 md:h-6 w-5 md:w-6"
                  >
                     <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                  arcanum
               </div>

               {/* Added logo on the opposite side */}
               <div className="relative w-12 md:w-16 h-12 md:h-16">
                  <Image
                     src="/neu-logo.png"
                     alt="New Era University Logo"
                     layout="fill"
                     objectFit="contain"
                  />
               </div>
            </div>

            <Image
               src="/hero.jpg"
               alt="New Era University"
               className="object-cover w-full h-full"
               layout="fill"
            />
            <div className="relative z-20 mt-auto text-white">
               <blockquote className="space-y-2">
                  <p className="text-base md:text-lg">
                     A resource hub that empowers students and researchers from
                     New Era University and beyond, <br /> fostering a community
                     where knowledge is accessible and shared across different
                     institutes.
                  </p>
                  <footer className="text-xs md:text-sm font-bold">
                     Developed by corruptedFile
                  </footer>
               </blockquote>
            </div>
         </div>
      </div>
   );
};

export default LoginPageLeftSide;
   