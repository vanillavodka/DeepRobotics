import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("quadruped");
  const [showVideo, setShowVideo] = useState(false);

  const tabs = [
    { id: "quadruped", name: "四足机器人" },
    { id: "humanoid", name: "人形机器人" },
    { id: "wheeled", name: "轮足机器人" },
    { id: "joints", name: "关节" },
  ];

  const resources = {
    quadruped: [
      { name: "四足机器人产品手册", type: "PDF", size: "5.2 MB" },
      { name: "技术规格说明书", type: "PDF", size: "2.8 MB" },
      { name: "快速入门指南", type: "PDF", size: "1.5 MB" },
    ],
    humanoid: [
      { name: "人形机器人产品手册", type: "PDF", size: "6.1 MB" },
      { name: "API开发文档", type: "PDF", size: "3.2 MB" },
    ],
    wheeled: [
      { name: "轮足机器人产品手册", type: "PDF", size: "4.8 MB" },
      { name: "维护保养手册", type: "PDF", size: "2.1 MB" },
    ],
    joints: [
      { name: "关节技术规格", type: "PDF", size: "3.5 MB" },
      { name: "安装调试手册", type: "PDF", size: "2.3 MB" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          alt="Resources"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            资源中心
          </h1>
          <p className="text-xl text-muted-foreground">下载产品资料，观看演示视频</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-card border border-primary/20 text-foreground hover:border-primary"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Manuals */}
            <div className="p-8 bg-card border border-primary/20 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Download className="h-6 w-6 text-primary" />
                产品手册下载
              </h3>
              <div className="space-y-4">
                {resources[activeTab as keyof typeof resources].map((resource, i) => (
                  <div
                    key={i}
                    className="p-4 bg-background rounded-lg hover:bg-muted transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {resource.name}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {resource.type} • {resource.size}
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="group-hover:text-primary">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Videos */}
            <div className="p-8 bg-card border border-primary/20 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Play className="h-6 w-6 text-primary" />
                产品视频观看
              </h3>
              <div className="space-y-4">
                {["产品介绍视频", "使用教程视频", "应用案例视频"].map((video, i) => (
                  <div
                    key={i}
                    onClick={() => setShowVideo(true)}
                    className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group bg-muted"
                  >
                    <img
                      src={`https://images.unsplash.com/photo-${1485827404703 + i}-${Math.random().toString(36).slice(2, 11)}`}
                      alt={video}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-12 w-12 text-primary mx-auto mb-2" />
                        <div className="text-sm font-medium">{video}</div>
                      </div>
                    </div>
                  </div>
                ))}
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
      />
    </div>
  );
};

export default Resources;
