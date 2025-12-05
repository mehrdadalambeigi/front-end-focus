import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const teachers = [
  {
    name: "دکتر محمد رضایی",
    role: "مدیر مدرسه",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "خانم فاطمه احمدی",
    role: "معاون آموزشی",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "آقای علی محمدی",
    role: "مشاور تحصیلی",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "خانم مریم حسینی",
    role: "دبیر ریاضی",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
];

export const TeachersSection = () => {
  return (
    <section id="teachers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>کادر آموزشی</h2>
          <p>اساتید مجرب و متخصص ما آماده خدمت به فرزندان شما هستند</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                      <Facebook className="w-5 h-5 text-primary-foreground" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                      <Twitter className="w-5 h-5 text-primary-foreground" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary-foreground" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                      <Instagram className="w-5 h-5 text-primary-foreground" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">{teacher.name}</h3>
                <p className="text-primary font-medium">{teacher.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
