import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

const news = [
  {
    title: "برگزاری جشن فارغ‌التحصیلی دانش‌آموزان",
    date: "۱۵ خرداد ۱۴۰۳",
    excerpt: "جشن فارغ‌التحصیلی دانش‌آموزان پایه دوازدهم با حضور والدین و مسئولین برگزار شد.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
  },
  {
    title: "کسب مقام اول المپیاد ریاضی",
    date: "۱۰ خرداد ۱۴۰۳",
    excerpt: "دانش‌آموز مدرسه آیت موفق به کسب مقام اول المپیاد ریاضی کشوری شد.",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=300&fit=crop",
  },
  {
    title: "افتتاح آزمایشگاه جدید علوم",
    date: "۵ خرداد ۱۴۰۳",
    excerpt: "آزمایشگاه مجهز علوم مدرسه با حضور مسئولین آموزش و پرورش افتتاح شد.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
  },
];

export const NewsSection = () => {
  return (
    <section id="news" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>آخرین اخبار</h2>
          <p>از جدیدترین رویدادها و فعالیت‌های مدرسه مطلع شوید</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-card rounded-3xl overflow-hidden hover-lift border border-border/50 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <Button variant="ghost" className="group/btn text-primary hover:text-primary">
                  ادامه مطلب
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:-translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            مشاهده همه اخبار
          </Button>
        </div>
      </div>
    </section>
  );
};
