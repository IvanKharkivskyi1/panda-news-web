import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      code
      name
      capital
      currencies
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;

export const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      continent {
        name
      }
      languages {
        name
      }
      states {
        name
      }
    }
  }
`;
