import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Palette,
  Heart,
  Clock,
  Award
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Event Planning",
      description: "AI-powered timeline creation and automated task management that adapts to your event's unique requirements.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Guest Management",
      description: "Streamlined RSVP tracking, personalized communications, and seamless check-in experiences for all attendees.",
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      icon: Zap,
      title: "Real-time Coordination",
      description: "Live updates, instant notifications, and team collaboration tools that keep everyone synchronized.",
      color: "text-yellow-500",
      bg: "bg-yellow-50"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee, ensuring your events run smoothly every time.",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive reporting and analytics to measure success and optimize future events with data-driven decisions.",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Fully customizable themes, branded communications, and personalized event experiences that reflect your style.",
      color: "text-pink-500",
      bg: "bg-pink-50"
    },
    {
      icon: Heart,
      title: "Premium Support",
      description: "24/7 dedicated support team with event planning expertise ready to assist you at every step of your journey.",
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Advanced scheduling tools with automated reminders and timeline optimization for maximum efficiency.",
      color: "text-teal-500",
      bg: "bg-teal-50"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning platform trusted by thousands of event professionals and recognized for innovation.",
      color: "text-orange-500",
      bg: "bg-orange-50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              To Create Magic
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of tools transforms complex event planning into an elegant, 
            streamlined experience that delivers exceptional results every time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:shadow-card hover:scale-105 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className={`inline-flex p-3 rounded-xl ${feature.bg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-3xl p-12 border border-border shadow-elegant">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Events?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of event professionals who trust EventElegance to create 
              extraordinary experiences that leave lasting impressions.
            </p>
            <div className="inline-flex items-center space-x-2 text-primary">
              <Award className="h-5 w-5" />
              <span className="font-semibold">Trusted by 5,000+ event professionals worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;