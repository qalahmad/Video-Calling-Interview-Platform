import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
  <div className="m-10">
     <SignedOut>
        <SignInButton />
      </SignedOut>

       <SignedIn>
        <UserButton />
       </SignedIn>
  </div>
  );
}
