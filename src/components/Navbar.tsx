import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
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
              className="relative"
              onMouseEnter={() => setShowProductMenu(true)}
              onMouseLeave={() => setShowProductMenu(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                产品中心
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showProductMenu && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-glow overflow-hidden animate-fade-in z-50">
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              关于云深处
            </Link>
            
            {/* Support Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowSupportMenu(true)}
              onMouseLeave={() => setShowSupportMenu(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                服务支持
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showSupportMenu && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-glow overflow-hidden animate-fade-in z-50">
                  {support.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/news" className="text-foreground hover:text-primary transition-colors font-medium">
              新闻资讯
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
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
