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
import { Profile } from "../pages";

interface ProfileCardProps {
  profile: Profile
}

export function ProfileCard({ profile }: ProfileCardProps) {
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
          <strong>{profile.name}</strong>
        </header>
        <p>
          {profile.description}
        </p>
        <footer>
          <a href={profile.urlGithub}>
            <GitHubLogoIcon />
            <span>Github</span>
          </a>
          <a href={profile.urlCompany}>
            <IdCardIcon />
            <span>Company</span>
          </a>
          <a href={profile.urlLinkedin}>
            <LinkedInLogoIcon />
            <span>Linkedin</span>
          </a>
        </footer>
      </ProfileContent>
    </ProfileCardContainer>
  );
}
