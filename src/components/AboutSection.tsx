import { Check } from "lucide-react";
import { Button } from "./ui/button";

const highlights = [
  "بیش از ۳۰ سال سابقه درخشان آموزشی",
  "کادر آموزشی مجرب و متخصص",
  "امکانات آموزشی و ورزشی پیشرفته",
  "محیطی امن و پویا برای یادگیری",
  "همکاری نزدیک با والدین",
  "برنامه‌های فوق برنامه متنوع",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              درباره مدرسه
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              مدرسه آیت، خانه دوم فرزندان شما
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              مدرسه آیت با هدف پرورش نسلی آگاه، خلاق و متعهد تأسیس شده است. ما معتقدیم که هر دانش‌آموز استعدادهای منحصر به فردی دارد و وظیفه ما کشف و شکوفایی این استعدادهاست.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              بیشتر بدانید
            </Button>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl h-48 flex items-center justify-center text-primary-foreground">
                  <div className="text-center">
                    <div className="text-4xl font-bold">۳۰+</div>
                    <div className="text-sm opacity-80">سال سابقه</div>
                  </div>
                </div>
                <div className="bg-muted rounded-3xl h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop"
                    alt="کلاس درس"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-muted rounded-3xl h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop"
                    alt="دانش‌آموزان"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl h-48 flex items-center justify-center text-secondary-foreground">
                  <div className="text-center">
                    <div className="text-4xl font-bold">۲۰۰۰+</div>
                    <div className="text-sm opacity-80">دانش‌آموز</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
