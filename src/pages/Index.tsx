import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('home');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Senior Game Developer',
      department: 'Разработка',
      location: 'Удаленно',
      type: 'Full-time',
      description: 'Ищем опытного разработчика для работы над масштабными игровыми проектами. Требуется опыт работы с Unity/Unreal Engine.'
    },
    {
      id: 2,
      title: '3D Artist',
      department: 'Дизайн',
      location: 'Москва / Удаленно',
      type: 'Full-time',
      description: 'Создание высококачественных 3D моделей и текстур для игровых проектов. Требуется портфолио.'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Инфраструктура',
      location: 'Удаленно',
      type: 'Full-time',
      description: 'Настройка и поддержка серверной инфраструктуры для онлайн-игр. Опыт с Kubernetes и AWS обязателен.'
    },
    {
      id: 4,
      title: 'Community Manager',
      department: 'Маркетинг',
      location: 'Удаленно',
      type: 'Part-time',
      description: 'Управление игровым сообществом, работа с Discord, организация событий и турниров.'
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'CyberRush Arena',
      category: 'Multiplayer FPS',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Fantasy Realms',
      category: 'MMORPG',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Speed Legends',
      category: 'Racing',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'Tactical Ops',
      category: 'Strategy',
      image: '/placeholder.svg'
    }
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы рассмотрим вашу кандидатуру и свяжемся с вами в ближайшее время.",
    });
    setSelectedJob(null);
    setActiveSection('home');
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/10">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Gamepad2" className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold glow-text">GameServerX</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'jobs', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О компании'}
                  {section === 'jobs' && 'Вакансии'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="glow-effect">Подать заявку</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 glow-text">
              Создаём игровые миры будущего
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Присоединяйся к команде разработчиков GameServerX и создавай проекты, которые играют миллионы
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="glow-effect" onClick={() => scrollToSection('jobs')}>
                <Icon name="Briefcase" className="mr-2" />
                Смотреть вакансии
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                <Icon name="Rocket" className="mr-2" />
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center glow-text">О компании</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all">
                <CardHeader>
                  <Icon name="Users" className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>200+ специалистов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Команда профессионалов из разных стран</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all">
                <CardHeader>
                  <Icon name="Trophy" className="w-12 h-12 text-secondary mb-4" />
                  <CardTitle>15+ проектов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Успешно запущенных игр на всех платформах</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all">
                <CardHeader>
                  <Icon name="Globe" className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>50M+ игроков</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">По всему миру играют в наши игры</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-lg text-center text-muted-foreground">
              GameServerX — это динамично развивающаяся компания, специализирующаяся на разработке 
              серверной инфраструктуры и создании игр мирового уровня. Мы объединяем лучших специалистов 
              индустрии и предоставляем им все возможности для реализации амбициозных проектов.
            </p>
          </div>
        </div>
      </section>

      <section id="jobs" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-text">Открытые вакансии</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {jobs.map((job) => (
              <Card 
                key={job.id} 
                className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer hover:scale-105"
                onClick={() => setSelectedJob(job)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Icon name="Building2" size={14} />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="MapPin" size={14} />
                          {job.location}
                        </span>
                      </CardDescription>
                    </div>
                    <Icon name="ChevronRight" className="text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">{job.type}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-text">Наши проекты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <Icon name="Play" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-text">Свяжитесь с нами</h2>
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
              <CardDescription>Мы всегда рады новым талантам!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-primary" />
                <span>careers@gameserverx.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" className="text-primary" />
                <span>Москва, Россия</span>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="icon">
                  <Icon name="Twitter" />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Linkedin" />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Github" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {selectedJob && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-card border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{selectedJob.title}</CardTitle>
                  <CardDescription className="flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <Icon name="Building2" size={16} />
                      {selectedJob.department}
                    </span>
                    <span className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      {selectedJob.location}
                    </span>
                  </CardDescription>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedJob(null)}>
                  <Icon name="X" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">{selectedJob.description}</p>
              
              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя и Фамилия</Label>
                  <Input id="name" required className="bg-background" />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="bg-background" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" required className="bg-background" />
                </div>
                
                <div>
                  <Label htmlFor="resume">Резюме (PDF)</Label>
                  <Input id="resume" type="file" accept=".pdf" required className="bg-background" />
                </div>
                
                <div>
                  <Label htmlFor="portfolio">Ссылка на портфолио</Label>
                  <Input id="portfolio" type="url" placeholder="https://" className="bg-background" />
                </div>
                
                <div>
                  <Label htmlFor="message">Сопроводительное письмо</Label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Расскажите о себе и почему вы хотите работать у нас..."
                    className="bg-background"
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1 glow-effect">
                    <Icon name="Send" className="mr-2" />
                    Отправить заявку
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setSelectedJob(null)}>
                    Отмена
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="bg-card/30 border-t border-primary/20 py-8 px-6 mt-20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 GameServerX. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
