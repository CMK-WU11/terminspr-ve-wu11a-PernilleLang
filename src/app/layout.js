import "./globals.css";


export const metadata = {
  title: "Fitness Verden",
  description: "Fitness Verden assigment",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
