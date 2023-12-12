const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  password: String
}

type Auth {
  token: ID!
  user: User
}

type Element {
  name: String
  symbol: String
  atomicNumber: Float
  atomicMass: String
  category: String
  group: Float
  period: Float
  block: String
  electronConfiguration: String
  electronegativity: Float
}

type Compound {
  name: String
  formula: String
  molecularWeight: Float
}

type Query {
  users: [User]!
  user(userId: ID!): User
  elements: [Element]
  element(name: String!): Element
  compounds: [Compound]
  compound(name:String!): Compound
  me: User
}


type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
