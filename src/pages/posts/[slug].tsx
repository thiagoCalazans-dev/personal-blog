import { gql } from "@apollo/client";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "..";
import {
  PostContainer,
  Technologies,
  TextWithIcon,
  TitleCard,
} from "../../../styles/pages/Slug";
import client from "../../lib/apollo";
import Image from "next/image";

interface PostProps {
  post: Post;
}

export default function Article({ post }: PostProps) {
  return (
    <PostContainer>
      {/* <TitleCard>
        <header>
          <Link href="/">
            <ChevronLeftIcon />
            <span>Back</span>
          </Link>
          <a href={`/`}>
            Github code <ExternalLinkIcon />
          </a>
        </header>
        <h1>{post.name}</h1>
        <footer>
          <TextWithIcon>
            <PersonIcon />
            <span>{post.author}</span>
          </TextWithIcon>
          <TextWithIcon>
            <CalendarIcon />
            <span>
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
                locale: enUS,
              })}
            </span>
          </TextWithIcon>
          <Technologies>
            {post.libraries.map((lib) => (
              <Image
                key={lib.name}
                src={lib.icon.url}
                alt=""
                width={16}
                height={16}
              />
            ))}
          </Technologies>
        </footer>
      </TitleCard>
      <article>{post.summary}</article> */}
    </PostContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({
  params,
}) => {
  const { slug } = params;

  const getSlugQuery = () => {
    const SLUG_QUERY = gql`
      query ($slug: String!) {
        query
        PostQuery {
          post(where: { slug: $slug }) {
            author
            createdAt
            cover {
              url
            }
            s
            githubLink
            name
            libraries {
              name
              id
              icon {
                url
              }
            }
            summary
            description {
              markdown
            }
          }
        }
      }
    `;
    return SLUG_QUERY;
  };

  const { data } = await client.query({
    query: getSlugQuery(),
    variables: {
      slug,
    },
  });

  console.log(data.post);

  return {
    props: {
      post: data.post,
    },
  };
};
