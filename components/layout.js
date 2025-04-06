import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";

export default function Layout({ preview, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Meta />
      <Alert preview={preview} />
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
