import { signIn } from "@/auth";
import { Button } from "@/components/Button";

export default function SignInGitHub() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit">
        <span>Sign in with GitHub</span>
      </Button>
    </form>
  );
}
