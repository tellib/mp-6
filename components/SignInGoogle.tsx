import { signIn } from "@/auth";
import { Button } from "@/components/Button";

export default function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit">
        <span>Sign in with Google</span>
      </Button>
    </form>
  );
}
