import { GraphQLClient } from 'graphql-request';

const WORDPRESS_API_URL = 'https://imergeadvisors.com/graphql';

export const graphqlClient = new GraphQLClient(WORDPRESS_API_URL, {
  headers: {
    'Content-Type': 'application/json',
  },
});

export const GET_POSTS = `
  query GetPosts($first: Int = 10) {
    posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          name
          slug
          }
        }
      }
    }
  `;
