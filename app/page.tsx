import { auth } from "@/auth";
import SignInGitHub from "@/components/SignInGitHub";
import SignInGoogle from "@/components/SignInGoogle";
import SignOut from "@/components/SignOut";
import UserCard from "@/components/UserCard";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 gap-2">
      {session?.user ? (
        <>
          <UserCard />
          <SignOut />
        </>
      ) : (
        <>
          <SignInGitHub />
          <SignInGoogle />
        </>
      )}
    </main>
  );
}
