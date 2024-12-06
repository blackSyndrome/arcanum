"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { handleCreateIdentification } from "@/database-methods/crud-identification/handleCreateIdentification";
import { useRouter } from "next/navigation";
import { handleUploadIdentficationRegistration } from "@/database-methods/crud-identification/handleUploadIdentificationRegistration";

const Role = () => {
  const [selectedRole, setSelectedRole] = useState<
    "student" | "librarian" | null
  >(null);
  const [showFileInput, setShowFileInput] = useState(false);
  const [fading, setFading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleClick = (role: "student" | "librarian") => {
    if (selectedRole === role) return;

    // Clear the file when switching roles
    setFile(null);

    if (showFileInput) {
      setFading(true);
      setTimeout(() => {
        setSelectedRole(role);
        setFading(false);
      }, 300);
    } else {
      setSelectedRole(role);
      setTimeout(() => setShowFileInput(true), 300);
    }
  };

  const getLabelText = () => {
    if (selectedRole === "student") {
      return "Please upload your current academic year's COM.";
    } else if (selectedRole === "librarian") {
      return "Please upload a librarian identification card.";
    }
    return "";
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card
        className={`w-[600px] ${selectedRole ? "animate-expand" : "h-[200px]"}`}
      >
        <CardHeader>
          <CardTitle>What&apos;s your role within the university?</CardTitle>
          <CardDescription>Choose between the options.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <div className="flex justify-center gap-20">
            <Button
              className="w-[120px]"
              variant={selectedRole === "student" ? undefined : "outline"}
              onClick={() => handleClick("student")}
            >
              Student
            </Button>
            <Button
              className="w-[120px]"
              variant={selectedRole === "librarian" ? undefined : "outline"}
              onClick={() => handleClick("librarian")}
            >
              Librarian
            </Button>
          </div>
          <div
            className={`mt-12 grid w-full max-w-sm items-center gap-1.5 transition-opacity duration-300 ${
              showFileInput
                ? fading
                  ? "opacity-0"
                  : "opacity-100"
                : "opacity-0"
            }`}
          >
            <Label htmlFor="picture" className="text-center mb-2">
              {getLabelText()}
            </Label>
            <Input
              id="picture"
              type="file"
              className="mx-auto"
              onChange={handleFileChange}
            />
            <Button
              variant={"default"}
              disabled={!file}
              className={`transition-opacity duration-300 ${
                file ? "opacity-100" : "opacity-50"
              }`}
              onClick={async () => {
                if (!file || !file.name || !selectedRole) {
                  console.log("Missing file or selected role"); //TODO: Display
                  return;
                }

                try {
                  // TODO: Display user-friendly message for errors
                  const { error: createError } =
                    await handleCreateIdentification(file.name, selectedRole);

                  if (createError) {
                    console.log("Error creating identification:", createError);
                    return;
                  }

                  const { data, error: uploadError } =
                    await handleUploadIdentficationRegistration(
                      file.name,
                      file
                    );

                  if (uploadError) {
                    console.log("Error uploading image:", uploadError);
                    return;
                  }

                  if (data) {
                    router.push("/dashboard/guest");
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Role;
