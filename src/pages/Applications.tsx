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

      {/* Function Area 1 */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
            核心功能
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-4 mb-8">
              {functions1.map((func, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab1(i)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab1 === i
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-card border border-primary/20 text-foreground hover:border-primary"
                  }`}
                >
                  {func.name}
                </button>
              ))}
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-card border border-primary/20">
              <img
                src={functions1[activeTab1].image}
                alt={functions1[activeTab1].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{functions1[activeTab1].name}</h3>
                  <p className="text-lg text-muted-foreground">{functions1[activeTab1].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Function Area 2 */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
            扩展功能
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-card border border-primary/20 mb-8">
              <img
                src={functions2[activeTab2].image}
                alt={functions2[activeTab2].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{functions2[activeTab2].name}</h3>
                  <p className="text-lg text-muted-foreground">{functions2[activeTab2].description}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {functions2.map((func, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab2(i)}
                  className={`p-4 rounded-lg font-medium transition-all text-center ${
                    activeTab2 === i
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-card border border-primary/20 text-foreground hover:border-primary"
                  }`}
                >
                  <div className="text-lg font-bold mb-1">{func.name}</div>
                  <div className="text-sm opacity-80">{func.description}</div>
                </button>
              ))}
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
