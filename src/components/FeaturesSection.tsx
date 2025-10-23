import { Brain, Zap, Shield, Cpu } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI智能决策",
    description: "深度学习算法驱动，实现自主决策和环境适应能力"
  },
  {
    icon: Zap,
    title: "高速响应",
    description: "毫秒级反应速度，精准执行复杂任务指令"
  },
  {
    icon: Shield,
    title: "安全可靠",
    description: "多重安全防护机制，确保人机协作零事故"
  },
  {
    icon: Cpu,
    title: "边缘计算",
    description: "本地算力支持，保障数据隐私和实时性能"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">核心能力</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            突破性技术创新，重新定义智能机器人标准
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="mb-6 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
