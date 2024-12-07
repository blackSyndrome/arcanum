import Card from "./card";

const CardView: React.FC = () => {
  const cards = [
    {
      title: "Advanced Search",
      tagline: "Find Anything, Instantly",
      description:
        "Quickly search for books, theses, periodicals, or authors using advanced filters. Narrow results by category, publication date, or format.",
      imageSrc: "/features-image.jpg",
    },
    {
      title: "Reserve Books",
      tagline: "Never Miss Out",
      description:
        "Reserve your favorite books in advance and get notified when they’re available for pick-up or digital download.",
      imageSrc: "/features-image.jpg",
    },
    {
      title: "Virtual Help Desk",
      tagline: "Support at Your Fingertips",
      description:
        "Get real-time assistance from librarians through live chat, email, or by scheduling virtual consultations for research or technical support.",
      imageSrc: "/features-image.jpg",
    },
    {
      title: "Print Electronic Resources",
      tagline: "Access Anytime, Anywhere",
      description:
        "Explore a vast collection of both physical books and e-books, journals, and multimedia content. Switch between print and electronic formats easily.",
      imageSrc: "/features-image.jpg",
    },
  ];

  return (
    <div
      className="flex flex-wrap justify-center gap-8 p-8"
      style={{ marginTop: "20px" }}
    >
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          tagline={card.tagline}
          description={card.description}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
};

export default CardView;
