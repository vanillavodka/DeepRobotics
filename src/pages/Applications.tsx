import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { Play, ChevronLeft, ChevronRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Applications = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [activeTab1, setActiveTab1] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);

  const features = [
    { title: "巡检监控", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12" },
    { title: "物流运输", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" },
    { title: "安防巡逻", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7" },
    { title: "教育科研", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa" },
  ];

  const functions1 = [
    { name: "智能识别", description: "AI视觉识别技术", image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a" },
    { name: "自主导航", description: "精准定位与路径规划", image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { name: "数据分析", description: "实时数据处理与分析", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" },
  ];

  const functions2 = [
    { name: "远程控制", description: "云端实时控制系统", image: "https://images.unsplash.com/photo-1563770660941-20978e870e26" },
    { name: "语音交互", description: "自然语言处理", image: "https://images.unsplash.com/photo-1589254065878-42c9da997008" },
    { name: "协同作业", description: "多机器人协作", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Video Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-10" />
        <img 
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
          alt="Applications"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            行业应用
          </h1>
          <p className="text-xl text-muted-foreground mb-8">赋能各行各业，创造无限可能</p>
          <Button
            size="lg"
            onClick={() => setShowVideo(true)}
            className="group bg-primary hover:bg-primary/90 shadow-glow"
          >
            <Play className="mr-2 h-5 w-5" />
            观看应用视频
          </Button>
        </div>
      </section>

      {/* Features Slider */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
          应用领域
        </h2>
        <div className="relative flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-96 snap-center group cursor-pointer"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Functions - Left Navigation with Image Display */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-cyber bg-clip-text text-transparent">
            核心功能
          </h2>
          
          <div className="max-w-7xl mx-auto flex gap-8">
            {/* Left Navigation Panel */}
            <div className="w-80 flex-shrink-0 space-y-4">
              {functions1.map((func, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab1(i)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-500 relative overflow-hidden group ${
                    activeTab1 === i
                      ? "bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary shadow-glow-strong"
                      : "bg-card/50 border border-primary/20 hover:border-primary/50"
                  }`}
                >
                  {/* Animated Background for Active */}
                  {activeTab1 === i && (
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent top-0 animate-scan" />
                      <div className="absolute right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-scan-vertical" />
                    </div>
                  )}
                  
                  {/* Tech Corner Accent */}
                  <div className={`absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 transition-all duration-500 ${
                    activeTab1 === i ? "border-primary" : "border-primary/20 group-hover:border-primary/50"
                  }`} />
                  <div className={`absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 transition-all duration-500 ${
                    activeTab1 === i ? "border-primary" : "border-primary/20 group-hover:border-primary/50"
                  }`} />
                  
                  <div className="relative z-10">
                    {/* Index Number */}
                    <div className={`text-sm font-mono mb-2 transition-colors ${
                      activeTab1 === i ? "text-primary" : "text-muted-foreground"
                    }`}>
                      [ 0{i + 1} ]
                    </div>
                    
                    {/* Title */}
                    <h3 className={`text-2xl font-bold mb-3 transition-all duration-500 ${
                      activeTab1 === i 
                        ? "bg-gradient-cyber bg-clip-text text-transparent" 
                        : "text-foreground"
                    }`}>
                      {func.name}
                    </h3>
                    
                    {/* Description */}
                    <p className={`text-sm transition-colors ${
                      activeTab1 === i ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {func.description}
                    </p>
                    
                    {/* Status Indicator */}
                    {activeTab1 === i && (
                      <div className="mt-4 flex items-center gap-2 text-xs font-mono text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span>ACTIVE</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Right Image Display */}
            <div className="flex-1 relative">
              <div className="sticky top-24">
                <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow-strong">
                  {/* Tech Grid Background */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                                       linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)`,
                      backgroundSize: '30px 30px'
                    }}
                  />
                  
                  {/* Image with Transition */}
                  <img
                    key={activeTab1}
                    src={functions1[activeTab1].image}
                    alt={functions1[activeTab1].name}
                    className="w-full h-full object-cover animate-fade-in"
                  />
                  
                  {/* Scan Line Effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-vertical opacity-60" />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Info Panel */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-4xl font-bold mb-2 bg-gradient-cyber bg-clip-text text-transparent animate-slide-in-left">
                          {functions1[activeTab1].name}
                        </h3>
                        <p className="text-lg text-muted-foreground animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                          {functions1[activeTab1].description}
                        </p>
                      </div>
                      
                      {/* Tech Badge */}
                      <div className="px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-lg font-mono text-sm text-primary">
                        CORE TECH
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner Frames */}
                  <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Functions - Interactive Display */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, transparent 1px, transparent 40px),
                             repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 1px, transparent 40px)`,
            animation: 'grid-flow 15s linear infinite'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-cyber bg-clip-text text-transparent">
            扩展功能
          </h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Main Display Area */}
            <div className="relative mb-12">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow-strong">
                {/* Background with Animation */}
                <div className="absolute inset-0">
                  {functions2.map((func, i) => (
                    <img
                      key={i}
                      src={func.image}
                      alt={func.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        activeTab2 === i 
                          ? "opacity-100 scale-100" 
                          : "opacity-0 scale-95"
                      }`}
                    />
                  ))}
                </div>
                
                {/* Tech Overlay Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(hsl(var(--primary) / 0.6) 1px, transparent 1px),
                                       linear-gradient(90deg, hsl(var(--primary) / 0.6) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }}
                  />
                  
                  {/* Scan Lines */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-vertical opacity-40" />
                    <div className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent animate-scan opacity-40" />
                  </div>
                  
                  {/* Data Visualization Lines */}
                  {activeTab2 === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 border-2 border-primary/30 rounded-full animate-pulse" />
                      <div className="absolute w-48 h-48 border border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                  )}
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
                
                {/* Content Info */}
                <div className="absolute inset-0 flex flex-col justify-between p-10">
                  {/* Top Status Bar */}
                  <div className="flex justify-between items-start">
                    <div className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-lg">
                      <div className="flex items-center gap-2 text-sm font-mono">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary">EXTENDED FUNCTION</span>
                      </div>
                    </div>
                    
                    <div className="text-right font-mono text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20">
                      MODULE {activeTab2 + 1}/{functions2.length}
                    </div>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="animate-slide-in-left">
                    <h3 className="text-5xl font-bold mb-3 bg-gradient-cyber bg-clip-text text-transparent">
                      {functions2[activeTab2].name}
                    </h3>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                      {functions2[activeTab2].description}
                    </p>
                  </div>
                </div>
                
                {/* Corner Frames */}
                <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-primary opacity-60" />
                <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-primary opacity-60" />
                <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-primary opacity-60" />
                <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-primary opacity-60" />
              </div>
            </div>
            
            {/* Control Panel */}
            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-gradient-to-b from-primary/50 to-transparent" />
              
              <div className="flex gap-6 justify-center">
                {functions2.map((func, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab2(i)}
                    className={`relative group flex-1 max-w-xs transition-all duration-500 ${
                      activeTab2 === i ? "scale-105" : "scale-100 hover:scale-102"
                    }`}
                  >
                    {/* Connection Line to Display */}
                    <div className={`absolute -top-6 left-1/2 w-0.5 h-6 transition-all duration-500 ${
                      activeTab2 === i 
                        ? "bg-gradient-to-t from-primary to-primary/50" 
                        : "bg-gradient-to-t from-primary/20 to-transparent"
                    }`} />
                    
                    <div className={`relative p-6 rounded-xl overflow-hidden transition-all duration-500 ${
                      activeTab2 === i
                        ? "bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary shadow-glow-strong"
                        : "bg-card/50 border border-primary/20 hover:border-primary/50"
                    }`}>
                      {/* Animated Border for Active */}
                      {activeTab2 === i && (
                        <div className="absolute inset-0 overflow-hidden">
                          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent top-0 animate-scan" />
                        </div>
                      )}
                      
                      {/* Corner Accents */}
                      <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r transition-colors ${
                        activeTab2 === i ? "border-primary" : "border-primary/20"
                      }`} />
                      <div className={`absolute bottom-0 left-0 w-8 h-8 border-b border-l transition-colors ${
                        activeTab2 === i ? "border-primary" : "border-primary/20"
                      }`} />
                      
                      <div className="relative z-10 text-center">
                        {/* Index */}
                        <div className={`text-xs font-mono mb-2 transition-colors ${
                          activeTab2 === i ? "text-primary" : "text-muted-foreground"
                        }`}>
                          MODULE.0{i + 1}
                        </div>
                        
                        {/* Title */}
                        <h4 className={`text-xl font-bold mb-2 transition-all duration-500 ${
                          activeTab2 === i 
                            ? "bg-gradient-cyber bg-clip-text text-transparent" 
                            : "text-foreground"
                        }`}>
                          {func.name}
                        </h4>
                        
                        {/* Description */}
                        <p className={`text-sm transition-colors ${
                          activeTab2 === i ? "text-foreground/80" : "text-muted-foreground"
                        }`}>
                          {func.description}
                        </p>
                        
                        {/* Status Badge */}
                        {activeTab2 === i && (
                          <div className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-primary animate-fade-in">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            SELECTED
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            联系云深处
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            让我们一起探讨如何将智能机器人技术应用到您的业务中
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
              <Mail className="mr-2 h-5 w-5" />
              发送邮件
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              <Phone className="mr-2 h-5 w-5" />
              电话咨询
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl="https://example.com/video.mp4"
        title="行业应用视频"
      />
    </div>
  );
};

export default Applications;
