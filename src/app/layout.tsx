import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { siteConfig } from "@config/site";
import { lilitaOne } from "@config/fonts";
import { Navbar, WhatsappButton } from "@/components";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          lilitaOne.variable
        )}
      >
        <div className="relative flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <WhatsappButton />
          <footer className="w-full"></footer>
        </div>
      </body>
    </html>
  );
}
