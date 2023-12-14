import { gql } from '@apollo/client';

export const ELEMENT_QUERY = gql`
  query allElements {
    elements {
    _id
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
`;

export const  GET_ONE_ELEMENT = gql`
query element($name: String!) {
  element(name: $name) {
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
    image
  }
}`


export const  GET_ME = gql`

 query getMe {
  me {
    _id
    username
    email
    password
    elements {
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
      image
    }
  }
}`