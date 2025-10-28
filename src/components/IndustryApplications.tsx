import { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">APPLICATION AREAS</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary to-primary/50 bg-clip-text text-transparent">
              行业应用领域
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            深耕多个行业领域，提供定制化智能机器人解决方案
          </p>
        </div>

        {/* Futuristic Hexagonal Layout */}
        <div className="relative max-w-[1400px] mx-auto">
          {/* Center Main Display */}
          <div className="relative mb-16">
            <div className="relative h-[600px] rounded-3xl overflow-hidden group">
              {/* Main Image */}
              <img 
                src={applications[activeIndex].image} 
                alt={applications[activeIndex].title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              {/* Animated Tech Frame */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Corner Frames */}
                <div className="absolute top-8 left-8 w-24 h-24">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
                </div>
                <div className="absolute top-8 right-8 w-24 h-24">
                  <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-primary to-transparent" />
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary" />
                </div>
                <div className="absolute bottom-8 left-8 w-24 h-24">
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-primary to-transparent" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary" />
                </div>
                <div className="absolute bottom-8 right-8 w-24 h-24">
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-primary to-transparent" />
                  <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-primary to-transparent" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />
                </div>

                {/* Scan Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" style={{ animationDelay: '1s' }} />
              </div>

              {/* Content Info */}
              <div className="absolute bottom-12 left-12 right-12 z-10">
                <div className="flex items-end justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent" />
                      <div>
                        <div className="text-sm text-primary font-mono mb-1">0{activeIndex + 1} / 06</div>
                        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                          {applications[activeIndex].title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl ml-4">
                      {applications[activeIndex].description}
                    </p>
                  </div>
                  
                  {/* Status Panel */}
                  <div className="hidden md:block p-6 rounded-2xl bg-background/60 backdrop-blur-xl border border-primary/20">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-muted-foreground">系统在线</span>
                      </div>
                      <div className="text-2xl font-bold text-primary font-mono">99.9%</div>
                      <div className="text-xs text-muted-foreground">可靠性指数</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* Navigation Grid - Surrounding Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {applications.map((app, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  group relative cursor-pointer
                  transition-all duration-500 animate-slide-up
                  ${activeIndex === index ? 'scale-105' : 'scale-100 hover:scale-105'}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Container */}
                <div className={`
                  relative aspect-[3/4] rounded-2xl overflow-hidden
                  border-2 transition-all duration-500
                  ${activeIndex === index 
                    ? 'border-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)]' 
                    : 'border-primary/20 hover:border-primary/50'
                  }
                `}>
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={app.image} 
                      alt={app.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
                  </div>

                  {/* Glow Effect for Active */}
                  {activeIndex === index && (
                    <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                  )}

                  {/* Scan Line */}
                  {(hoveredIndex === index || activeIndex === index) && (
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
                  )}

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-4 z-10">
                    {/* Index Number */}
                    <div className="absolute top-4 left-4">
                      <div className={`
                        text-xs font-mono font-bold px-2 py-1 rounded
                        ${activeIndex === index 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-background/60 text-muted-foreground backdrop-blur-sm'
                        }
                      `}>
                        0{index + 1}
                      </div>
                    </div>

                    {/* Tech Corner */}
                    <div className={`
                      absolute top-3 right-3 w-6 h-6 
                      border-t border-r transition-all duration-500
                      ${activeIndex === index ? 'border-primary' : 'border-primary/30'}
                    `} />

                    {/* Title */}
                    <h4 className={`
                      text-base font-bold mb-1 transition-all duration-300
                      ${activeIndex === index ? 'text-primary' : 'text-foreground'}
                    `}>
                      {app.title}
                    </h4>

                    {/* Selection Indicator */}
                    <div className={`
                      h-1 rounded-full transition-all duration-500
                      ${activeIndex === index 
                        ? 'w-full bg-primary' 
                        : 'w-0 group-hover:w-1/2 bg-primary/50'
                      }
                    `} />
                  </div>

                  {/* Holographic Border Effect */}
                  <div className={`
                    absolute inset-0 pointer-events-none transition-opacity duration-500
                    ${activeIndex === index ? 'opacity-100' : 'opacity-0'}
                  `}>
                    <div className="absolute inset-0 rounded-2xl border border-primary/50 animate-pulse" />
                  </div>
                </div>

                {/* Active Indicator Line */}
                {activeIndex === index && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? applications.length - 1 : prev - 1))}
              className="group w-14 h-14 rounded-full border-2 border-primary/30 hover:border-primary bg-background/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-6 h-6 border-l-2 border-b-2 border-primary -rotate-45 transform -translate-x-0.5 group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <div className="flex gap-2">
              {applications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    h-1 rounded-full transition-all duration-300
                    ${activeIndex === index ? 'w-12 bg-primary' : 'w-6 bg-primary/30 hover:bg-primary/50'}
                  `}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIndex((prev) => (prev === applications.length - 1 ? 0 : prev + 1))}
              className="group w-14 h-14 rounded-full border-2 border-primary/30 hover:border-primary bg-background/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-6 h-6 border-r-2 border-b-2 border-primary -rotate-45 transform translate-x-0.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryApplications;
