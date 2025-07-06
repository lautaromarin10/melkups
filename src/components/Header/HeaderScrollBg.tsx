import { useEffect, useState } from "react";

const HeaderScrollBg = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-screen fixed h-24 transition-colors duration-300 z-50 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      {children}
    </header>
  );
};

export default HeaderScrollBg;
