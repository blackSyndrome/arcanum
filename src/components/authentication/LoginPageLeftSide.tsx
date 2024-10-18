import Image from "next/image";

const LoginPageLeftSide = () => {
   return (
      <div className="w-full md:w-2/3 h-full flex items-center justify-center relative">
         <div className="relative w-full h-full flex flex-col p-4 md:p-8">
            {/* Dark overlay for the image */}
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>

            <div className="relative z-20 flex items-center justify-center text-xl md:text-3xl font-bold text-white mb-auto">
               <div className="flex items-center justify-center">
                  <div className="relative h-12 md:h-12 w-12 md:w-12 mr-2">
                     <Image
                        src="/arcanum-logo.svg"
                        alt="Arcanum logo"
                        fill
                        style={{ objectFit: "contain" }}
                     />
                  </div>
                  <span className="ml-2">arcanum</span>
               </div>

               <div className="ml-auto">
                  <div className="relative w-12 md:w-16 h-12 md:h-16">
                     <Image
                        src="/neu-logo.png"
                        alt="New Era University Logo"
                        fill
                        style={{ objectFit: "contain" }}
                     />
                  </div>
               </div>
            </div>

            <Image
               src="/hero.jpg"
               alt="New Era University"
               className="object-cover w-full h-full"
               fill
               style={{ objectFit: "cover" }}
            />

            <div className="relative z-20 mt-auto text-white">
               <blockquote className="space-y-2">
                  <p className="text-sm md:text-lg">
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
