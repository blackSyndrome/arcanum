"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription } from "../../ui/card";
import { Button } from "../../ui/button";

type UserStatusCardProps = {
  name: string;
  email: string;
};

const UserStatusCard = (props: UserStatusCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full bg-white border rounded-md h-20 flex flex-row items-center justify-between p-2 mb-4 shadow-md hover:shadow-lg transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="relative w-full flex items-center justify-between p-4">
        <div
          className={`transition-opacity ${
            isHovered ? "opacity-0" : "opacity-100"
          } flex items-center justify-between w-full`}
          style={{
            transitionDuration: "0.5s",
            transitionDelay: isHovered ? "2s" : "0s",
          }}
        >
          <p className="font-bold truncate w-1/3">{props.name}</p>
          <CardDescription className="text-sm truncate w-1/3 mx-4">
            {props.email}
          </CardDescription>
          <Button variant="outline">Proof of Registration</Button>
        </div>

        <div
          className={`transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          } absolute inset-0 flex items-center justify-center gap-4 px-8`}
          style={{
            transitionDuration: "0.5s",
            transitionDelay: isHovered ? "2s" : "0s",
          }}
        >
          <Button variant="default" className="w-[48%]">
            Accept
          </Button>
          <Button variant="destructive" className="w-[48%]">
            Block
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserStatusCard;
