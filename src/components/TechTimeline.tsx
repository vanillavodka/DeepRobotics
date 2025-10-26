import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface TimelineItem {
  year: number;
  title: string;
  description: string;
}

interface TechTimelineProps {
  items: TimelineItem[];
}

const TechTimeline = ({ items }: TechTimelineProps) => {
  const [activeYear, setActiveYear] = useState(items[items.length - 1].year);

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Holographic Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Main Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary/0 via-primary to-primary/0">
          {/* Animated Scanner */}
          <div className="absolute inset-0 w-full animate-scan-vertical">
            <div className="h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-24 py-12">
          {items.map((item, idx) => {
            const isActive = activeYear === item.year;
            const isLeft = idx % 2 === 0;
            
            return (
              <div
                key={item.year}
                className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                onClick={() => setActiveYear(item.year)}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div
                    className={`group cursor-pointer transition-all duration-500 ${
                      isActive 
                        ? 'scale-105' 
                        : 'scale-90 opacity-60 hover:opacity-80 hover:scale-95'
                    }`}
                  >
                    {/* Card with 3D effect */}
                    <div className="relative">
                      {/* Glow effect */}
                      {isActive && (
                        <div className="absolute inset-0 bg-primary/20 blur-2xl animate-pulse" />
                      )}
                      
                      {/* Main card */}
                      <div className={`relative bg-card border-2 rounded-xl p-6 overflow-hidden transition-all duration-500 ${
                        isActive 
                          ? 'border-primary shadow-[0_0_30px_hsl(var(--primary)/0.3)]' 
                          : 'border-primary/20 hover:border-primary/40'
                      }`}>
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
                        
                        {/* Scan line effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-scan opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className={`text-2xl font-bold mb-2 transition-colors ${
                            isActive ? 'text-primary' : 'text-foreground'
                          }`}>
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Year indicator */}
                        <div className={`absolute ${isLeft ? '-right-20' : '-left-20'} top-1/2 -translate-y-1/2`}>
                          <div className={`text-5xl font-black transition-all duration-500 ${
                            isActive 
                              ? 'text-primary scale-110 [text-shadow:0_0_20px_hsl(var(--primary))]' 
                              : 'text-primary/30'
                          }`}>
                            {item.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`relative transition-all duration-500 ${
                    isActive ? 'scale-150' : 'scale-100'
                  }`}>
                    {/* Outer rings */}
                    {isActive && (
                      <>
                        <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border-2 border-primary rounded-full animate-ping" />
                        <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border-2 border-primary rounded-full animate-pulse" />
                      </>
                    )}
                    
                    {/* Main node */}
                    <div className={`relative w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                      isActive 
                        ? 'bg-primary border-primary shadow-[0_0_20px_hsl(var(--primary))] scale-150' 
                        : 'bg-card border-primary/50'
                    }`}>
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>

                    {/* Connection arrow */}
                    <div className={`absolute ${isLeft ? 'right-8' : 'left-8'} top-1/2 -translate-y-1/2 transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <ChevronRight className={`h-6 w-6 text-primary ${!isLeft && 'rotate-180'}`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Year Navigation */}
      <div className="mt-16 flex justify-center gap-3 flex-wrap">
        {items.map((item) => (
          <button
            key={item.year}
            onClick={() => setActiveYear(item.year)}
            className={`relative px-6 py-3 font-bold transition-all duration-300 overflow-hidden group ${
              activeYear === item.year
                ? "text-primary-foreground"
                : "text-foreground hover:text-primary"
            }`}
          >
            {/* Background */}
            <div className={`absolute inset-0 transition-all duration-300 ${
              activeYear === item.year
                ? "bg-primary scale-100"
                : "bg-card border border-primary/20 group-hover:border-primary scale-95 group-hover:scale-100"
            }`}>
              {/* Scan effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>
            
            {/* Text */}
            <span className="relative z-10">{item.year}</span>
            
            {/* Glow effect for active */}
            {activeYear === item.year && (
              <div className="absolute inset-0 shadow-[0_0_30px_hsl(var(--primary)/0.5)] animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TechTimeline;
