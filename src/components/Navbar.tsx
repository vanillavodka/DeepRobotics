import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
const Navbar = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="RoboTech Logo" className="w-auto h-6 " />
            <span className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent mx-[20px]">TOUCH FUTURE
          </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">产品中心</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">行业应用</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">关于云深处</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">服务支持</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
              联系我们
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navbar;