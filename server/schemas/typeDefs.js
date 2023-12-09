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

type Query {
  users: [User]
  user(username: String!): User
  elements: [Element]
  element(name: String!): Element
}

query Query {
  Element {
    name
    symbol
    atomicNumber
    atomicMass
    category
    group
    period
    block
    electronConfiguration
    electronegativity
  }
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
