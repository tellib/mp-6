import { signOut } from "@/auth";
import { Button } from "@/components/Button";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">
        <span>Sign Out</span>
      </Button>
    </form>
  );
}
