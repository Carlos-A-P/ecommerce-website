const transformProductReturned = (returnedObject: any): void => {
  returnedObject.id = returnedObject._id.toString();
  delete returnedObject._id;
  delete returnedObject.__v;
};

export { transformProductReturned };
