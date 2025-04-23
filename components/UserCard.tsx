import { auth } from "@/auth";

export default async function UserCard() {
  const session = await auth();

  if (!session?.user)
    return (
      <div>
        <span>Not logged in.</span>
      </div>
    );

  return (
    <div className="flex gap-3">
      {session.user.image && (
        <img
          className="w-18 h-18 rounded-full"
          src={session.user.image}
          alt="User Avatar"
        />
      )}
      <div className="flex flex-col justify-center">
        <span className="text-3xl font-bold">{session.user.name}</span>
        <span className="text-2xl">{session.user.email}</span>
      </div>
    </div>
  );
}
