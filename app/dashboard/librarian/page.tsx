"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import LiteratureCard from "../../../components/dashboard/librarian/literature-card";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Button } from "../../../components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";
import { DatePicker } from "../../../components/dashboard/librarian/date-picker";

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
];

const Librarian = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [abstract, setAbstract] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleAddLiterature = () => {
    console.log("New literature added:", {
      title,
      author,
      publishDate,
      abstract,
      file,
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="flex w-full h-screen p-4 gap-4 overflow-hidden">
      <div className="flex-[2] h-full overflow-hidden">
        <Card className="w-full h-full flex flex-col">
          <CardHeader className="flex items-left justify-between">
            <div>
              <CardTitle>Literatures</CardTitle>
              <CardDescription>
                Here you can find an array of different theses and journals to
                browse.
              </CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="default" onClick={() => setIsDialogOpen(true)}>
                  <PlusIcon className="mr-2 h-4 w-4" /> Add
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] lg:max-w-[1000px]">
                <DialogHeader>
                  <DialogTitle>Add New Literature</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 p-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      type="text"
                      placeholder="How To Win Friends And Influence People"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      type="text"
                      placeholder="Dale Carnegie"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="publishDate">Publication Date</Label>
                    <div className="relative">
                      <DatePicker
                        selectedDate={publishDate}
                        setSelectedDate={setPublishDate}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="abstract">Abstract</Label>
                    <Textarea
                      id="abstract"
                      placeholder="A brief summary of the literature."
                      value={abstract}
                      onChange={(e) => setAbstract(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="file">File</Label>
                    <Input
                      id="file"
                      type="file"
                      onChange={(e) =>
                        setFile(e.target.files ? e.target.files[0] : null)
                      }
                    />
                  </div>

                  <Button
                    variant="default"
                    className="mt-4"
                    onClick={handleAddLiterature}
                  >
                    Add Literature
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
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

export default Librarian;
