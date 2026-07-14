import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Mednic Complex | Dental, Skin & Aesthetic Care in Johar Town, Lahore",
  description: "Mednic Complex is a premier clinic in Johar Town, Lahore. We offer expert dental care, skin treatments, aesthetic procedures, and general medical consultations. Book your appointment today.",
  keywords: "medical clinic johar town, aesthetic clinic lahore, dental clinic johar town, skin treatments johar town, dermatologist lahore, mednic complex, best aesthetician johar town",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
