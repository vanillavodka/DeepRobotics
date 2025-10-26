import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import TechTimeline from "@/components/TechTimeline";
import { Play, ChevronDown } from "lucide-react";
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

      {/* Timeline */}
      <section className="py-32 container mx-auto px-6 overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-cyber bg-clip-text text-transparent">
          发展历程
        </h2>
        <TechTimeline items={timeline} />
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
