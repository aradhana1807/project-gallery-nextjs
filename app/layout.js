
import Header from "@/components/Header";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";


export const metadata = {
  title: "Project Gallery",
  description: "A visually pleasing gallery app showcasing my projects that I have worked on",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
