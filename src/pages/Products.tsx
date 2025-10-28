import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { Play, ChevronLeft, ChevronRight, Zap, Shield, Eye, Cpu, Radio, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Products = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const [activeSpec, setActiveSpec] = useState(0);
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);

  const features = [
    { 
      name: "自主导航系统", 
      description: "基于SLAM技术的精准定位与智能避障，实现复杂环境下的自主路径规划", 
      icon: Zap,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      specs: ["定位精度: ±5cm", "扫描范围: 360°", "响应时间: <50ms"]
    },
    { 
      name: "全地形适应", 
      description: "四足动态平衡系统，可适应多种复杂地形环境，包括楼梯、斜坡和崎岖路面", 
      icon: Mountain,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
      specs: ["爬坡能力: 45°", "涉水深度: 30cm", "越障高度: 20cm"]
    },
    { 
      name: "远程控制", 
      description: "5G/4G实时通信，支持远程监控、遥控操作及任务管理", 
      icon: Radio,
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
      specs: ["通信延迟: <100ms", "控制距离: 5km", "视频传输: 1080P"]
    },
    { 
      name: "AI视觉识别", 
      description: "深度学习视觉系统，实现目标识别、跟踪及环境感知", 
      icon: Eye,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      specs: ["识别准确率: 98%", "处理速度: 30fps", "检测距离: 50m"]
    },
    { 
      name: "智能防护", 
      description: "多重安全防护机制，支持碰撞检测、跌落保护及异常状态监控", 
      icon: Shield,
      image: "https://images.unsplash.com/photo-1563770660941-20978e870e26",
      specs: ["防护等级: IP67", "碰撞检测: 6轴", "自动保护: 实时"]
    },
    { 
      name: "边缘计算", 
      description: "高性能边缘计算平台，支持本地AI推理及实时数据处理", 
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      specs: ["计算能力: 20TOPS", "内存: 16GB", "存储: 256GB SSD"]
    },
  ];

  const modules = [
    { id: 1, name: "激光雷达", desc: "360°环境感知", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" },
    { id: 2, name: "深度相机", desc: "3D视觉识别", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12" },
    { id: 3, name: "通信模块", desc: "5G/4G双模", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7" },
    { id: 4, name: "动力系统", desc: "高效电机驱动", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" },
    { id: 5, name: "控制单元", desc: "智能运动控制", image: "https://images.unsplash.com/photo-1563770660941-20978e870e26" },
    { id: 6, name: "电池系统", desc: "长效续航方案", image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: 7, name: "传感器阵列", desc: "多维度数据采集", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa" },
    { id: 8, name: "散热系统", desc: "智能温控管理", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64" },
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

      {/* Core Features - Interactive Carousel */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            animation: 'grid-flow 30s linear infinite'
          }}
        />
        
        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-mono text-primary uppercase tracking-wider">Core Functions</span>
            </div>
            <h2 className="text-6xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
              主要产品功能
            </h2>
            <p className="text-xl text-muted-foreground">滑动探索强大的功能特性</p>
          </div>
          
          <Carousel className="max-w-7xl mx-auto">
            <CarouselContent>
              {features.map((feature, i) => (
                <CarouselItem key={i}>
                  <div className="relative h-[600px] rounded-3xl overflow-hidden group">
                    {/* Background Image */}
                    <img 
                      src={feature.image}
                      alt={feature.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Tech Grid Overlay */}
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                                         linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
                    
                    {/* Scan Line */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-vertical opacity-60" />
                    </div>
                    
                    {/* Corner Frames */}
                    <div className="absolute top-6 left-6 w-24 h-24">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                      <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
                    </div>
                    <div className="absolute top-6 right-6 w-24 h-24">
                      <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-primary to-transparent" />
                      <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
                    </div>
                    <div className="absolute bottom-6 left-6 w-24 h-24">
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                      <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-primary to-transparent" />
                    </div>
                    <div className="absolute bottom-6 right-6 w-24 h-24">
                      <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-primary to-transparent" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-primary to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-12">
                      {/* Icon with Glow */}
                      <div className="mb-8 inline-flex">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary blur-2xl opacity-50 animate-pulse" />
                          <div className="relative p-6 bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm border border-primary/50 rounded-2xl">
                            <feature.icon className="h-16 w-16 text-primary" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="max-w-2xl">
                        <h3 className="text-5xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
                          {feature.name}
                        </h3>
                        <p className="text-xl text-foreground/90 mb-8 leading-relaxed">
                          {feature.description}
                        </p>
                        
                        {/* Specs */}
                        <div className="flex flex-wrap gap-4">
                          {feature.specs.map((spec, idx) => (
                            <div key={idx} className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-lg">
                              <span className="text-sm font-mono text-primary">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Progress Indicator */}
                      <div className="absolute top-8 right-8 px-4 py-2 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-full">
                        <span className="text-sm font-mono text-primary">{i + 1} / {features.length}</span>
                      </div>
                      
                      {/* Status Bar */}
                      <div className="absolute bottom-8 left-8 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">System Active</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 h-14 w-14 border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary hover:border-primary" />
            <CarouselNext className="right-4 h-14 w-14 border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary hover:border-primary" />
          </Carousel>
          
          {/* Feature Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {features.map((_, i) => (
              <div key={i} className="w-12 h-1 bg-muted hover:bg-primary transition-colors cursor-pointer rounded-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Function Modules - Advanced Matrix */}
      <section className="py-32 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.4) 1px, transparent 1px),
                             radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.4) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-mono text-primary uppercase tracking-wider">Module Matrix</span>
            </div>
            <h2 className="text-6xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
              功能模块
            </h2>
            <p className="text-xl text-muted-foreground">模块化设计，灵活组合</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {modules.map((module, i) => (
              <div
                key={module.id}
                className="group relative aspect-square cursor-pointer"
                onMouseEnter={() => setHoveredModule(i)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                {/* Outer Glow on Hover */}
                <div className={`absolute -inset-4 bg-primary/20 blur-2xl transition-opacity duration-500 ${hoveredModule === i ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Main Card */}
                <div className="relative h-full rounded-2xl overflow-hidden border border-primary/20 group-hover:border-primary transition-all duration-500">
                  {/* Image */}
                  <img 
                    src={module.image}
                    alt={module.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Tech Grid */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                                       linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Scan Line */}
                  <div className={`absolute inset-0 overflow-hidden transition-opacity duration-300 ${hoveredModule === i ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-vertical" />
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-primary/50 group-hover:border-primary transition-colors" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-primary/50 group-hover:border-primary transition-colors" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-primary/50 group-hover:border-primary transition-colors" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-primary/50 group-hover:border-primary transition-colors" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Module Number */}
                    <div className="absolute top-6 left-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/30 blur-lg" />
                        <div className="relative text-4xl font-bold text-primary/30 font-mono">
                          {String(module.id).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                    
                    {/* Text */}
                    <div className="relative transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-cyber bg-clip-text text-transparent">
                        {module.name}
                      </h3>
                      <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {module.desc}
                      </p>
                      
                      {/* Status Line */}
                      <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-mono text-primary">READY</span>
                      </div>
                    </div>
                    
                    {/* Holographic Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Rotating Ring on Hover */}
                  <div className={`absolute inset-0 border-2 border-primary rounded-2xl transition-all duration-700 ${hoveredModule === i ? 'scale-105 opacity-50 rotate-180' : 'scale-100 opacity-0'}`} />
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Stats */}
          <div className="mt-16 flex justify-center gap-8">
            <div className="px-8 py-4 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl">
              <div className="text-3xl font-bold bg-gradient-cyber bg-clip-text text-transparent">8+</div>
              <div className="text-sm text-muted-foreground">核心模块</div>
            </div>
            <div className="px-8 py-4 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl">
              <div className="text-3xl font-bold bg-gradient-cyber bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-muted-foreground">模块化设计</div>
            </div>
            <div className="px-8 py-4 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl">
              <div className="text-3xl font-bold bg-gradient-cyber bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-muted-foreground">稳定运行</div>
            </div>
          </div>
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

      {/* Technical Specifications - Interactive Display */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(var(--primary) / 0.5) 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            animation: 'grid-flow 25s linear infinite'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-mono text-primary uppercase tracking-wider">Tech Specs</span>
            </div>
            <h2 className="text-6xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
              技术参数
            </h2>
            <p className="text-xl text-muted-foreground">工业级性能标准</p>
          </div>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Product Images with View Selector */}
            <div className="relative">
              {/* Main Display */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-primary/30 group">
                {/* Product Image */}
                <img 
                  src={activeSpec === 0 
                    ? "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                    : activeSpec === 1
                    ? "https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                    : "https://images.unsplash.com/photo-1614064641938-3bbee52942c7"
                  }
                  alt="产品视图"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                                     linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/40" />
                
                {/* Scanning Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-vertical opacity-50" />
                </div>
                
                {/* Corner Frames */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary" />
                
                {/* Active View Indicator */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-full">
                  <span className="text-sm font-mono text-primary">
                    {activeSpec === 0 ? "正视图" : activeSpec === 1 ? "侧视图" : "俯视图"}
                  </span>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* View Selector */}
              <div className="flex gap-4 mt-6">
                {[
                  { id: 0, label: "正视图", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" },
                  { id: 1, label: "侧视图", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12" },
                  { id: 2, label: "俯视图", img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7" }
                ].map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setActiveSpec(view.id)}
                    className={`flex-1 relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 group/btn ${
                      activeSpec === view.id 
                        ? 'border-primary shadow-glow scale-105' 
                        : 'border-primary/20 hover:border-primary/50'
                    }`}
                  >
                    <img src={view.img} alt={view.label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
                      <span className={`text-sm font-mono ${activeSpec === view.id ? 'text-primary' : 'text-muted-foreground'}`}>
                        {view.label}
                      </span>
                    </div>
                    {activeSpec === view.id && (
                      <div className="absolute inset-0 border-2 border-primary animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right: Specifications */}
            <div className="space-y-6">
              {specs.map((spec, i) => (
                <div
                  key={i}
                  className="group relative p-6 bg-gradient-to-r from-card to-card/50 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary transition-all duration-500 cursor-pointer overflow-hidden"
                  onMouseEnter={() => {}}
                >
                  {/* Animated Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Scan Line */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-mono text-primary/60 uppercase tracking-wider mb-2">
                        {spec.label}
                      </div>
                      <div className="text-3xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
                        {spec.value}
                      </div>
                    </div>
                    
                    {/* Tech Accent */}
                    <div className="relative">
                      <div className="w-16 h-16 border-2 border-primary/30 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-primary/20 rounded-full blur-sm group-hover:bg-primary/40 transition-colors" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Corner Accent */}
                  <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-primary/30 group-hover:border-primary transition-colors" />
                </div>
              ))}
              
              {/* Performance Badge */}
              <div className="relative mt-8 p-8 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 animate-pulse" />
                <div className="relative text-center">
                  <div className="text-sm font-mono text-primary uppercase tracking-wider mb-2">Performance Level</div>
                  <div className="text-4xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-2">
                    工业级标准
                  </div>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${star * 100}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
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
