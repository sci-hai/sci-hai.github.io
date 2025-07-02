import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import React from "react";
import { OrganizerCard } from "./OrganizerCard";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const organizers = [
  {
    name: "Shannon Zejiang Shen",
    institution: "MIT",
    imageUrl: "/images/organizers/shannon.jpg",
  },
  {
    name: "Chenglei Si",
    institution: "Stanford University",
    imageUrl: "/images/organizers/chenglei.jpg",
  },
   {
    name: "Akari Asai",
    institution: "University of Washington",
    imageUrl: "/images/organizers/akari.jpg",
  },
  {
    name: "Jenny Zhang",
    institution: "University of British Columbia",
    imageUrl: "/images/organizers/jenny.jpg",
  },
  {
    name: "Rulin Shao",
    institution: "University of Washington",
    imageUrl: "/images/organizers/rulin.jpg",
  },
 
 {
    name: "Xuefei (Julie) Wang",
    institution:  "Caltech",
    imageUrl: "/images/organizers/xuefei.jpg",
  },
  {
    name: "Atharva Sehgal",
    institution:  "UT Austin",
    imageUrl: "/images/organizers/atharva.png",
  },
  {
    name: "Linxi Zhao",
    institution:  "Cornell University",
    imageUrl: "/images/organizers/linxi.jpg",
  },
 {
    name: "Yisong Yue",
    institution:  "Caltech",
    imageUrl: "/images/organizers/yisong.jpg",
  },
  {
    name: "Mark Yatskar",
    institution:  "University of Pennsyvania",
    imageUrl: "/images/organizers/mark.jpg",
  },

 {
    name: "Jake Gardner",
    institution:  "University of Pennsyvania",
    imageUrl: "/images/organizers/jake.jpg",
  },
  {
    name: "Emma Strubell",
    institution:  "CMU",
    imageUrl: "/images/organizers/emma.jpg",
  },
 
  {
    name: "Pang Wei Koh",
    institution: "University of Washington",
    imageUrl: "/images/organizers/pangwei.jpg",
  },
  {
    name: "Diyi Yang",
    institution: "Stanford University",
    imageUrl: "/images/organizers/diyi.jpg",
  },
  {
    name: "Tatsunori Hashimoto",
    institution: "Stanford University",
    imageUrl: "/images/organizers/tatsu.jpg",
  },
  {
    name: "Arman Cohan",
    institution: "Yale University",
    imageUrl: "/images/organizers/arman.jpg",
  },
  {
    name: "Yoon Kim",
    institution: "MIT",
    imageUrl: "/images/organizers/yoon.jpg",
  },
];

export function OrganizerGrid() {
  return (
    <div
      className={cn(
        `grid gap-6 my-8`,
        `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
      )}
    >
      {organizers.map((organizer, index) => (
        <OrganizerCard
          key={index}
          name={organizer.name}
          institution={organizer.institution}
          imageUrl={organizer.imageUrl}
        />
      ))}
    </div>
  );
}


export function OrganizerGridIndex() {
  return (
    <div
      className={cn(
        `grid gap-6 my-8`,
        `grid-cols-1 md:grid-cols-2 lg:grid-cols-5`
      )}
    >
      {organizers.map((organizer, index) => (
        <OrganizerCard
          key={index}
          name={organizer.name}
          institution={organizer.institution}
          imageUrl={organizer.imageUrl}
        />
      ))}
    </div>
  );
}
