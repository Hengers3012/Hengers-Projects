import Navbar from "@/components/Nav_Bar/Navbar";

interface Props {
  children: React.ReactNode;
}

function HomeLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
export default HomeLayout;
