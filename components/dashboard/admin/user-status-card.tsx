"use client";

import React, { useEffect, useState } from "react";
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
import { createClient } from "../../../utils/supabase/client";

type UserStatusCardProps = {
  name: string;
  email: string;
};

const UserStatusCard = (props: UserStatusCardProps) => {
  const supabase = createClient();
  const [user, setUser] = useState<any>();
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUser(user);
      }
    };

    fetchUser();
  }, [supabase]);

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
            <p className="font-bold truncate w-[150px]" title={props.name}>
              {props.name.length > 20
                ? `${props.name.slice(0, 20)}...`
                : props.name}
            </p>
          </div>

          {/* Center section for email */}
          <div className="flex flex-1 items-center justify-center">
            <CardDescription
              className="text-sm truncate w-[200px]"
              title={props.email}
            >
              {props.email.length > 20
                ? `${props.email.slice(0, 20)}...`
                : props.email}
            </CardDescription>
          </div>

          {/* Right section for avatar */}
          <div className="flex flex-1 items-center justify-end">
            <Avatar className="cursor-pointer w-10 h-10">
              {user?.user_metadata?.avatar_url ? (
                <AvatarImage
                  src={user.user_metadata.avatar_url}
                  alt="User Avatar"
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
                <DialogTitle>Proof of Registration</DialogTitle>
                <DialogDescription>
                  This is the proof of registration for the user.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-1 items-center justify-center mt-4">
                <div className="relative w-full h-[600px] max-w-full">
                  {isImageLoading && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  <Image
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="Proof of Registration"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-md"
                    onLoadingComplete={handleImageLoad}
                  />
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
