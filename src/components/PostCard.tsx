import { PostCardContainer, Technologies } from "../../styles/components/PostCard";
import { formatDistanceToNow } from "date-fns";
import { Post } from "../pages";
import { ptBR } from "date-fns/locale";
import Image from "next/image"

interface PostCardProps {
    post: Post
}

export function PostCard({ post }: PostCardProps) {
    return (
        <PostCardContainer href="/">
            <header>
                <strong>{post.name}</strong>
                <span>
                    {formatDistanceToNow(new Date(post.createdAt), {
                        addSuffix: true,
                        locale: ptBR,
                    })}
                </span>
            </header>
            <p>{post.summary}</p>
            <Technologies>
                {post.libraries.map((lib) => <Image key={lib.name} src={lib.icon.url} alt="" width={25} height={25} />)}
            </Technologies>
        </PostCardContainer>
    )
}


