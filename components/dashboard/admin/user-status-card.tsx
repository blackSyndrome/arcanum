"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import Image from "next/image";
import { Skeleton } from "../../../components/ui/skeleton";
import { Avatar, AvatarImage } from "../../../components/ui/avatar";
import { UserRegistration } from "../../../types/user-registration";

type UserStatusCardProps = {
  user: UserRegistration;
};

const UserStatusCard = ({ user }: UserStatusCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <Card
      className="w-full bg-white border rounded-md h-20 flex flex-row items-center justify-between p-2 mb-4 shadow-md hover:shadow-lg transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="relative w-full flex items-center justify-between p-4">
        {/* Initial content that fades out when hovered */}
        <div
          className={`transition-opacity ${
            isHovered ? "opacity-0" : "opacity-100"
          } flex items-center justify-between w-full`}
          style={{
            transitionDuration: "0.5s",
          }}
        >
          {/* Left section for name */}
          <div className="flex flex-1 items-center justify-start">
            <p className="font-bold truncate w-[150px]" title={user.role}>
              {user.role}
            </p>
          </div>

          {/* Center section for email */}
          <div className="flex flex-1 items-center justify-center">
            <CardDescription
              className="text-sm truncate w-[200px]"
              title={user.proposed_role}
            >
              {user.proposed_role}
            </CardDescription>
          </div>

          {/* Right section for avatar */}
          <div className="flex flex-1 items-center justify-end">
            <Avatar className="cursor-pointer w-10 h-10">
              {user.image_name ? (
                <AvatarImage
                  src={`${user.image_name}`} // Update with the correct path logic
                  alt={`${user.role} Avatar`}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <Skeleton className="w-full h-full rounded-full" />
              )}
            </Avatar>
          </div>
        </div>

        {/* Content displayed when hovered */}
        <div
          className={`transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          } absolute inset-0 flex items-center justify-center gap-4 px-8`}
          style={{
            transitionDuration: "0.5s",
          }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-[30%]">
                Proof of Registration
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] lg:max-w-[1000px] flex flex-col p-4">
              <DialogHeader>
                <DialogTitle>{user.image_name}</DialogTitle>
                <DialogDescription>
                  User&apos;s proof of registration.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-1 items-center justify-center mt-4">
                <div className="relative w-full h-[600px] max-w-full">
                  {isImageLoading && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  {/* Place image here <Image /> */}
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="default" className="w-[30%]">
            Accept
          </Button>
          <Button variant="destructive" className="w-[30%]">
            Block
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserStatusCard;
