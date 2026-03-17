import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

type Props = {
  children: React.ReactNode;
};

export default function BlogLayout({ children }: Props) {
  return (
    <div>
      <Navbar ignore />
      <main>{children} </main>
      <Footer />
    </div>
  );
}
