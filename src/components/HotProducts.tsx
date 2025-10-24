import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  {
    title: "绝影X-20",
    category: "四足机器人",
    description: "工业级四足机器人，适应复杂地形",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    path: "/products/quadruped"
  },
  {
    title: "青龙H1",
    category: "人形机器人",
    description: "通用人形机器人，人机协作新标准",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    path: "/products/humanoid"
  },
  {
    title: "莫比M1",
    category: "轮足机器人",
    description: "轮足复合移动平台，灵活高效",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26",
    path: "/products/wheeled"
  },
  {
    title: "智能关节",
    category: "核心组件",
    description: "高精度机器人关节，核心驱动力",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
    path: "/products/joints"
  }
];

const HotProducts = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          animation: 'grid-flow 20s linear infinite'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">热门产品</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            引领智能机器人技术创新的明星产品
          </p>
        </div>

        {/* Isometric Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                perspective: '1000px'
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-card border border-primary/20 hover:border-primary transition-all duration-700 shadow-lg hover:shadow-glow transform hover:-translate-y-2">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50 group-hover:from-background/80 group-hover:via-background/60 transition-all duration-700" />
                </div>

                {/* Holographic Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-pulse" />
                  {/* Corner Frames */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary animate-pulse" />
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary animate-pulse" style={{ animationDelay: '0.1s' }} />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary animate-pulse" style={{ animationDelay: '0.3s' }} />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 z-10">
                  {/* Category Badge */}
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-sm font-medium text-primary">
                      {product.category}
                    </span>
                    
                    {/* Play Icon */}
                    <div className="w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                      <Play className="h-5 w-5 text-primary ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                      {product.description}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      className="group/btn p-0 h-auto text-primary hover:text-primary hover:bg-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                    >
                      了解更多
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Scan Line Effect */}
                {activeIndex === index && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
                    <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-scan-vertical" />
                  </>
                )}

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotProducts;
