module.exports = {
  type: "object",
  properties: {
    rooms: {
      type: "number",
      minimum: 0
    },
    name: {
      type: "string",
      pattern: "^[a-zA-Z0-9\\s,'-]*$",
      minLength: 1,
      maxLength: 99
    },
    price: {
      type: "number",
      minimum: 0
    },
    description: {
      type: "string",
      pattern: "^[a-zA-Z0-9\\s,'-]*$",
      minLength: 1,
      maxLength: 999
    }
  },
  required: ["rooms", "name", "price", "description"],
  errorMessage: {
    properties: {
      rooms: "Incorrect format of rooms count, use numbers only",
      name: "Incorrect format of name, use latin letters, numbers and spaces only",
      price: "Incorrect format of price, use numbers only",
      description: "Incorrect format of user address, use latin letters, numbers and spaces only"
    },
  }
}