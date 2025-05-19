import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { CodeIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";


function Navbar() {
  return (
    <div>
      Navbar
      <ModeToggle />
    </div>
  );
}
export default Navbar;