
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import GlassCard from "@/components/ui/GlassCard";
import { useAuth } from "@/context/AuthContext";
import { BookOpen, Headphones, Mic, Video } from "lucide-react";

// Mock learning modules
const learningModules = {
  vocabulary: [
    {
      id: "v1",
      title: "Essential Travel Vocabulary",
      description: "Learn common words and phrases for traveling",
      level: "Beginner",
      duration: "15 min",
      progress: 80,
    },
    {
      id: "v2",
      title: "Business English Terms",
      description: "Important vocabulary for professional settings",
      level: "Intermediate",
      duration: "20 min",
      progress: 30,
    },
    {
      id: "v3",
      title: "Academic Vocabulary",
      description: "Words commonly used in academic contexts",
      level: "Advanced",
      duration: "25 min",
      progress: 0,
    },
  ],
  grammar: [
    {
      id: "g1",
      title: "Present Simple & Continuous",
      description: "Understanding and using present tenses correctly",
      level: "Beginner",
      duration: "20 min",
      progress: 100,
    },
    {
      id: "g2",
      title: "Past Perfect Tense",
      description: "Learn when and how to use the past perfect tense",
      level: "Intermediate",
      duration: "25 min",
      progress: 60,
    },
    {
      id: "g3",
      title: "Conditional Sentences",
      description: "Master all types of conditional sentences",
      level: "Advanced",
      duration: "30 min",
      progress: 0,
    },
  ],
  listening: [
    {
      id: "l1",
      title: "Basic Conversations",
      description: "Practice understanding simple dialogues",
      level: "Beginner",
      duration: "15 min",
      progress: 100,
    },
    {
      id: "l2",
      title: "Understanding Native Speakers",
      description: "Improve comprehension of natural speech patterns",
      level: "Intermediate",
      duration: "20 min",
      progress: 45,
    },
    {
      id: "l3",
      title: "Advanced Listening Comprehension",
      description: "Complex discussions and academic lectures",
      level: "Advanced",
      duration: "25 min",
      progress: 0,
    },
  ],
  speaking: [
    {
      id: "s1",
      title: "Basic Introductions",
      description: "Practice introducing yourself and others",
      level: "Beginner",
      duration: "10 min",
      progress: 100,
    },
    {
      id: "s2",
      title: "Everyday Conversations",
      description: "Common scenarios like ordering food, asking for directions",
      level: "Intermediate",
      duration: "15 min",
      progress: 70,
    },
    {
      id: "s3",
      title: "Job Interview Practice",
      description: "Prepare for professional English interviews",
      level: "Advanced",
      duration: "20 min",
      progress: 0,
    },
  ],
};

const Learning = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("vocabulary");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const getModuleIcon = (type: string) => {
    switch (type) {
      case "vocabulary":
        return <BookOpen className="h-5 w-5" />;
      case "listening":
        return <Headphones className="h-5 w-5" />;
      case "speaking":
        return <Mic className="h-5 w-5" />;
      case "grammar":
      default:
        return <Video className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Learning Modules</h1>
          <p className="text-muted-foreground">
            Explore different modules to improve your English skills
          </p>
        </div>

        <Tabs defaultValue="vocabulary" value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="vocabulary" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>Vocabulary</span>
            </TabsTrigger>
            <TabsTrigger value="grammar" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Video className="h-4 w-4 mr-2" />
              <span>Grammar</span>
            </TabsTrigger>
            <TabsTrigger value="listening" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Headphones className="h-4 w-4 mr-2" />
              <span>Listening</span>
            </TabsTrigger>
            <TabsTrigger value="speaking" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Mic className="h-4 w-4 mr-2" />
              <span>Speaking</span>
            </TabsTrigger>
          </TabsList>

          {(["vocabulary", "grammar", "listening", "speaking"] as const).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid gap-6">
                {learningModules[category].map((module, index) => (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <GlassCard>
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="flex-1 mb-4 md:mb-0 md:mr-6">
                          <div className="flex items-center mb-2">
                            <div className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                              {getModuleIcon(category)}
                            </div>
                            <div>
                              <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary">
                                {module.level}
                              </span>
                              <span className="text-xs text-muted-foreground ml-2">
                                {module.duration}
                              </span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                          <p className="text-muted-foreground mb-4">{module.description}</p>
                          
                          <div className="mb-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{module.progress}%</span>
                            </div>
                            <Progress value={module.progress} className="h-2" />
                          </div>
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                          <Button className="button-hover">
                            {module.progress > 0 ? "Continue" : "Start"} Module
                          </Button>
                          {module.progress === 100 && (
                            <Button variant="outline" className="button-hover">
                              Review
                            </Button>
                          )}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Learning;
