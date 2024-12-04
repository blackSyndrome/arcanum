import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LiteratureCard from "@/components/dashboard/student/Card";
import { ScrollArea } from "@/components/ui/scroll-area";

const literatureData = [
  { author: "George Orwell", title: "1984", publishDate: "1949-06-08" },
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    publishDate: "1960-07-11",
  },
  { author: "J.R.R. Tolkien", title: "The Hobbit", publishDate: "1937-09-21" },
  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    publishDate: "1813-01-28",
  },
  {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    publishDate: "1925-04-10",
  },
  { author: "Mary Shelley", title: "Frankenstein", publishDate: "1818-01-01" },
  { author: "George Orwell", title: "1984", publishDate: "1949-06-08" },
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    publishDate: "1960-07-11",
  },
  { author: "J.R.R. Tolkien", title: "The Hobbit", publishDate: "1937-09-21" },
  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    publishDate: "1813-01-28",
  },
  {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    publishDate: "1925-04-10",
  },
  { author: "Mary Shelley", title: "Frankenstein", publishDate: "1818-01-01" },
  { author: "George Orwell", title: "1984", publishDate: "1949-06-08" },
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    publishDate: "1960-07-11",
  },
  { author: "J.R.R. Tolkien", title: "The Hobbit", publishDate: "1937-09-21" },
  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    publishDate: "1813-01-28",
  },
  {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    publishDate: "1925-04-10",
  },
  { author: "Mary Shelley", title: "Frankenstein", publishDate: "1818-01-01" },
  { author: "George Orwell", title: "1984", publishDate: "1949-06-08" },
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    publishDate: "1960-07-11",
  },
  { author: "J.R.R. Tolkien", title: "The Hobbit", publishDate: "1937-09-21" },
  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    publishDate: "1813-01-28",
  },
  {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    publishDate: "1925-04-10",
  },
  { author: "Mary Shelley", title: "Frankenstein", publishDate: "1818-01-01" },
];

const Student = () => {
  return (
    <div className="flex w-full h-screen p-4 gap-4 overflow-hidden">
      <div className="flex-[2] h-full overflow-hidden">
        <Card className="w-full h-full flex flex-col">
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
                  />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
      <div className="flex-[1] h-full overflow-hidden">
        <Card className="w-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Recommended</CardTitle>
            <CardDescription>Literatures for everyone to see.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 h-full overflow-hidden">
            <ScrollArea className="h-full">
              <div className="grid grid-cols-1 gap-4">
                {literatureData.map((lit, index) => (
                  <LiteratureCard
                    key={index}
                    author={lit.author}
                    title={lit.title}
                    publishDate={lit.publishDate}
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
