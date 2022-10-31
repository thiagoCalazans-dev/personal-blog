import { gql } from "@apollo/client";
import { CalendarIcon, ChevronLeftIcon, ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Post } from ".";
import { PostContainer, TextWithIcon, TitleCard } from "../../styles/pages/Slug";
import client from "../lib/apollo";

interface PostProps {
    post: Post
}


export function Post({ post }: PostProps) {


    return (
        <PostContainer>
            <TitleCard>
                <header>
                    <Link href="/"><ChevronLeftIcon /><span>voltar</span></Link>
                    <a href={`https://github.com/thiagoCalazans-dev/Git-Blog/issues/${id}`}>
                        ver no github <ExternalLinkIcon />
                    </a>
                </header>
                <h1>{post.name}</h1>
                <footer><TextWithIcon><GitHubLogoIcon /><span>{post.author}</span></TextWithIcon>
                    <TextWithIcon>
                        <CalendarIcon />
                        <span>
                            {
                                formatDistanceToNow(new Date(post.createdAt), {
                                    addSuffix: true,
                                    locale: ptBR,
                                })
                            }
                        </span>
                    </TextWithIcon>
                </footer>
            </TitleCard>
            <article>
                {post.summary}
            </article>
        </PostContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({ params }) => {

    const slug = params.slug

    console.log(slug)

    const { data } = await client.query({
        query: gql`
    query PostQuery {
    post(where: {name: "React To-Do"}) {
    author
    createdAt
    cover {
      url
    }
    githubLink
    name
    libraries {
      name
      id
    }
    summary
    description {
      markdown
    }
  }
}
  `
    });


    return {
        props: {
            post: data.post,
        },
        revalidade: 60 * 60 * 1, //1 hour
    };
}
