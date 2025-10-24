import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredNews = [
    {
      title: "云深处科技发布新一代人形机器人",
      date: "2024-03-15",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    },
    {
      title: "智能巡检机器人助力工业4.0升级",
      date: "2024-03-10",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "公司获得新一轮战略投资",
      date: "2024-03-05",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
  ];

  const newsList = [
    {
      title: "云深处参加2024世界机器人大会",
      date: "2024-03-12",
      category: "公司动态",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    },
    {
      title: "四足机器人在电力巡检中的应用案例",
      date: "2024-03-08",
      category: "行业应用",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
    },
    {
      title: "技术创新：AI视觉系统的最新突破",
      date: "2024-03-03",
      category: "技术创新",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
    },
    {
      title: "携手高校共建智能机器人实验室",
      date: "2024-02-28",
      category: "合作动态",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    },
    {
      title: "年度最佳创新产品奖项揭晓",
      date: "2024-02-25",
      category: "公司荣誉",
      image: "https://images.unsplash.com/photo-1563770660941-20978e870e26",
    },
    {
      title: "机器人安全标准研讨会成功举办",
      date: "2024-02-20",
      category: "行业动态",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Featured News Carousel */}
        <section className="py-20 container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
            置顶新闻
          </h2>
          <div className="relative max-w-6xl mx-auto">
            <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
              {featuredNews.map((news, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent flex flex-col justify-end p-12">
                    <h3 className="text-4xl font-bold mb-4">{news.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-5 w-5" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/70"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/70"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center gap-2 mt-6">
              {featuredNews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentSlide ? "bg-primary w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-cyber bg-clip-text text-transparent">
              最新资讯
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsList.map((news, i) => (
                <div
                  key={i}
                  className="group cursor-pointer bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary transition-all hover:shadow-glow"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default News;
