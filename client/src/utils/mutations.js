import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_ELEMENT = gql`
mutation Mutation($elementData: ElementInput!) {
  savedElements(elementData: $elementData) {
    _id
    username
    email
    password
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
      image
      compounds {
        name
        formula
        molecularWeight
      }
    }
  }
}`;

export const REMOVE_ELEMENT = gql`
mutation Mutation($elementData: ElementInput!) {
  removeElement(elementData: $elementData) {
    _id
    username
    email
    password
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
      image
      compounds {
        name
        formula
        molecularWeight
      }
    }
  }
}`;