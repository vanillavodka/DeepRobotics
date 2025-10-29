import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, ArrowRight, ShoppingBag, Store } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  const [selectedModel, setSelectedModel] = useState("quadruped");
  const [selectedIndustry, setSelectedIndustry] = useState("security");

  const models = [
    { id: "quadruped", name: "四足机器人", image: "/placeholder.svg" },
    { id: "humanoid", name: "人形机器人", image: "/placeholder.svg" },
    { id: "wheeled", name: "轮足机器人", image: "/placeholder.svg" },
    { id: "joints", name: "机器人关节", image: "/placeholder.svg" },
  ];

  const industries = [
    { id: "security", name: "安全巡检" },
    { id: "rescue", name: "应急救援" },
    { id: "power", name: "电力巡检" },
    { id: "industrial", name: "工业制造" },
  ];

  const channels = [
    "搜索引擎", "社交媒体", "朋友推荐", "展会活动", "新闻媒体", "其他"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Top Image */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        <div className="container relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-block">
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
                  联系我们
                </h1>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              开启智能机器人合作之旅，共创未来科技新篇章
            </p>
          </div>
        </div>

        {/* Tech Corners */}
        <div className="absolute top-24 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/30 animate-pulse" />
        <div className="absolute top-24 right-10 w-20 h-20 border-r-2 border-t-2 border-primary/30 animate-pulse" />
      </section>

      {/* Navigation Buttons Section */}
      <section className="py-12 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Internal Links */}
            <Link to="/business" className="group relative overflow-hidden rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 hover:border-primary transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-cyber bg-clip-text text-transparent">商务合作</h3>
                  <p className="text-muted-foreground">探索合作机会</p>
                </div>
                <ArrowRight className="w-8 h-8 text-primary group-hover:translate-x-2 transition-transform" />
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-full blur-2xl" />
            </Link>

            <Link to="/supply-chain" className="group relative overflow-hidden rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 hover:border-primary transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-cyber bg-clip-text text-transparent">供应链合作</h3>
                  <p className="text-muted-foreground">加入供应链体系</p>
                </div>
                <ArrowRight className="w-8 h-8 text-primary group-hover:translate-x-2 transition-transform" />
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-full blur-2xl" />
            </Link>

            {/* External Links */}
            <a href="https://taobao.com" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 hover:border-primary transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">淘宝店铺</h3>
                  <p className="text-muted-foreground">访问官方旗舰店</p>
                </div>
                <ShoppingBag className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/5 rounded-tl-full blur-2xl" />
            </a>

            <a href="https://jd.com" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 hover:border-primary transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">京东店铺</h3>
                  <p className="text-muted-foreground">访问官方旗舰店</p>
                </div>
                <Store className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/5 rounded-tl-full blur-2xl" />
            </a>
          </div>
        </div>
      </section>

      {/* Product Selection Section */}
      <section className="py-16 relative">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
                产品咨询
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Model Selection */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-6">
                  <label className="block text-sm font-medium mb-3 text-foreground">选择型号</label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger className="bg-background/50 border-primary/30 hover:border-primary transition-colors">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card/95 backdrop-blur-xl border-primary/30">
                      {models.map((model) => (
                        <SelectItem key={model.id} value={model.id}>
                          {model.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
              </div>

              {/* Industry Selection */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-6">
                  <label className="block text-sm font-medium mb-3 text-foreground">应用行业</label>
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger className="bg-background/50 border-primary/30 hover:border-primary transition-colors">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card/95 backdrop-blur-xl border-primary/30">
                      {industries.map((industry) => (
                        <SelectItem key={industry.id} value={industry.id}>
                          {industry.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Product Display */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/30 backdrop-blur-sm p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(var(--primary-rgb),0.05)_25%,rgba(var(--primary-rgb),0.05)_50%,transparent_50%,transparent_75%,rgba(var(--primary-rgb),0.05)_75%)] bg-[length:20px_20px]" />
              
              {/* Tech Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-4">
                  <img 
                    src={models.find(m => m.id === selectedModel)?.image} 
                    alt={models.find(m => m.id === selectedModel)?.name}
                    className="w-full max-w-md h-80 object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
                  {models.find(m => m.id === selectedModel)?.name}
                </h3>
                <p className="text-muted-foreground mt-2">
                  适用于{industries.find(i => i.id === selectedIndustry)?.name}
                </p>
              </div>

              {/* Scan Line Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
                提交咨询
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            </div>

            <form onSubmit={handleSubmit} className="relative">
              <div className="relative bg-card/30 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 space-y-6">
                {/* Tech Frame */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/50" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary/50" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary/50" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/50" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-sm font-medium mb-2 text-foreground">姓名 *</label>
                    <Input 
                      required 
                      placeholder="请输入您的姓名" 
                      className="bg-background/50 border-primary/30 focus:border-primary transition-colors"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-300" />
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium mb-2 text-foreground">电话 *</label>
                    <Input 
                      required 
                      type="tel" 
                      placeholder="请输入联系电话" 
                      className="bg-background/50 border-primary/30 focus:border-primary transition-colors"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-300" />
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium mb-2 text-foreground">邮箱 *</label>
                    <Input 
                      required 
                      type="email" 
                      placeholder="请输入电子邮箱" 
                      className="bg-background/50 border-primary/30 focus:border-primary transition-colors"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-300" />
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium mb-2 text-foreground">城市/公司</label>
                    <Input 
                      placeholder="请输入所在城市或公司" 
                      className="bg-background/50 border-primary/30 focus:border-primary transition-colors"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-300" />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-medium mb-2 text-foreground">获知渠道</label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-primary/30 hover:border-primary transition-colors">
                      <SelectValue placeholder="请选择您了解我们的渠道" />
                    </SelectTrigger>
                    <SelectContent className="bg-card/95 backdrop-blur-xl border-primary/30">
                      {channels.map((channel) => (
                        <SelectItem key={channel} value={channel}>
                          {channel}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-medium mb-2 text-foreground">其他建议</label>
                  <Textarea 
                    placeholder="请告诉我们您的需求或建议..." 
                    className="bg-background/50 border-primary/30 focus:border-primary transition-colors min-h-32"
                  />
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-300" />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg py-6 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    提交咨询
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Email Section */}
      <section className="py-16 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/30 backdrop-blur-sm p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_70%)]" />
              
              {/* Animated Corner Lines */}
              <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-primary animate-pulse" />
              <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-primary animate-pulse" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-primary animate-pulse" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-primary animate-pulse" />

              <div className="relative z-10 text-center space-y-6">
                <Mail className="w-16 h-16 mx-auto text-primary animate-pulse" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">官方联系邮箱</h3>
                  <p className="text-muted-foreground mb-4">我们将在24小时内回复您的咨询</p>
                </div>
                <a 
                  href="mailto:contact@robotech.com" 
                  className="inline-block text-3xl font-bold bg-gradient-cyber bg-clip-text text-transparent hover:scale-105 transition-transform"
                >
                  contact@robotech.com
                </a>
                <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>在线服务</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span>24/7 响应</span>
                  </div>
                </div>
              </div>

              {/* Scan Line */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
