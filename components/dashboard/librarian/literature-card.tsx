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

  return (
    <Card
      className="shadow-md hover:shadow-lg transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="relative p-4">
        <div
          className={`transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
            }`}
        >
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>By {author}</CardDescription>
          </CardHeader>
          <p>Published on: {publishDate}</p>
        </div>
        <div
          className={`transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
            } absolute inset-0 flex flex-row items-center justify-center gap-4 px-8`}
        >
          <Button variant="default" className="w-[60%]">
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiteratureCard;
