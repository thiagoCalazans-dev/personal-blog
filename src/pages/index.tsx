import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import {
  ContentContainer,
  PostsContainer,
  PublishedInfos,
  SearchInput,
} from "../../styles/pages/Home";
import { PostCard } from "../components/PostCard";
import { ProfileCard } from "../components/ProfileCard";
import client from "../lib/apollo";

export interface Profile {
  name: string;
  description: string;
  urlGithub: string;
  urlCompany: string;
  urlLinkedin: string;
}

export interface Post {
  id: string;
  name: string;
  summary: string;
  createdAt: string;
  slug: string;
  author: string;
  cover: {
    url: string;
  };
  libraries: {
    name: string;
    icon: {
      url: string;
    };
  }[];
  description: {
    markdown: string;
  };
}

interface HomeProps {
  profile: Profile;
  posts: Post[];
}

export default function Home({ profile, posts }: HomeProps) {
  return (
    <ContentContainer>
      <ProfileCard profile={profile} />
      <PublishedInfos>
        <label>Publishes</label>
        <span>{posts.length}</span>
      </PublishedInfos>
      <form>
        <SearchInput type="text" placeholder="Search" />
      </form>
      <PostsContainer>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostsContainer>
    </ContentContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query LandingPage {
        posts {
          name
          createdAt
          slug
          summary
          libraries {
            name
            icon {
              url
            }
          }
        }
        profiles {
          name
          urlCompany
          urlGithub
          urlLinkedin
          description
        }
      }
    `,
  });

  console.log(data);

  return {
    props: {
      profile: data.profiles[0],
      posts: data.posts,
    },
  };
};
