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
import UserStatusCard from "../../components/dashboard/admin/user-status-card"; // Uncomment this
import { Button } from "../../components/ui/button";
import { handleFetchIdentification } from "../../database-methods/crud-identification/handle-fetch-identification";

export type UserRegistration = {
  id: string;
  role: string;
  verified: boolean;
  submitted_at: Date;
  image_name: string;
  proposed_role: string;
};

const Admin = () => {
  const [students, setStudents] = useState<UserRegistration[]>([]);
  const [librarians, setLibrarians] = useState<UserRegistration[]>([]);

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
            <Button className="w-40" variant={"destructive"}>
              <span className="font-bold">View Blacklisted</span>
            </Button>
          </CardTitle>
          <CardDescription>
            Accept or block users from fully utilizing the app.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4 h-full overflow-hidden">
          {/* Students Section */}
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

          {/* Librarians Section */}
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
