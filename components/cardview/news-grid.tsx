import { Button } from "../ui/button";

interface NewsCardProps {
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description }) => {
  return (
    <div
      className="w-100 bg-white rounded-lg shadow-lg p-10 flex flex-col justify-between"
      style={{ backgroundColor: "#FFFFFF", height: "100%" }}
    >
      <h3 className="text-2xl font-semibold mb-3 text-center">{title}</h3>
      <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
        {description}
      </p>
      <div className="flex justify-center mt-5">

        <Button variant="outline">Read More</Button>
      </div>
    </div>
  );
};

const NewsGrid: React.FC = () => {
  const newsItems = [
    {
      title: "New E-Book Collection Launch",
      description:
        "We’re excited to announce the addition of over 1,000 new e-books to our Virtual School Library! Explore a diverse range of genres, including fiction, non-fiction, and educational materials.",
    },
    {
      title: "Research Skills Workshop",
      description:
        "Enhance your research skills with our upcoming workshop on November 20th at 1 PM. Learn tips and strategies for effective online research and citing sources properly.",
    },
  ];

  return (
    <div
      className="flex justify-center gap-10 w-full items-stretch"
      style={{ width: "100%" }}
    >
      {newsItems.map((item) => (
        <NewsCard
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default NewsGrid;
