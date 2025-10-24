const partners = [
  { name: "华为", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "阿里巴巴", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop" },
  { name: "腾讯", logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200&h=100&fit=crop" },
  { name: "百度", logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=200&h=100&fit=crop" },
  { name: "京东", logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=200&h=100&fit=crop" },
  { name: "小米", logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=100&fit=crop" },
  { name: "字节跳动", logo: "https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?w=200&h=100&fit=crop" },
  { name: "美团", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop" },
];

const Partners = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">合作伙伴</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            携手行业领军企业，共创智能未来
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/50 to-transparent z-10" />

          {/* Scrolling Track */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll hover:pause-animation">
              {/* First Set */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="w-48 h-24 bg-card border border-primary/20 rounded-xl flex items-center justify-center p-6 transition-all duration-500 hover:border-primary hover:shadow-glow hover:scale-110">
                    <div className="relative w-full h-full">
                      {/* Logo placeholder - replace with actual logos */}
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                        <span className="text-lg font-bold">{partner.name}</span>
                      </div>
                      {/* Scan effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-scan" />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate Set for Seamless Loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="w-48 h-24 bg-card border border-primary/20 rounded-xl flex items-center justify-center p-6 transition-all duration-500 hover:border-primary hover:shadow-glow hover:scale-110">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                        <span className="text-lg font-bold">{partner.name}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-scan" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Below Partners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "50+", label: "合作企业" },
            { value: "100+", label: "项目落地" },
            { value: "20+", label: "行业覆盖" },
            { value: "98%", label: "客户满意度" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card/50 border border-primary/20 animate-slide-up hover:border-primary transition-all hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
