import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "آدرس",
    content: "تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲۳",
  },
  {
    icon: Phone,
    title: "تلفن",
    content: "۰۲۱-۸۸۸۸۸۸۸۸",
  },
  {
    icon: Mail,
    title: "ایمیل",
    content: "info@ayatschool.ir",
  },
  {
    icon: Clock,
    title: "ساعات کاری",
    content: "شنبه تا چهارشنبه: ۷:۳۰ تا ۱۵:۳۰",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>تماس با ما</h2>
          <p>برای کسب اطلاعات بیشتر با ما در تماس باشید</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border/50"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.content}</p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-2xl overflow-hidden h-64 border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9!2d51.41!3d35.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ1JzM2LjAiTiA1McKwMjQnMzYuMCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="نقشه مدرسه"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">ارسال پیام</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    نام و نام خانوادگی
                  </label>
                  <Input
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    شماره تماس
                  </label>
                  <Input
                    type="tel"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className="w-full"
                    dir="ltr"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  ایمیل
                </label>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  موضوع
                </label>
                <Input
                  type="text"
                  placeholder="موضوع پیام خود را وارد کنید"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  پیام
                </label>
                <Textarea
                  placeholder="پیام خود را بنویسید..."
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                ارسال پیام
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
