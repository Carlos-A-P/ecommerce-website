import { Response } from "express";

const errorHandler = (error: Error, response: Response) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }
  return response.status(500).send({ error: "Unknown Error" });
};

export { errorHandler };
