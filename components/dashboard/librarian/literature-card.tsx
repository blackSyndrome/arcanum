"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { DatePicker } from "../librarian/date-picker";

type LiteratureCardProps = {
  author: string;
  title: string;
  publishDate: string;
};

const LiteratureCard = ({
  author,
  title,
  publishDate,
}: LiteratureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editAuthor, setEditAuthor] = useState(author);
  const [editPublishDate, setEditPublishDate] = useState(publishDate);
  const [editAbstract, setEditAbstract] = useState("");

  const handleEditLiterature = () => {
    console.log("Updated literature details:", {
      editTitle,
      editAuthor,
      editPublishDate,
      editAbstract,
    });
    setIsDialogOpen(false);
  };

  return (
    <Card
      className="shadow-md hover:shadow-lg transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="relative p-0">
        <div
          className={`transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>By {author}</CardDescription>
            <p>Published on: {publishDate}</p>
          </CardHeader>
        </div>
        <div
          className={`transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          } absolute inset-0 flex flex-row items-center justify-center gap-4 px-8`}
        >
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="default"
                className="w-[60%]"
                onClick={() => setIsDialogOpen(true)}
              >
                Edit
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] lg:max-w-[1000px]">
              <DialogHeader>
                <DialogTitle>Edit Literature Details</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 p-4">
                <div>
                  <Label htmlFor="editTitle">Title</Label>
                  <Input
                    id="editTitle"
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="editAuthor">Author</Label>
                  <Input
                    id="editAuthor"
                    type="text"
                    value={editAuthor}
                    onChange={(e) => setEditAuthor(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="editPublishDate">Publication Date</Label>
                  <div>
                    <DatePicker
                      selectedDate={editPublishDate}
                      setSelectedDate={setEditPublishDate}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="editAbstract">Abstract</Label>
                  <Textarea
                    id="editAbstract"
                    placeholder="Enter the abstract here"
                    value={editAbstract}
                    onChange={(e) => setEditAbstract(e.target.value)}
                  />
                </div>

                <Button
                  variant="default"
                  className="mt-4"
                  onClick={handleEditLiterature}
                >
                  Save Changes
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiteratureCard;
