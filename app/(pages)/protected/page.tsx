import { UserButton } from "@clerk/nextjs";

const Protected = () => {
  return (
    <main className="w-full min-h-svh">
      <div className="h-svh flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold" >This is Protected page</h2>
        <h3 className="text-2xl">Only loged in users can see this</h3>
        <div className="py-2">
          <UserButton />
        </div>
      </div>
    </main>
  );
}
 
export default Protected;