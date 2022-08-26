module.exports = {
  type: "object",
  properties: {
    rooms: {
      type: "number",
      minimum: 1,
      maximum: 10
    },
    name: {
      type: "string",
      pattern: "^(.|\s)*[a-zA-Z]+(.|\s)*$",
      minLength: 1,
      maxLength: 99
    },
    price: {
      type: "number",
      minimum: 1
    },
    description: {
      type: "string",
      pattern: "^(.|\s)*[a-zA-Z]+(.|\s)*$",
      minLength: 1,
      maxLength: 999
    }
  },
  required: ["rooms", "name", "price", "description"],
  errorMessage: {
    properties: {
      rooms: "Incorrect format of rooms count, use numbers only",
      name: "Incorrect format of name, use alphabets, special characters, spaces, new line and presumably numbers only",
      price: "Incorrect format of price, use numbers only",
      description: "Incorrect format of description, use alphabets, special characters, spaces, new line and presumably numbers only"
    },
  }
}