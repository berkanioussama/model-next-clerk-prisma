import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="w-full min-h-svh">
      <div className="h-svh flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold" >This is home page</h2>
        <h3 className="text-2xl">A public page. any one can see this</h3>
        
        
        <SignedOut>
          <div className="flex gap-4 py-2">
            <SignInButton>
              <button className="px-3 py-2 border rounded-xl">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="px-3 py-2 border rounded-xl">Sign Up</button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="py-2">
            <UserButton />
          </div>
        </SignedIn>
        
      </div>
    </main>
  );
}
