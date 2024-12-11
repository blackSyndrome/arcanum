import { Input } from "../ui/input";
import Image from "next/image";
import CardView from "../cardview/card-view";
import NewsGrid from "../cardview/news-grid";

const DashboardBody = () => {
  return (
    <div
      className="flex flex-col items-center bg-[#F8FAFC] py-10 px-4"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center mb-10 max-w-5xl">
        <h2 className="text-4xl font-extrabold text-[#27374D] mb-4">
          Explore Learning Virtually
        </h2>
        <p className="leading-7">
          Arcanum serves as a comprehensive learning resource for students. It
          encompasses a wide range of digital offerings, including e-books,
          audiobooks, research materials, and educational websites. This
          platform provides essential support for independent learning and skill
          development, ensuring students have access to valuable information and
          resources to enhance their academic journey.
        </p>
      </div>

      <div className="w-full mb-12">
        <CardView />
      </div>

      <div className="text-center mb-8 max-w-5xl">
        <h2 className="text-4xl font-extrabold text-[#27374D]">
          News and Events
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
        <div className="w-full md:w-1/2 lg:w-2/5 max-w-[600px]">
          <Image
            src="/news-and-events-image.jpg"
            alt="Library Image"
            width={680}
            height={600}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 max-w-[600px]">
          <NewsGrid />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl mt-8">
        <div className="w-full md:w-1/2 lg:w-2/5 max-w-[600px]">
          <NewsGrid />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 max-w-[600px]">
          <Image
            src="/news-and-events-image.jpg"
            alt="Library Image"
            width={680}
            height={600}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;
