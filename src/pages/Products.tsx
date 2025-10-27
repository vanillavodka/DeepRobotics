import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { name: "自主导航", description: "精准定位，智能避障", icon: "🎯" },
    { name: "地形适应", description: "多种地形灵活应对", icon: "🏔️" },
    { name: "远程控制", description: "实时监控与操作", icon: "📡" },
    { name: "AI视觉", description: "智能识别与分析", icon: "👁️" },
  ];

  const specs = [
    { label: "最大速度", value: "15 km/h" },
    { label: "续航时间", value: "4-6 小时" },
    { label: "负载能力", value: "20 kg" },
    { label: "防护等级", value: "IP67" },
    { label: "工作温度", value: "-20°C ~ 50°C" },
    { label: "爬坡能力", value: "45°" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Video Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-10" />
        <img 
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
          alt="Product"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            四足机器人
          </h1>
          <p className="text-xl text-muted-foreground mb-8">全地形智能机器人解决方案</p>
          <Button
            size="lg"
            onClick={() => setShowVideo(true)}
            className="group bg-primary hover:bg-primary/90 shadow-glow"
          >
            <Play className="mr-2 h-5 w-5" />
            观看产品视频
          </Button>
        </div>
      </section>

      {/* Application Scenes - Fullscreen Horizontal Scroll */}
      <section className="relative h-screen overflow-hidden">
        <h2 className="absolute top-10 left-1/2 -translate-x-1/2 z-30 text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
          应用场景
        </h2>
        <div className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {[
            { title: "工业巡检", desc: "智能化工厂巡检解决方案", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12" },
            { title: "安防监控", desc: "全天候安防巡逻系统", img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7" },
            { title: "物流运输", desc: "智能物流配送方案", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" },
            { title: "应急救援", desc: "复杂环境应急响应", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" },
            { title: "教育科研", desc: "机器人教学研究平台", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa" },
          ].map((scene, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-full h-full snap-center group cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              {/* Background Image */}
              <img
                src={scene.img}
                alt={scene.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Tech Grid Overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                                   linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/90" />
              
              {/* Scan Line Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-vertical opacity-50" />
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <Play className="h-24 w-24 text-primary animate-pulse" />
                </div>
                <h3 className="text-7xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
                  {scene.title}
                </h3>
                <p className="text-2xl text-muted-foreground max-w-2xl">{scene.desc}</p>
                
                {/* Status Bar */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-mono">场景 {i + 1}/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="w-12 h-1 bg-muted hover:bg-primary transition-colors cursor-pointer" />
          ))}
        </div>
      </section>

      {/* Core Features - Sci-fi Display */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            animation: 'grid-flow 20s linear infinite'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-cyber bg-clip-text text-transparent">
            核心功能
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 cursor-pointer"
                onClick={() => setCurrentFeature(i)}
              >
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Circuit Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="absolute top-4 right-4 w-16 h-0.5 bg-primary" />
                  <div className="absolute top-4 right-4 w-0.5 h-16 bg-primary" />
                  <div className="absolute top-4 right-12 w-8 h-8 border border-primary rounded-full" />
                </div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent top-0 animate-scan" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-cyber bg-clip-text text-transparent">
                        {feature.name}
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full" />
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                  
                  {/* Tech Specs */}
                  <div className="flex gap-4 text-sm font-mono">
                    <div className="px-3 py-1 bg-primary/10 border border-primary/30 rounded">
                      <span className="text-primary">●</span> 实时处理
                    </div>
                    <div className="px-3 py-1 bg-primary/10 border border-primary/30 rounded">
                      <span className="text-primary">●</span> 高精度
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>ACTIVE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Function Modules Grid */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
          功能模块
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="group relative aspect-square bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary transition-all cursor-pointer"
            >
              <img
                src={`https://images.unsplash.com/photo-${1485827404703 + i}-${Math.random().toString(36).slice(2, 11)}`}
                alt={`功能 ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">功能模块 {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">详细功能描述</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
            功能演示
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 snap-center cursor-pointer group"
                onClick={() => setShowVideo(true)}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-card border border-primary/20 hover:border-primary transition-all">
                  <img
                    src={`https://images.unsplash.com/photo-${1518770660439 + i}-${Math.random().toString(36).slice(2, 11)}`}
                    alt={`功能视频 ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications - Advanced Display */}
      <section className="py-32 container mx-auto px-6 relative">
        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-cyber bg-clip-text text-transparent">
          技术参数
        </h2>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Circular Background Design */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-[600px] h-[600px] border-2 border-primary rounded-full" />
            <div className="absolute w-[500px] h-[500px] border border-primary rounded-full" />
            <div className="absolute w-[400px] h-[400px] border border-primary rounded-full" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
            {specs.map((spec, i) => (
              <div
                key={i}
                className="group relative p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary transition-all duration-500 overflow-hidden"
              >
                {/* Animated Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-sm font-mono text-primary/60 mb-2 uppercase tracking-wider">
                    {spec.label}
                  </div>
                  <div className="text-4xl font-bold mb-3 bg-gradient-cyber bg-clip-text text-transparent">
                    {spec.value}
                  </div>
                  <div className="h-0.5 w-12 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
                </div>
                
                {/* Tech Pattern */}
                <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="w-8 h-8 border border-primary rounded-sm rotate-45" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Central Tech Badge */}
          <div className="mt-16 flex justify-center">
            <div className="relative px-8 py-4 bg-card border-2 border-primary/50 rounded-full shadow-glow-strong">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-full animate-pulse" />
              <span className="relative text-xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
                工业级性能标准
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl="https://example.com/video.mp4"
        title="产品演示视频"
      />
    </div>
  );
};

export default Products;
