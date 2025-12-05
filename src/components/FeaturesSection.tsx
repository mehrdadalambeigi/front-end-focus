import { BookOpen, Users, Monitor, Trophy, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "کتابخانه مجهز",
    description: "دسترسی به هزاران کتاب و منابع آموزشی در کتابخانه مجهز مدرسه",
  },
  {
    icon: Monitor,
    title: "آموزش دیجیتال",
    description: "استفاده از تکنولوژی‌های نوین آموزشی و کلاس‌های هوشمند",
  },
  {
    icon: Users,
    title: "کادر مجرب",
    description: "اساتید باتجربه و متخصص در تمامی رشته‌های تحصیلی",
  },
  {
    icon: Trophy,
    title: "افتخارات ورزشی",
    description: "کسب مقام‌های برتر در مسابقات ورزشی استانی و کشوری",
  },
  {
    icon: Heart,
    title: "محیط دوستانه",
    description: "فضای گرم و صمیمی برای رشد اجتماعی و عاطفی دانش‌آموزان",
  },
  {
    icon: Shield,
    title: "امنیت کامل",
    description: "نظارت ۲۴ ساعته و تضمین امنیت کامل فرزندان شما",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>ویژگی‌های مدرسه</h2>
          <p>امکانات و خدمات منحصر به فرد برای آموزش بهتر</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 hover-lift border border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
