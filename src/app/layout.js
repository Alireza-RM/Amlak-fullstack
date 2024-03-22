import Layout from "@/layout/layout";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { yekan } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "پروژه املاک",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
