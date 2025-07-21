import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Calendar, Users, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-event-elegant.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Elegant event space with crystal chandeliers and sophisticated table settings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Premium Event Management</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Create
                <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                  Unforgettable
                </span>
                Experiences
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Transform your vision into extraordinary events with our sophisticated platform. From intimate gatherings to grand celebrations, we make every moment magical.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
                Start Planning
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5000+</div>
                <div className="text-white/80 text-sm">Events Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-white/80 text-sm">Premium Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Smart Planning</h3>
                  <p className="text-white/80">AI-powered event coordination</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Guest Management</h3>
                  <p className="text-white/80">Seamless RSVP & communication</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Real-time Updates</h3>
                  <p className="text-white/80">Live event monitoring & alerts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;