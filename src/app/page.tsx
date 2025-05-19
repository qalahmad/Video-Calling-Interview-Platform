import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-10">
      home page

      <SignedOut>
        <div className="flex gap-4 mt-4">
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="outline">Sign Up</Button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="mt-4">
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}
