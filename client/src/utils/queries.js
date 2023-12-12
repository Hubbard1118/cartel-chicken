import { gql } from '@apollo/client';

export const ELEMENT_QUERY = gql`
  query {
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
  }
}`