import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const news = [
  {
    title: "云深处科技发布新一代人形机器人",
    date: "2024-03-15",
    category: "产品发布",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    title: "智能巡检机器人助力工业4.0升级",
    date: "2024-03-10",
    category: "行业应用",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "公司获得新一轮战略投资",
    date: "2024-03-05",
    category: "公司动态",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
];

const LatestNews = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 animate-fade-in">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">最新资讯</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              了解云深处最新动态与行业资讯
            </p>
          </div>
          <Link 
            to="/news" 
            className="hidden md:flex items-center gap-2 text-primary hover:gap-3 transition-all group"
          >
            <span className="font-medium">查看全部</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-6">
          {news.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-primary/20 transition-all duration-500 hover:border-primary hover:shadow-glow transform-gpu [perspective:1000px] hover:[transform:translateZ(0)_rotateX(3deg)_rotateY(-5deg)] ${index === 0 ? 'md:col-span-2 md:row-span-2' : index % 5 === 1 ? 'md:row-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_300px_at_50%_-20%,hsl(var(--ring)/0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full">
                {/* Visual Layer */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    loading="lazy"
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 animate-scan" />
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-medium shadow">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-medium">阅读更多</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="md:hidden mt-8 text-center">
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group"
          >
            <span className="font-medium">查看全部资讯</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
