import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              开启智能机器人时代
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            立即联系我们，获取专属解决方案和技术咨询服务
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-strong transition-all text-lg px-10 py-7"
            >
              预约演示
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="group border-primary/50 hover:border-primary text-foreground hover:bg-primary/10 text-lg px-10 py-7"
            >
              <Mail className="mr-2 h-5 w-5" />
              联系我们
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-sm text-muted-foreground mb-2">邮箱</div>
              <div className="text-foreground font-medium">contact@robot-tech.com</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-sm text-muted-foreground mb-2">电话</div>
              <div className="text-foreground font-medium">400-888-8888</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-sm text-muted-foreground mb-2">地址</div>
              <div className="text-foreground font-medium">北京市中关村科技园</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
