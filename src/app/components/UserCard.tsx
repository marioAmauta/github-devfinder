import Link from "next/link";
import Image from "next/image";
import { BuildingIcon, LinkIcon, LocationIcon, TwitterIcon } from "./Icons";
import { formatDate, getUser, validateURL } from "../lib/utils";
import { Message } from "./Message";
import { GithubUser } from "../lib/interfaces";

export async function UserCard({ searchQuery }: { searchQuery: string }) {
  const foundUser = await getUser(searchQuery);

  if (foundUser.message) {
    if (foundUser.message.includes("API rate limit exceeded")) {
      return <Message message="GitHub API rate limit exceeded, try again later" />;
    }

    return <Message message={foundUser.message} />;
  }

  const { avatar_url, name, login, created_at, bio, public_repos, followers, following, location, blog, twitter_username, company }: GithubUser = foundUser;

  return (
    <article className="custom-grid-areas rounded-2xl bg-secondary-bg-light p-6 text-inherit shadow dark:bg-secondary-bg-dark sm:p-12 xsm:p-10">
      <div className="section-logo">
        <Image src={avatar_url ?? "/github-logo.png"} width={128} height={128} alt="Profile Picture" className="h-auto w-full rounded-full" priority />
      </div>
      <div className="section-title">
        <h2 className={`text-xl font-bold ${!name ? "text-font-color-secondary-light dark:text-font-color-secondary-dark" : ""}`}>{name ?? "No Name"}</h2>
        <p className="mt-2 text-custom-accent-color">@{login ?? "No_username"}</p>
      </div>
      <p className={`section-date ${created_at ? "" : "text-font-color-secondary-light dark:text-font-color-secondary-dark"}`}>
        {created_at
          ? `Joined on ${formatDate({
              date: new Date(created_at),
              locale: "en-US",
              options: { month: "long", day: "numeric", year: "numeric" }
            })}`
          : "No Date"}
      </p>
      <p className={`section-description ${bio ? "" : "text-font-color-secondary-light dark:text-font-color-secondary-dark"}`}>
        {bio ?? "This profile has no bio"}
      </p>
      <div className="section-data flex justify-evenly rounded-lg bg-primary-bg-light py-6 dark:bg-primary-bg-dark xsm:justify-around">
        <article>
          <p>Repos</p>
          <p className="mt-2 text-center xsm:text-left">{public_repos ?? 0}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="mt-2 text-center xsm:text-left">{followers ?? 0}</p>
        </article>
        <article>
          <p>Following</p>
          <p className="mt-2 text-center xsm:text-left">{following ?? 0}</p>
        </article>
      </div>
      <div className="section-contact">
        <article className="flex gap-3">
          <LocationIcon
            width="1.5rem"
            height="1.5rem"
            className={`fill-font-color-primary-light dark:fill-font-color-primary-dark ${location ? "" : "fill-font-color-secondary-light dark:fill-font-color-secondary-dark"}`}
          />
          <p className={`${location ? "" : "text-font-color-secondary-light dark:text-font-color-secondary-dark"}`}>{location ?? "No Location"}</p>
        </article>
        <article className="flex gap-3">
          <LinkIcon
            width="1.5rem"
            height="1.5rem"
            className={`fill-font-color-primary-light dark:fill-font-color-primary-dark ${blog ? "" : "fill-font-color-secondary-light dark:fill-font-color-secondary-dark"}`}
          />
          {blog ? (
            <Link href={validateURL(blog)} target="_blank" rel="noopener noreferrer" className="truncate">
              {blog}
            </Link>
          ) : (
            <p className="text-font-color-secondary-light dark:text-font-color-secondary-dark">No Location</p>
          )}
        </article>
        <article className="flex gap-3">
          <TwitterIcon
            width="1.5rem"
            height="1.5rem"
            className={`fill-font-color-primary-light dark:fill-font-color-primary-dark ${twitter_username ? "" : "fill-font-color-secondary-light dark:fill-font-color-secondary-dark"}`}
          />
          {twitter_username ? (
            <Link href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noopener noreferrer">
              {twitter_username}
            </Link>
          ) : (
            <p className="text-font-color-secondary-light dark:text-font-color-secondary-dark">No Twitter</p>
          )}
        </article>
        <article className="flex gap-3">
          <BuildingIcon
            width="1.5rem"
            height="1.5rem"
            className={`fill-font-color-primary-light dark:fill-font-color-primary-dark ${company ? "" : "fill-font-color-secondary-light dark:fill-font-color-secondary-dark"}`}
          />
          <p className={`${company ? "" : "text-font-color-secondary-light dark:text-font-color-secondary-dark"}`}>{company ?? "No Company"}</p>
        </article>
      </div>
    </article>
  );
}
