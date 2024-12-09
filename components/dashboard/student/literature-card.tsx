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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../../ui/dialog";
import { LiteratureCardProps } from "../../../types/literature-card";

const LiteratureCard = ({
  author,
  title,
  publishDate,
  abstract,
}: LiteratureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Card
      className="shadow-md hover:shadow-lg transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        if (!isDialogOpen) {
          setIsHovered(false);
        }
      }}
    >
      <CardContent className="relative p-0">
        <div
          className={`transition-opacity duration-500 ${
            isHovered || isDialogOpen ? "opacity-0" : "opacity-100"
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
            isHovered || isDialogOpen ? "opacity-100" : "opacity-0"
          } absolute inset-0 flex flex-row items-center justify-center gap-4 px-8`}
        >
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="default"
                className="w-[48%]"
                onClick={() => setIsDialogOpen(true)}
              >
                Abstract
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Abstract of {title}</DialogTitle>
                <DialogDescription>{abstract}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Button variant="default" className="w-[48%]">
            Full text
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiteratureCard;
