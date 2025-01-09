import SideBar from "@/components/ui/SideBar";
import Image from "next/image";
import logo from '@/icons/logo.svg'
import MobileNav from "@/components/ui/MobileNav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Mohamed', lastName: 'Kazafy'};
  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src={logo} width={30} height={30} alt="menu"/>
            <div>
              <MobileNav user={loggedIn}/>
            </div>
          </div>
        {children}
        </div>
    </main>
  );
}
