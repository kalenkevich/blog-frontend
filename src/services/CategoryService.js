import gql from 'graphql-tag';
import CategoryFragment from '../fragments/categoryFragment';
import BackendGraphQLConnector from './BackendGraphQLConnector';

export default class CategoryService {
  static async addCategory(value) {
    const { addCategory: category } = await BackendGraphQLConnector.mutate({
      variables: { category: { value } },
      mutation: gql`
        mutation AddCategory($category: CategoryInput!) {
          addCategory(category: $category) {
            ...CategoryFragment
          }
        }
        ${CategoryFragment}
      `,
    });

    return category;
  }

  static async searchCategories(query) {
    const { searchCategory: categories } = await BackendGraphQLConnector.query({
      variables: { query },
      query: gql`
        query SearchCategory($query: String!) {
          searchCategory(query: $query) {
            ...CategoryFragment
          }
        }
        ${CategoryFragment}
      `,
    });

    return categories;
  }
}
