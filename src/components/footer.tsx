import Link from "next/link";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-10">
          <Link
            href="/"
            className="text-2xl font-bold hover:underline text-center block">
            HMSD Adyatama
          </Link>
        
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
