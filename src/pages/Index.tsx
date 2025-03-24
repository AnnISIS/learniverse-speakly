
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import GlassCard from "@/components/ui/GlassCard";

const Index = () => {
  const { user } = useAuth();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10" />
          <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10" />
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Master English
                  </span>
                  <br />
                  <span>With Personalized AI Learning</span>
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              >
                Speakly uses AI to create a personalized learning experience tailored to your needs, goals, and current proficiency level.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to={user ? "/dashboard" : "/auth"}>
                  <Button size="lg" className="h-12 px-8 text-base button-hover">
                    {user ? "Go to Dashboard" : "Start Learning"}
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base button-hover">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Speakly?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our AI-powered platform adapts to your learning style and needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                title="Personalized Learning" 
                description="Adaptive learning paths based on your proficiency level and goals"
                delay={0.1}
              />
              <FeatureCard 
                title="Interactive Exercises" 
                description="Engaging activities to practice vocabulary, grammar, speaking and listening"
                delay={0.2}
              />
              <FeatureCard 
                title="Progress Tracking" 
                description="Detailed analytics and reports to monitor your improvement"
                delay={0.3}
              />
              <FeatureCard 
                title="AI Conversation" 
                description="Practice speaking with our advanced AI conversation partner"
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Getting started is easy and takes just a few minutes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <StepCard 
                number="1" 
                title="Take the Assessment" 
                description="Complete a short proficiency test to determine your current level"
                delay={0.1}
              />
              <StepCard 
                number="2" 
                title="Get Your Plan" 
                description="Receive a personalized learning plan tailored to your needs"
                delay={0.2}
              />
              <StepCard 
                number="3" 
                title="Start Learning" 
                description="Begin your daily lessons and track your progress"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] -z-10" />
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <GlassCard className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your English?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Start your personalized English learning journey today and see the difference.
                </p>
                <Link to={user ? "/dashboard" : "/auth"}>
                  <Button size="lg" className="h-12 px-8 text-base button-hover">
                    {user ? "Go to Dashboard" : "Get Started for Free"}
                  </Button>
                </Link>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const FeatureCard = ({ title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <GlassCard className="h-full">
      <div className="flex flex-col h-full">
        <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </GlassCard>
  </motion.div>
);

const StepCard = ({ number, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <GlassCard className="h-full">
      <div className="flex flex-col h-full">
        <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </GlassCard>
  </motion.div>
);

export default Index;
