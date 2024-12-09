"use client";

import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
// import UserStatusCard from "../../components/dashboard/admin/user-status-card";
import { Button } from "../../components/ui/button";
import { handleFetchIdentification } from "../../database-methods/crud-identification/handle-fetch-identification";

const Admin = () => {
  /*  const users = [
    {
      id: 1,
      name: "Romnoel Edralin Petracorta",
      email: "romnoel.petracorta@neu.edu.ph",
    },
    {
      id: 2,
      name: "Richmon Baltazar",
      email: "richmond.baltazar@neu.edu.ph",
    },
    {
      id: 3,
      name: "Kebs SideQuest Master",
      email: "kevin.lisboa@neu.edu.ph",
    },
    {
      id: 4,
      name: "Rommoniga",
      email: "romnoel.petracorta@neu.edu.ph",
    },
    {
      id: 5,
      name: "Titsy Die",
      email: "richmond.baltazar@neu.edu.ph",
    },
    {
      id: 6,
      name: "Kebs SideQuest Master",
      email: "kevin.lisboa@neu.edu.ph",
    },
    {
      id: 7,
      name: "Rommoniga",
      email: "romnoel.petracorta@neu.edu.ph",
    },
    {
      id: 8,
      name: "Titsy Die",
      email: "richmond.baltazar@neu.edu.ph",
    },
    {
      id: 9,
      name: "Kebs SideQuest Master",
      email: "kevin.lisboa@neu.edu.ph",
    },
    {
      id: 10,
      name: "Rommoniga",
      email: "romnoel.petracorta@neu.edu.ph",
    },
    {
      id: 11,
      name: "Titsy Die",
      email: "richmond.baltazar@neu.edu.ph",
    },
    {
      id: 12,
      name: "Kebs SideQuest Master",
      email: "kevin.lisboa@neu.edu.ph",
    },
    {
      id: 13,
      name: "Rommoniga",
      email: "romnoel.petracorta@neu.edu.ph",
    },
    {
      id: 14,
      name: "Titsy Die",
      email: "richmond.baltazar@neu.edu.ph",
    },
    {
      id: 15,
      name: "Kebs SideQuest Master",
      email: "kevin.lisboa@neu.edu.ph",
    },
  ];
 */
  useEffect(() => {
    const fetchIdentifications = async () => await handleFetchIdentification();

    fetchIdentifications();
  });
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
                  {/* {users.map((student) => (
                    <UserStatusCard
                      key={student.id}
                      name={student.name}
                      email={student.email}
                    />
                  ))} */}
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
                  {/*   {users.map((librarian) => (
                    <UserStatusCard
                      key={librarian.id}
                      name={librarian.name}
                      email={librarian.email}
                    />
                  ))} */}
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
