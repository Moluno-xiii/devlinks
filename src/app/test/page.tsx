"use client";
import { Button, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

type Props = {};
const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "rabbit", label: "Rabbit" },
  { key: "hamster", label: "Hamster" },
  { key: "parrot", label: "Parrot" },
];

const page = (props: Props) => {
  return (
    <div>
      <Select
        className="max-w-xs"
        defaultSelectedKeys={["cat"]}
        label="Favorite Animal"
        placeholder="Select an animal"
        startContent={<FaGithub />}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
      <Button size="lg" color="primary">
        Click me
      </Button>
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
};

export default page;
