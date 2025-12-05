import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">مدرسه آیت</span>
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              مدرسه آیت با بیش از ۳۰ سال سابقه، محیطی امن و پویا برای رشد و تعالی فرزندان شما فراهم کرده است.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">دسترسی سریع</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-background/70 hover:text-secondary transition-colors">خانه</a></li>
              <li><a href="#about" className="text-background/70 hover:text-secondary transition-colors">درباره ما</a></li>
              <li><a href="#services" className="text-background/70 hover:text-secondary transition-colors">خدمات</a></li>
              <li><a href="#teachers" className="text-background/70 hover:text-secondary transition-colors">اساتید</a></li>
              <li><a href="#news" className="text-background/70 hover:text-secondary transition-colors">اخبار</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-secondary transition-colors">تماس با ما</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">خدمات ما</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">آموزش تحصیلی</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">کلاس‌های فوق‌برنامه</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">مشاوره تحصیلی</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">فعالیت‌های ورزشی</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors">آمادگی المپیاد</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">تماس با ما</h3>
            <ul className="space-y-4">
              <li className="text-background/70">
                <span className="block text-background font-medium mb-1">آدرس:</span>
                تهران، خیابان ولیعصر، پلاک ۱۲۳
              </li>
              <li className="text-background/70">
                <span className="block text-background font-medium mb-1">تلفن:</span>
                ۰۲۱-۸۸۸۸۸۸۸۸
              </li>
              <li className="text-background/70">
                <span className="block text-background font-medium mb-1">ایمیل:</span>
                info@ayatschool.ir
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/70 text-sm">
            © ۱۴۰۳ مدرسه آیت. تمامی حقوق محفوظ است.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
};
