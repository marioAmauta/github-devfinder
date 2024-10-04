import Image from "next/image";

import { getUser } from "@/lib/api";
import { GithubUser } from "@/lib/interfaces";
import { cn, formatDate, validateURL } from "@/lib/utils";

import { LinkExternal } from "@/components/link-external";
import { Message } from "@/components/message";
import { BuildingIcon, LinkIcon, LocationIcon, TwitterIcon } from "@/components/ui/icons";

export async function UserCard({ searchQuery }: { searchQuery: string }) {
  const foundUser = await getUser(searchQuery);

  if (foundUser.message) {
    if (foundUser.message.includes("API rate limit exceeded")) {
      return <Message message="GitHub API rate limit exceeded, try again later" />;
    }

    return <Message message={foundUser.message} />;
  }

  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company
  }: GithubUser = foundUser;

  const userStats: { label: string; data: number }[] = [
    {
      label: "Repos",
      data: public_repos ?? 0
    },
    {
      label: "Followers",
      data: followers ?? 0
    },
    {
      label: "Following",
      data: following ?? 0
    }
  ];

  return (
    <article className="custom-grid-areas rounded-2xl bg-primary px-6 py-10 shadow">
      <section className="section-logo">
        <Image
          src={avatar_url ?? "/github-logo.png"}
          alt="Profile Picture"
          width={128}
          height={128}
          priority
          className="h-auto w-full rounded-full"
        />
      </section>
      <section className="section-title">
        <h2 className={cn("text-xl font-bold", !name && "text-secondary")}>{name ?? "No Name"}</h2>
        <p className="mt-2 text-accent">@{login ?? "No_username"}</p>
      </section>
      <p className={cn("section-date", !created_at && "text-secondary")}>
        {!created_at
          ? "No Joined Date"
          : `Joined on ${formatDate({
              date: new Date(created_at),
              locale: "en-US",
              options: { month: "long", day: "numeric", year: "numeric" }
            })}`}
      </p>
      <p className={cn("section-description", !bio && "text-secondary")}>{bio ?? "This profile has no bio"}</p>
      <section className="section-data flex flex-wrap justify-evenly rounded-lg bg-background py-6 xsm:justify-around">
        {userStats.map(({ label, data }) => (
          <article key={label}>
            <p>{label}</p>
            <p className="mt-2 text-center xsm:text-left">{data}</p>
          </article>
        ))}
      </section>
      <section className="section-contact">
        <article className="flex gap-3">
          <LocationIcon className={cn("size-6", !location && "fill-secondary")} />
          <p className={cn(!location && "text-secondary")}>{location ?? "No Location"}</p>
        </article>
        <article className="flex gap-3">
          <LinkIcon className={cn("size-6", !blog && "fill-secondary")} />
          {!blog ? (
            <p className="text-secondary">No Location</p>
          ) : (
            <LinkExternal href={validateURL(blog)} className="break-all">
              {blog}
            </LinkExternal>
          )}
        </article>
        <article className="flex gap-3">
          <TwitterIcon className={cn("size-6", !twitter_username && "fill-secondary")} />
          {!twitter_username ? (
            <p className="text-secondary">No Twitter</p>
          ) : (
            <LinkExternal href={`https://twitter.com/${twitter_username}`}>{twitter_username}</LinkExternal>
          )}
        </article>
        <article className="flex gap-3">
          <BuildingIcon className={cn("size-6", !company && "fill-secondary")} />
          <p className={cn(!company && "text-secondary")}>{company ?? "No Company"}</p>
        </article>
      </section>
    </article>
  );
}
