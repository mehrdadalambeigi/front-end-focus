import { GraduationCap, Palette, Dumbbell, Music, Globe, Calculator } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "آموزش تحصیلی",
    description: "تدریس تمامی دروس با بهترین اساتید و متدهای نوین آموزشی",
    color: "bg-blue-500",
  },
  {
    icon: Palette,
    title: "هنر و خلاقیت",
    description: "کلاس‌های نقاشی، خوشنویسی و هنرهای تجسمی",
    color: "bg-pink-500",
  },
  {
    icon: Dumbbell,
    title: "تربیت بدنی",
    description: "ورزش‌های متنوع و تیم‌های ورزشی حرفه‌ای",
    color: "bg-green-500",
  },
  {
    icon: Music,
    title: "موسیقی",
    description: "آموزش انواع سازها و تئوری موسیقی",
    color: "bg-purple-500",
  },
  {
    icon: Globe,
    title: "زبان‌های خارجی",
    description: "آموزش زبان انگلیسی و عربی با مدرسین بومی",
    color: "bg-orange-500",
  },
  {
    icon: Calculator,
    title: "المپیاد",
    description: "آمادگی برای المپیادهای علمی در تمامی رشته‌ها",
    color: "bg-cyan-500",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>خدمات آموزشی</h2>
          <p>برنامه‌های متنوع برای رشد همه‌جانبه دانش‌آموزان</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 hover-lift border border-border/50 relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-1 h-full ${service.color} group-hover:w-2 transition-all duration-300`} />
              
              <div className={`w-14 h-14 rounded-xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6`}>
                <service.icon className={`w-7 h-7 ${service.color.replace('bg-', 'text-')}`} />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
