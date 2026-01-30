import { useLanguage } from '@/contexts/LanguageContext';
import { 
  GraduationCap, 
  Github, 
  Mail, 
  Twitter,
  Linkedin,
  ExternalLink
} from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.home, href: '#hero' },
    { label: t.papers, href: '#papers' },
    { label: t.datasets, href: '#datasets' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:example@email.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">ResearchBank</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t.footerDesc}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.contact}</h3>
            <div className="space-y-3 text-slate-400">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:research@example.com"
                  className="hover:text-white transition-colors"
                >
                  research@example.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  github.com/yourusername
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} ResearchBank. {t.copyright}
            </p>
            <p className="text-slate-600 text-sm">
              Built with React + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
