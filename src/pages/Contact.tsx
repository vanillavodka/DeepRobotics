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
      
      {/* Hero Section with Large Background */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Large Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/placeholder.svg" 
            alt="Contact Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.2),transparent_70%)]" />
        </div>

        {/* Animated Tech Grid Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[scan_20s_linear_infinite]" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="container relative z-10 h-full flex flex-col justify-center items-center">
          <div className="text-center space-y-8 max-w-5xl">
            {/* Animated Corner Frames */}
            <div className="relative inline-block px-12 py-8">
              <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-primary animate-pulse" />
              <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-primary animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-primary animate-pulse" style={{ animationDelay: '1.5s' }} />
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
                <span className="bg-gradient-cyber bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)]">
                  联系我们
                </span>
              </h1>
            </div>
            
            <p className="text-2xl md:text-3xl font-light text-foreground/80 backdrop-blur-sm">
              开启智能机器人合作之旅 · 共创未来科技新篇章
            </p>

            {/* Status Indicators */}
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">在线服务</span>
              </div>
              <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium">24小时响应</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-primary/30 rounded-lg animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-primary/30 rounded-lg animate-[spin_25s_linear_infinite_reverse]" />
      </section>

      {/* Navigation Buttons - Redesigned */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Title */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
                合作渠道
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            </div>

            {/* Main Navigation Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Business Cooperation */}
              <Link to="/business" className="group relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-xl border-2 border-primary/20 hover:border-primary transition-all duration-500 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tech Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(var(--primary-rgb),0.05)_49%,rgba(var(--primary-rgb),0.05)_51%,transparent_52%)] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Animated Corner Brackets */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/50 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/50 group-hover:border-primary transition-colors" />
                
                <div className="relative h-full flex flex-col justify-center items-center p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl scale-150 group-hover:scale-200 transition-transform" />
                    <ArrowRight className="w-16 h-16 text-primary relative z-10 group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-cyber bg-clip-text text-transparent">
                    商务合作
                  </h3>
                  <p className="text-muted-foreground text-lg">探索深度合作机会</p>
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-700" />
              </Link>

              {/* Supply Chain */}
              <Link to="/supply-chain" className="group relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-xl border-2 border-primary/20 hover:border-primary transition-all duration-500 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(var(--primary-rgb),0.05)_49%,rgba(var(--primary-rgb),0.05)_51%,transparent_52%)] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/50 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/50 group-hover:border-primary transition-colors" />
                
                <div className="relative h-full flex flex-col justify-center items-center p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl scale-150 group-hover:scale-200 transition-transform" />
                    <ArrowRight className="w-16 h-16 text-primary relative z-10 group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-cyber bg-clip-text text-transparent">
                    供应链合作
                  </h3>
                  <p className="text-muted-foreground text-lg">加入产业链生态体系</p>
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-700" />
              </Link>
            </div>

            {/* E-commerce Links */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Taobao */}
              <a href="https://taobao.com" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-500/30 hover:border-orange-500 transition-all duration-500 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500/30 blur-lg group-hover:blur-xl transition-all" />
                      <ShoppingBag className="w-12 h-12 text-orange-500 relative z-10 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-1">
                        淘宝旗舰店
                      </h4>
                      <p className="text-sm text-muted-foreground">官方授权店铺</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-orange-500 group-hover:translate-x-2 transition-transform" />
                </div>

                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </a>

              {/* JD */}
              <a href="https://jd.com" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-600/10 to-red-400/10 backdrop-blur-xl border border-red-600/30 hover:border-red-600 transition-all duration-500 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-600/30 blur-lg group-hover:blur-xl transition-all" />
                      <Store className="w-12 h-12 text-red-600 relative z-10 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-1">
                        京东旗舰店
                      </h4>
                      <p className="text-sm text-muted-foreground">官方授权店铺</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-red-600 group-hover:translate-x-2 transition-transform" />
                </div>

                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Selection - Redesigned */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_60%)]" />
        
        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block relative">
                <div className="absolute -inset-4 bg-primary/10 blur-2xl" />
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent relative">
                  产品智能匹配
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mt-4">选择您的需求，为您推荐最适合的解决方案</p>
            </div>

            {/* Interactive Selection Panel */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-2xl" />
              
              <div className="relative bg-card/20 backdrop-blur-xl border-2 border-primary/20 rounded-3xl p-8 md:p-12">
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" style={{ animationDelay: '1.5s' }} />
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-primary/50" />
                <div className="absolute top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-primary/50" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-primary/50" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-primary/50" />

                <div className="grid lg:grid-cols-2 gap-12 relative">
                  {/* Left: Selection Controls */}
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <label className="flex items-center gap-3 text-lg font-semibold">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                          01
                        </div>
                        选择产品型号
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Select value={selectedModel} onValueChange={setSelectedModel}>
                          <SelectTrigger className="relative h-14 bg-background/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all text-lg rounded-xl">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-card/95 backdrop-blur-xl border-primary/30">
                            {models.map((model) => (
                              <SelectItem key={model.id} value={model.id} className="text-lg">
                                {model.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="flex items-center gap-3 text-lg font-semibold">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                          02
                        </div>
                        应用领域
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                          <SelectTrigger className="relative h-14 bg-background/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all text-lg rounded-xl">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-card/95 backdrop-blur-xl border-primary/30">
                            {industries.map((industry) => (
                              <SelectItem key={industry.id} value={industry.id} className="text-lg">
                                {industry.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Match Info */}
                    <div className="relative mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">智能推荐</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            根据您选择的<span className="text-primary font-medium">{models.find(m => m.id === selectedModel)?.name}</span>
                            和<span className="text-primary font-medium">{industries.find(i => i.id === selectedIndustry)?.name}</span>
                            场景，我们将为您提供最优配置方案
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Product Display */}
                  <div className="relative">
                    <div className="sticky top-8">
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-card/50 to-primary/5 border-2 border-primary/30 p-8">
                        {/* Tech Grid Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
                        
                        {/* Holographic Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/10 to-primary/0 animate-pulse" />

                        <div className="relative space-y-6">
                          {/* Product Image */}
                          <div className="relative aspect-square rounded-xl overflow-hidden bg-background/30 backdrop-blur-sm border border-primary/20 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                            <img 
                              src={models.find(m => m.id === selectedModel)?.image} 
                              alt={models.find(m => m.id === selectedModel)?.name}
                              className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                            />
                            
                            {/* Scanning Lines */}
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" style={{ animationDelay: '1s' }} />
                          </div>

                          {/* Product Info */}
                          <div className="text-center space-y-3 p-4 rounded-xl bg-background/30 backdrop-blur-sm border border-primary/20">
                            <h3 className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
                              {models.find(m => m.id === selectedModel)?.name}
                            </h3>
                            <div className="flex items-center justify-center gap-2 text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                              <span>适配 {industries.find(i => i.id === selectedIndustry)?.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
