import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-foreground font-display font-bold text-lg">D</span>
              </div>
              <span className="font-display font-bold text-lg">Dynasty Global</span>
            </div>
            <p className="font-body text-background/80 text-sm leading-relaxed">
              Premium diagnostic medical services delivering excellence in healthcare across Nigeria.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Services</h4>
            <ul className="space-y-2 font-body text-sm text-background/80">
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Radiology
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Laboratory
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Genetic Testing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Cardiology
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Company</h4>
            <ul className="space-y-2 font-body text-sm text-background/80">
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Contact</h4>
            <ul className="space-y-2 font-body text-sm text-background/80">
              <li>Lagos, Nigeria</li>
              <li>
                <Link href="tel:+234XXX" className="hover:text-background transition-colors">
                  +234 703 920 1769
                </Link>
              </li>
              <li>
                <Link href="mailto:info@dynastyglobal.com" className="hover:text-background transition-colors">
                  info@dynastyglobal.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-sm text-background/80">
          <p>© 2025 TREF CREATIVE. 08028413136</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
