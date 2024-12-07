import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { createClient } from "../../../utils/supabase/server";

const Admin = () => {
  

  return (
    <div className="flex w-full h-screen p-4 gap-4 overflow-hidden">
      <Card className="w-full h-full flex flex-col">
        <CardHeader>
          <CardTitle>Admin Console</CardTitle>
          <CardDescription>
            Manage student and librarian roles and data here.
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
                <ScrollArea className="h-full"></ScrollArea>
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
                  {/* Content for librarian management */}
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
