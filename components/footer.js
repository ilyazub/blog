import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <Container>
        <div className="py-16 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400">
          <div className="space-y-2">
            <h3 className="text-base font-semibold leading-6 text-white">Illia Zub</h3>
            <p className="max-w-xs text-gray-400">Exploring technology and creative coding</p>
          </div>
          <div className="flex gap-6">
            {/* Add social icons here */}
          </div>
        </div>
        <div className="py-8 text-center border-t border-white/10 text-sm text-gray-400">
          © {new Date().getFullYear()} All rights reserved
        </div>
      </Container>
    </footer>
  );
}
