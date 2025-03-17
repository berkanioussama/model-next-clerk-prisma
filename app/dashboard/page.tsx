const Dashboard = () => {
  return (
    <main className="w-full min-h-svh">
      <div className="h-svh flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold" >This is Dashboard home page</h2>
        <h3 className="text-2xl">Only admin can see this</h3>
      </div>
    </main>
  );
}
 
export default Dashboard;