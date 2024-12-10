"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import UserStatusCard from "../../components/dashboard/admin/user-status-card";
import { Button } from "../../components/ui/button";
import { handleFetchIdentification } from "../../database-methods/crud-identification/handle-fetch-identification";
import { UserRegistration } from "../../types/user-registration";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import LiteratureCard from "../../components/dashboard/librarian/literature-card";
import StudentLiteratureCard from "../../components/dashboard/student/literature-card";
import { Textarea } from "../../components/ui/textarea";
import { DatePicker } from "../../components/dashboard/librarian/date-picker";

const Admin = () => {
  const studentLiteratureData = [
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

  const librarianLiteratureData = [
    { author: "George Orwell", title: "1984", publishDate: "1949-06-08" },
    {
      author: "Harper Lee",
      title: "To Kill a Mockingbird",
      publishDate: "1960-07-11",
    },
    {
      author: "J.R.R. Tolkien",
      title: "The Hobbit",
      publishDate: "1937-09-21",
    },
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
    {
      author: "Mary Shelley",
      title: "Frankenstein",
      publishDate: "1818-01-01",
    },
  ];

  const [students, setStudents] = useState<UserRegistration[]>([]);
  const [librarians, setLibrarians] = useState<UserRegistration[]>([]);
  const [selectedView, setSelectedView] = useState("admin");

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

  useEffect(() => {
    const fetchIdentifications = async () => {
      const { data, error } = await handleFetchIdentification();

      if (error) {
        console.error("Error fetching identifications:", error);
        return;
      }

      if (data) {
        const studentList = data.filter(
          (user: UserRegistration) => user.proposed_role === "student"
        );
        const librarianList = data.filter(
          (user: UserRegistration) => user.proposed_role === "librarian"
        );

        setStudents(studentList);
        setLibrarians(librarianList);
      }
    };

    fetchIdentifications();
  }, []);

  return (
    <div className="flex w-full h-screen p-4 gap-4 overflow-hidden">
      <Card className="w-full h-full flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Admin Console{" "}
            <div className="flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-40" variant={"default"}>
                    <span className="font-bold">View Mode</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Select View</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={selectedView}
                    onValueChange={setSelectedView}
                  >
                    <DropdownMenuRadioItem value="admin">
                      Admin
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="students">
                      Students
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="librarians">
                      Librarians
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="w-40" variant={"secondary"}>
                <span className="font-bold">View Blacklisted</span>
              </Button>
            </div>
          </CardTitle>
          <CardDescription>
            Accept or block users from fully utilizing the app.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4 h-full overflow-hidden">
          {/* Conditional rendering based on selected view */}
          {selectedView === "admin" && (
            <>
              <div className="flex-1 h-full overflow-hidden">
                <Card className="w-full h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>Students</CardTitle>
                    <CardDescription>
                      Manage student roles and data here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 h-full overflow-hidden">
                    <ScrollArea className="h-full">
                      {students.map((student) => (
                        <UserStatusCard key={student.id} user={student} />
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
              <div className="flex-1 h-full overflow-hidden">
                <Card className="w-full h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>Librarians</CardTitle>
                    <CardDescription>
                      Manage librarian roles and data here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 h-full overflow-hidden">
                    <ScrollArea className="h-full">
                      {librarians.map((librarian) => (
                        <UserStatusCard key={librarian.id} user={librarian} />
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {selectedView === "students" && (
            <div className="flex-1 h-full overflow-hidden">
              <Card className="w-full h-full flex flex-col mb-4">
                <CardHeader>
                  <CardTitle>Literatures</CardTitle>
                  <CardDescription>
                    Here you can find an array of different theses and journals
                    to browse.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 h-full overflow-hidden">
                  <ScrollArea className="h-full">
                    <div className="grid grid-cols-3 gap-4">
                      {studentLiteratureData.map((lit, index) => (
                        <StudentLiteratureCard
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
          )}

          {selectedView === "librarians" && (
            <div className="flex-1 h-full flex flex-col">
              <Card className="w-full h-full flex flex-col">
                <CardHeader className="flex items-left justify-between">
                  <div>
                    <CardTitle>Literatures</CardTitle>
                    <CardDescription>
                      Here you can find an array of different theses and
                      journals to manage.
                    </CardDescription>
                  </div>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="default"
                        onClick={() => setIsDialogOpen(true)}
                      >
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
                      {librarianLiteratureData.map((lit, index) => (
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
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
