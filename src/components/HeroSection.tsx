import { ChevronDown, BookOpen, Users, Award } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary via-primary/90 to-primary/80" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/50 rounded-full blur-3xl" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              🎓 به مدرسه آیت خوش آمدید
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            آینده‌ای روشن با
            <span className="block mt-2 text-secondary">آموزش برتر</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            مدرسه آیت با بیش از ۳۰ سال سابقه درخشان در عرصه آموزش، محیطی امن و پویا برای رشد و تعالی فرزندان شما فراهم کرده است.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8">
              ثبت نام آنلاین
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
            >
              اطلاعات بیشتر
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm">
              <BookOpen className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">۳۰+</div>
              <div className="text-primary-foreground/70 text-sm md:text-base">سال سابقه</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm">
              <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">۲۰۰۰+</div>
              <div className="text-primary-foreground/70 text-sm md:text-base">دانش‌آموز</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm">
              <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">۵۰+</div>
              <div className="text-primary-foreground/70 text-sm md:text-base">افتخارات</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary-foreground/50" />
      </a>
    </section>
  );
};
