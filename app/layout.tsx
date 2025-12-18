import "./globals.css";

export const metadata = {
  title: "CNU",
  description: "Centro de Negocios Universitario",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
