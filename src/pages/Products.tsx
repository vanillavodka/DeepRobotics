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

      {/* Application Videos Carousel */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
          应用场景
        </h2>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-96 snap-center group cursor-pointer"
                onClick={() => setShowVideo(true)}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-card border border-primary/20 hover:border-primary transition-all shadow-glow">
                  <img
                    src={`https://images.unsplash.com/photo-${1677087241517 + i}-${Math.random().toString(36).slice(2, 11)}`}
                    alt={`应用场景 ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold">场景 {i}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Slider */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
            核心功能
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentFeature(Math.max(0, currentFeature - 1))}
                disabled={currentFeature === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <div className="flex-1 mx-8">
                <div className="text-center p-8 bg-card border border-primary/20 rounded-lg">
                  <div className="text-6xl mb-4">{features[currentFeature].icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{features[currentFeature].name}</h3>
                  <p className="text-muted-foreground">{features[currentFeature].description}</p>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentFeature(Math.min(features.length - 1, currentFeature + 1))}
                disabled={currentFeature === features.length - 1}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex justify-center gap-2">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentFeature(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentFeature ? "bg-primary w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
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

      {/* Specifications */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
          技术参数
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="p-6 bg-card border border-primary/20 rounded-lg hover:border-primary transition-all text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">{spec.value}</div>
              <div className="text-sm text-muted-foreground">{spec.label}</div>
            </div>
          ))}
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
