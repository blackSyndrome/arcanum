import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import LiteratureCard from "../../../components/dashboard/student/literature-card";
import { ScrollArea } from "../../../components/ui/scroll-area";

// Sample data for literature
const literatureData = [
  {
    author: "George Orwell",
    title: "1984",
    publishDate: "1949-06-08",
    abstract:
      "A dystopian novel set in a totalitarian society ruled by Big Brother.",
  },
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    publishDate: "1960-07-11",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsam sint hic unde aspernatur. Aspernatur tempore, incidunt necessitatibus corporis sequi illum. Non eius, deleniti et incidunt ipsum nam magni! Voluptatum.",
  },
  {
    author: "J.R.R. Tolkien",
    title: "The Hobbit",
    publishDate: "1937-09-21",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsam sint hic unde aspernatur. Aspernatur tempore, incidunt necessitatibus corporis sequi illum. Non eius, deleniti et incidunt ipsum nam magni! Voluptatum.",
  },
  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    publishDate: "1813-01-28",
    abstract:
      "A classic romantic novel that explores themes of love and societal expectations.",
  },
  {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    publishDate: "1925-04-10",
    abstract:
      "A tale of the American dream, wealth, and the elusive pursuit of happiness.",
  },
  {
    author: "Mary Shelley",
    title: "Frankenstein",
    publishDate: "1818-01-01",
    abstract:
      "A story of a scientist who creates life and faces the consequences of playing god.",
  },
];

const recommendedLiteratureData = [
  {
    author: "Mark Twain",
    title: "The Adventures of Huckleberry Finn",
    publishDate: "1884-12-10",
    abstract:
      "A story of friendship, adventure, and the quest for freedom during the pre-Civil War era.",
  },
  {
    author: "Herman Melville",
    title: "Moby Dick",
    publishDate: "1851-10-18",
    abstract:
      "An epic tale of obsession, revenge, and the battle between man and nature.",
  },
];

const Student = () => {
  return (
    <div className="flex w-full h-screen p-4 gap-4 overflow-hidden">
      <div className="flex-[2] h-full overflow-hidden">
        {/* Literature section */}
        <Card className="w-full h-full flex flex-col mb-4">
          <CardHeader>
            <CardTitle>Literatures</CardTitle>
            <CardDescription>
              Here you can find an array of different theses and journals to
              browse.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 h-full overflow-hidden">
            <ScrollArea className="h-full">
              <div className="grid grid-cols-3 gap-4">
                {literatureData.map((lit, index) => (
                  <LiteratureCard
                    key={index}
                    author={lit.author}
                    title={lit.title}
                    publishDate={lit.publishDate}
                    abstract={lit.abstract}
                  />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
      <div className="flex-[1] h-full overflow-hidden">
        {/* Recommended section */}
        <Card className="w-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Recommended</CardTitle>
            <CardDescription>Literatures for everyone to see.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 h-full overflow-hidden">
            <ScrollArea className="h-full">
              <div className="grid grid-cols-1 gap-4">
                {recommendedLiteratureData.map((lit, index) => (
                  <LiteratureCard
                    key={index}
                    author={lit.author}
                    title={lit.title}
                    publishDate={lit.publishDate}
                    abstract={lit.abstract}
                  />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Student;
