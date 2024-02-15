import Footer from "@/components/dashboard/footer/footer";
import Navbar from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <div className="border-tremor-border sticky top-0 h-dvh flex-[1] border-r py-5">
        <Sidebar />
      </div>
      <div className="flex-[4]">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
}
