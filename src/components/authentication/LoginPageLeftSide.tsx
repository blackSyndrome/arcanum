import Image from "next/image";

export default function LoginPageLeftSide() {
   return (
      <div className="w-2/3 h-full flex items-center justify-center">
         <div className="relative w-full h-full flex flex-col p-4">
            {/* Dark overlay for the image */}
            <div className="absolute inset-0 bg-black opacity-15 z-10"></div>

            <div className="relative z-20 flex items-center justify-between text-3xl font-bold text-white mb-auto">
               <div className="flex items-center">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="mr-2 h-6 w-6"
                  >
                     <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                  arcanum
               </div>

               {/* Added logo on the opposite side */}
               <div className="relative w-16 h-16">
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
                  <p className="text-lg">
                     A resource hub that empowers students and researchers from
                     New Era University and beyond, <br /> fostering a community
                     where knowledge is accessible and shared across different
                     institutes.
                  </p>
                  <footer className="text-sm font-bold">
                     Developed by corruptedFile
                  </footer>
               </blockquote>
            </div>
         </div>
      </div>
   );
}
