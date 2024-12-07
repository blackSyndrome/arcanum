import { Input } from "../ui/input";
import Image from "next/image";
import CardView from "../cardview/card-view";
import NewsGrid from "../cardview/news-grid";

const DashboardBody = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "246vh",
        backgroundColor: "#F8FAFC",
      }}
    >
      <div
        className="w-full flex flex-col items-center gap-4"
        style={{ backgroundColor: "#334155", height: "300px" }}
      >
        <Input
          type="search"
          placeholder="Search for authors, theses, and periodicals"
          style={{
            height: "76px",
            width: "74%",
            padding: "20px",
            borderRadius: "6px",
            border: "none",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            fontSize: "16px",
            backgroundColor: "#f8f9fa",
            marginTop: "90px",
          }}
        />
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "black",
          padding: "0 300px",
        }}
      >
        <h2
          className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl"
          style={{ color: "#27374D" }}
        >
          {" "}
          Explore Learning Virtually{" "}
        </h2>
        <p className="leading-7 mt-6">
          Arcanum serves as a comprehensive learning resource for students. It
          encompasses a wide range of digital offerings, including e-books,
          audiobooks, research materials, and educational websites. This
          platform provides essential support for independent learning and skill
          development, ensuring students have access to valuable information and
          resources to enhance their academic journey.
        </p>
      </div>

      <div>
        <CardView />
      </div>

      <div
        className="text-center mt-12"
        style={{ color: "black", padding: "0 300px" }}
      >
        <h2
          className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl"
          style={{ color: "#27374D" }}
        >
          News and Events{" "}
        </h2>
      </div>

      <div
        className="flex justify-center gap-4 p-2 w-full items-stretch"
        style={{ marginTop: "40px" }}
      >
        <div
          className="w-2/5 flex justify-center"
          style={{ maxWidth: "600px", flex: "1 1 50%" }}
        >
          <Image
            src="/news-and-events-image.jpg"
            alt="Library Image"
            width={680}
            height={600}
            className="rounded-lg object-cover"
            style={{ marginRight: "65px", height: "100%", width: "100%" }}
          />
        </div>
        <div
          className="w-2/5 flex justify-center"
          style={{ maxWidth: "600px", flex: "1 1 50%" }}
        >
          <NewsGrid />
        </div>
      </div>

      <div
        className="flex justify-center gap-4 p-2 w-full items-stretch"
        style={{ marginTop: "40px" }}
      >
        <div
          className="w-2/5 flex justify-center"
          style={{
            maxWidth: "600px",
            flex: "1 1 50%",
            marginRight: "65px",
            height: "100%",
            width: "100%",
          }}
        >
          <NewsGrid />
        </div>
        <div
          className="w-2/5 flex justify-center"
          style={{ maxWidth: "600px", flex: "1 1 50%" }}
        >
          <Image
            src="/news-and-events-image.jpg"
            alt="Library Image"
            width={680}
            height={600}
            className="rounded-lg object-cover"
            style={{ marginRight: "65px" }}
          />
        </div>
      </div>

      <div
        className="w-full flex flex-col items-center gap-4"
        style={{
          backgroundColor: "#334155",
          height: "300px",
          marginTop: "50px",
        }}
      />
    </div>
  );
};

export default DashboardBody;
