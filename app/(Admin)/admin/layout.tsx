import getCurrentUser from "@/actions/getCurrentUser";
import Sidebar from "@/app/components/admin/sidebar/Sidebar";
import { redirect } from "next/navigation";


export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  if(!currentUser) {
    redirect('/login')
  }
  return (
    <div className="min-h-screen flex">
      <Sidebar currentUser={currentUser}/>
      <main className="ml-[15%] lg:ml-[22%] flex-1 py-4 px-4">
        {children}
      </main>
    </div>
  );
}