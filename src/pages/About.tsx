import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { Play, ChevronDown, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [activeYear, setActiveYear] = useState(2024);
  const [expandedVision, setExpandedVision] = useState<number | null>(null);

  const timeline = [
    { year: 2020, title: "公司成立", description: "云深处科技在杭州正式成立，开启智能机器人研发之旅" },
    { year: 2021, title: "产品研发", description: "首款四足机器人原型机研发成功，获得多项专利" },
    { year: 2022, title: "市场拓展", description: "产品正式投放市场，获得首批企业客户认可" },
    { year: 2023, title: "技术突破", description: "AI视觉系统升级，机器人智能化水平大幅提升" },
    { year: 2024, title: "行业领先", description: "成为具身智能技术领域的行业引领者" },
  ];

  const visions = [
    {
      title: "企业愿景",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      description: "成为全球领先的具身智能技术创新企业，让智能机器人走进千家万户"
    },
    {
      title: "企业使命",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      description: "通过技术创新推动人类社会进步，为各行各业提供智能化解决方案"
    },
    {
      title: "核心价值观",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "创新、专业、协作、共赢 - 以客户为中心，持续创造价值"
    },
  ];

  const honors = [
    "国家高新技术企业",
    "浙江省科技创新企业",
    "中国机器人产业联盟会员",
    "ISO9001质量管理体系认证",
    "多项国家发明专利",
    "行业技术创新奖",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Video Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-10" />
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            关于云深处
          </h1>
          <p className="text-xl text-muted-foreground mb-8">具身智能技术创新与行业应用引领者</p>
          <Button
            size="lg"
            onClick={() => setShowVideo(true)}
            className="group bg-primary hover:bg-primary/90 shadow-glow"
          >
            <Play className="mr-2 h-5 w-5" />
            观看企业宣传片
          </Button>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
          公司介绍
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            云深处科技成立于2020年，是一家专注于具身智能技术研发与应用的高新技术企业。我们致力于将人工智能、机器人技术与实际应用场景深度结合，为各行各业提供智能化解决方案。
          </p>
          <p>
            公司拥有一支由机器人学、人工智能、机械工程等领域专家组成的研发团队，累计获得10余项国家发明专利。我们的产品已广泛应用于巡检监控、物流运输、安防巡逻、教育科研等多个领域。
          </p>
          <p>
            作为行业的创新引领者，云深处始终坚持技术创新和客户至上的理念，不断推动智能机器人技术的发展与应用，为构建智能化社会贡献力量。
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
            愿景与使命
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visions.map((vision, i) => (
              <div
                key={i}
                className="group cursor-pointer"
                onClick={() => setExpandedVision(expandedVision === i ? null : i)}
              >
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src={vision.image}
                    alt={vision.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent flex flex-col items-center justify-end p-6">
                    <h3 className="text-2xl font-bold mb-2">{vision.title}</h3>
                    <ChevronDown className={`h-6 w-6 transition-transform ${expandedVision === i ? 'rotate-180' : ''}`} />
                  </div>
                </div>
                {expandedVision === i && (
                  <div className="mt-4 p-6 bg-card border border-primary/20 rounded-lg animate-fade-in">
                    <p className="text-muted-foreground">{vision.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Futuristic Horizontal Scroll */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Scan Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scan-vertical" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            发展历程
          </h2>
          <p className="text-center text-muted-foreground mb-20 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            TECHNOLOGICAL EVOLUTION TIMELINE
            <Sparkles className="w-4 h-4" />
          </p>

          {/* Horizontal Timeline Container */}
          <div className="relative">
            {/* Timeline Line with Glow */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 -translate-y-1/2 shadow-[0_0_20px_hsl(var(--primary)/0.5)]" />
            
            {/* Animated Pulse on Timeline */}
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-primary rounded-full -translate-y-1/2 animate-[slide-in-right_8s_ease-in-out_infinite] shadow-[0_0_20px_hsl(var(--primary))]" />

            {/* Timeline Items */}
            <div className="flex justify-between items-center gap-8 md:gap-12 py-20">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="group flex-1 relative"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Year Node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                      {/* Outer Glow Ring */}
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150 group-hover:scale-[2] transition-transform duration-500" />
                      
                      {/* Year Badge */}
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-foreground flex items-center justify-center border-2 border-primary shadow-glow-strong group-hover:scale-110 transition-transform duration-300">
                        <div className="text-sm font-bold text-primary-foreground">{item.year}</div>
                        
                        {/* Rotating Border Effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary/50 animate-spin" style={{ animationDuration: '3s' }} />
                      </div>

                      {/* Corner Accents */}
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Content Card - Alternating Top/Bottom */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-64 ${
                    index % 2 === 0 ? 'bottom-full mb-32' : 'top-full mt-32'
                  }`}>
                    {/* Connection Line */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary/50 to-transparent ${
                      index % 2 === 0 ? 'top-full h-24' : 'bottom-full h-24 rotate-180'
                    } group-hover:from-primary transition-colors`} />

                    {/* Card */}
                    <div className="relative p-6 bg-gradient-to-br from-card/95 to-card/70 backdrop-blur-md rounded-lg border border-primary/20 shadow-lg group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-300 transform-gpu hover:scale-105">
                      {/* Tech Corner Frames */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/50" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/50" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary/50" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/50" />

                      {/* Scan Line Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      {/* Status Indicator */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <div className="text-xs text-primary font-mono uppercase tracking-wider">Active</div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      {/* Holographic Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            {timeline.map((item) => (
              <button
                key={item.year}
                className="group relative px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded hover:border-primary hover:bg-primary/10 transition-all"
              >
                <span className="text-sm font-mono">{item.year}</span>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Honors */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
            公司荣誉
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {honors.map((honor, i) => (
              <div
                key={i}
                className="p-6 bg-card border border-primary/20 rounded-lg hover:border-primary transition-all text-center group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <div className="font-medium">{honor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
          合作伙伴
        </h2>
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-40 h-20 bg-card border border-primary/20 rounded-lg flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-muted-foreground">LOGO {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl="https://example.com/video.mp4"
        title="企业宣传片"
      />
    </div>
  );
};

export default About;
