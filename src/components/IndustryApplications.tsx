import { useState } from "react";
import { Play } from "lucide-react";

const applications = [
  {
    title: "工业巡检",
    description: "智能化工厂设备巡检，提升效率降低风险",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    path: "/applications/industrial"
  },
  {
    title: "电力巡检",
    description: "电网设施自动化巡查，保障电力系统安全",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    path: "/applications/power"
  },
  {
    title: "安防监控",
    description: "24小时智能安防巡逻，守护安全防线",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    path: "/applications/security"
  },
  {
    title: "物流仓储",
    description: "自动化仓库管理，提升物流效率",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    path: "/applications/logistics"
  },
  {
    title: "应急救援",
    description: "复杂环境应急响应，保护救援人员安全",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    path: "/applications/rescue"
  },
  {
    title: "科研教育",
    description: "科研实验与教学平台，推动技术创新",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
    path: "/applications/research"
  }
];

const IndustryApplications = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">行业应用</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            深耕多个行业领域，提供定制化智能机器人解决方案
          </p>
        </div>

        {/* 3D Hexagon Grid Layout */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hexagon Container */}
                <div className="relative h-full overflow-hidden rounded-2xl bg-card border border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-glow">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={app.image} 
                      alt={app.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                  </div>

                  {/* Animated Border Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary animate-pulse" />
                    <div className="absolute top-0 left-0 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-glow-pulse" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-secondary/30 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 z-10">
                    <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                      <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {app.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {app.description}
                      </p>
                    </div>

                    {/* Play Icon - Appears on Hover */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                      <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-glow-strong">
                        <Play className="h-7 w-7 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* Scan Line Effect */}
                    {hoveredIndex === index && (
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
                    )}
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryApplications;
