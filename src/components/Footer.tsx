const Footer = () => (
  <footer className="border-t border-accent/10 py-16">
    <div className="container mx-auto px-6 text-center">
      <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-md mx-auto italic">
        Some build tools.<br />
        Some tell stories.<br />
        I'm interested in doing both.
      </p>
      <p className="text-muted-foreground/40 text-xs font-display mt-8">
        © {new Date().getFullYear()} Medhansh K
      </p>
    </div>
  </footer>
);

export default Footer;
