import { Response } from "express";

const errorHandler = (error: Error, response: Response) => {
  console.error(error.message);
  switch (error.name) {
    case "CastError":
      return response.status(400).send({ error: "malformatted id" });
    case "Missing fields":
      return response.status(400).send({ error: error.message });
    default:
      return response.status(500).send({ error: "Unknown Error" });
  }
};

export { errorHandler };
