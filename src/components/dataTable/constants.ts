import shortid from "shortid";

export const rows = [
  {
    id: shortid.generate(),
    complete: true,
    name: "Customizar theme",
    description: "Customizar theme de MUI",
  },
  {
    id: shortid.generate(),
    complete: true,
    name: "Buildear app",
    description: "",
  },
  {
    id: shortid.generate(),
    complete: false,
    name: "Instalar pnpm",
    description: "En esta tarea se busca reemplazar NPM por PNPM ",
  },
  {
    id: shortid.generate(),
    complete: false,
    name: "Redux ",
    description: "",
  },
  {
    id: shortid.generate(),
    complete: true,
    name: "Dynamo",
    description: "",
  },
];
