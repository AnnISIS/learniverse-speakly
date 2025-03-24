
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/40 py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                说学
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              个性化AI驱动的英语学习平台，通过自适应学习帮助您达到流利水平。
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">功能</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">个性化学习</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">互动练习</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">进度追踪</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">口语练习</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">资源</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">博客</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">帮助中心</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">联系我们</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">隐私政策</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} 说学. 保留所有权利.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
