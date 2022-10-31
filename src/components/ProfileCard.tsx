import {
  GitHubLogoIcon,
  IdCardIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import {
  ProfileCardContainer,
  ProfileContent,
} from "../../styles/components/ProfileCard";
import Image from "next/image";

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <Image
        src="https://github.com/thiagoCalazans-dev.png"
        alt="imagem do usuario"
        width={148}
        height={148}
      />
      <ProfileContent>
        <header>
          <strong>NOME</strong>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem quaerat sunt commodi laboriosam sapiente, molestias
        </p>
        <footer>
          <a>
            <GitHubLogoIcon />
            <span>Github</span>
          </a>
          <a>
            <IdCardIcon />
            <span>Company</span>
          </a>
          <a>
            <LinkedInLogoIcon />
            <span>Linkedin</span>
          </a>
        </footer>
      </ProfileContent>
    </ProfileCardContainer>
  );
}
