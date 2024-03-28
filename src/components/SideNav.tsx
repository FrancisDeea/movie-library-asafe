import Link from "next/link";
import LinkButton from "@/components/LinkButton";

export default function SideNav() {
  return (
    <nav className="h-full flex flex-col gap-2 p-2">
      <LinkButton link="/" value="Home" />
      <LinkButton link="/discover" value="Discover" />
      <LinkButton link="/" value="Film Stats" />
      <LinkButton link="/" value="Analytics" />
      <LinkButton link="/" value="Logout" />
    </nav>
  );
}
