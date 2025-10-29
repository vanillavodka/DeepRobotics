import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showSupportMenu, setShowSupportMenu] = useState(false);

  const products = [
    { name: "四足机器人", path: "/products/quadruped" },
    { name: "人形机器人", path: "/products/humanoid" },
    { name: "轮足机器人", path: "/products/wheeled" },
    { name: "机器人关节", path: "/products/joints" },
  ];

  const support = [
    { name: "资源中心", path: "/resources" },
    { name: "政策与条款", path: "/policies" },
    { name: "帮助中心", path: "/help" },
    { name: "下载中心", path: "/downloads" },
  ];

  // Hover delay handlers for dropdown menus
  const productTimer = useRef<number | null>(null);
  const supportTimer = useRef<number | null>(null);

  const openProduct = () => {
    if (productTimer.current) window.clearTimeout(productTimer.current);
    setShowProductMenu(true);
  };
  const closeProductDelayed = () => {
    if (productTimer.current) window.clearTimeout(productTimer.current);
    productTimer.current = window.setTimeout(() => setShowProductMenu(false), 200);
  };

  const openSupport = () => {
    if (supportTimer.current) window.clearTimeout(supportTimer.current);
    setShowSupportMenu(true);
  };
  const closeSupportDelayed = () => {
    if (supportTimer.current) window.clearTimeout(supportTimer.current);
    supportTimer.current = window.setTimeout(() => setShowSupportMenu(false), 200);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="RoboTech Logo" className="h-8 w-7" />
            <span className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent mx-[20px]">
              TOUCH FUTURE
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              首页
            </Link>
            <Link to="/applications" className="text-foreground hover:text-primary transition-colors font-medium">
              行业应用
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative group/menu"
              onMouseEnter={openProduct}
              onMouseLeave={closeProductDelayed}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2">
                产品中心
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showProductMenu && (
                <>
                  {/* Invisible bridge to prevent gap */}
                  <div className="fixed left-0 top-20 w-64 h-2 z-40" onMouseEnter={openProduct} onMouseLeave={closeProductDelayed} />
                  <div className="fixed left-0 top-20 w-64 bg-card/95 backdrop-blur-xl border-r border-primary/30 shadow-glow overflow-hidden z-50 animate-slide-in-left" onMouseEnter={openProduct} onMouseLeave={closeProductDelayed}>
                    <div className="p-2">
                      {products.map((product, idx) => (
                        <Link
                          key={product.path}
                          to={product.path}
                          className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-all rounded-lg mb-1 relative overflow-hidden group"
                          style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                          <div className="absolute left-0 top-0 h-full w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                          <span className="relative z-10">{product.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              关于云深处
            </Link>
            
            {/* Support Dropdown */}
            <div 
              className="relative group/menu"
              onMouseEnter={openSupport}
              onMouseLeave={closeSupportDelayed}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2">
                服务支持
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showSupportMenu && (
                <>
                  {/* Invisible bridge to prevent gap */}
                  <div className="fixed right-0 top-20 w-64 h-2 z-40" onMouseEnter={openSupport} onMouseLeave={closeSupportDelayed} />
                  <div className="fixed right-0 top-20 w-64 bg-card/95 backdrop-blur-xl border-l border-primary/30 shadow-glow overflow-hidden z-50 animate-slide-in-right" onMouseEnter={openSupport} onMouseLeave={closeSupportDelayed}>
                    <div className="p-2">
                      {support.map((item, idx) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-all rounded-lg mb-1 relative overflow-hidden group"
                          style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                          <div className="absolute right-0 top-0 h-full w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                          <span className="relative z-10">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link to="/news" className="text-foreground hover:text-primary transition-colors font-medium">
              新闻资讯
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                联系我们
              </Button>
            </Link>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
              在线咨询
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
