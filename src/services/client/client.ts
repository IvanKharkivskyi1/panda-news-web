import { COUNTRIES_URL } from '@/shared/constants/apiKeys';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: COUNTRIES_URL,
  cache: new InMemoryCache(),
});

export default client;
