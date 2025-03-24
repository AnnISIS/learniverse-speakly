
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, User, Calendar } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { useAuth } from "@/context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample learning data
  const learningData = {
    streak: 3,
    totalMinutes: 120,
    completedLessons: 8,
    totalLessons: 30,
    progress: (8 / 30) * 100,
    nextLesson: "Phrasal Verbs in Daily Conversations",
    dailyGoal: 80,
    dailyProgress: 65,
    recentActivities: [
      {
        id: 1,
        type: "vocabulary",
        title: "Essential Travel Vocabulary",
        date: "Today",
        score: 85,
      },
      {
        id: 2,
        type: "grammar",
        title: "Past Perfect Tense",
        date: "Yesterday",
        score: 92,
      },
      {
        id: 3,
        type: "listening",
        title: "Understanding Native Speakers",
        date: "2 days ago",
        score: 78,
      },
    ],
    recommendedActivities: [
      {
        id: 1,
        type: "vocabulary",
        title: "Business English Terms",
        duration: "15 min",
      },
      {
        id: 2,
        type: "grammar",
        title: "Conditional Sentences",
        duration: "20 min",
      },
      {
        id: 3,
        type: "speaking",
        title: "Job Interview Practice",
        duration: "25 min",
      },
    ],
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.name || "Learner"}!
          </h1>
          <p className="text-muted-foreground">
            Your learning adventure continues. Here's your current progress.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Learning Progress</h2>
                  <span className="text-sm text-muted-foreground">Level: {user?.level || "Beginner"}</span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Overall Course Progress</span>
                    <span className="text-sm font-medium">{Math.round(learningData.progress)}%</span>
                  </div>
                  <Progress value={learningData.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard
                    icon={<Clock className="h-5 w-5 text-primary" />}
                    value={learningData.totalMinutes}
                    label="Minutes Learned"
                  />
                  <StatCard
                    icon={<BookOpen className="h-5 w-5 text-primary" />}
                    value={learningData.completedLessons}
                    label="Lessons Completed"
                  />
                  <StatCard
                    icon={<Calendar className="h-5 w-5 text-primary" />}
                    value={learningData.streak}
                    label="Day Streak"
                  />
                  <StatCard
                    icon={<User className="h-5 w-5 text-primary" />}
                    value={Math.round(learningData.dailyProgress)}
                    label="Daily Goal"
                    isPercentage
                  />
                </div>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <GlassCard className="h-full">
              <h2 className="text-xl font-semibold mb-4">Daily Goal</h2>
              <div className="flex flex-col items-center">
                <div className="relative h-40 w-40 mb-4">
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-muted/30"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={
                        2 * Math.PI * 40 * (1 - learningData.dailyProgress / 100)
                      }
                      className="text-primary"
                      transform="rotate(-90 50 50)"
                    />
                    <text
                      x="50"
                      y="50"
                      textAnchor="middle"
                      dy=".3em"
                      className="text-3xl font-bold"
                      fill="currentColor"
                    >
                      {learningData.dailyProgress}%
                    </text>
                  </svg>
                </div>
                <p className="text-center text-muted-foreground mb-4">
                  You're making good progress! Complete your daily goal to maintain your streak.
                </p>
                <Link to="/learning">
                  <Button className="w-full button-hover">Continue Learning</Button>
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <GlassCard>
              <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {learningData.recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30"
                  >
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {activity.type}
                        </span>
                        <span className="text-sm text-muted-foreground">{activity.date}</span>
                      </div>
                      <h3 className="font-medium">{activity.title}</h3>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{activity.score}%</div>
                      <div className="text-xs text-muted-foreground">Score</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full button-hover">
                  View All Activities
                </Button>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <GlassCard>
              <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
              <div className="space-y-3">
                {learningData.recommendedActivities.map((activity) => (
                  <Link
                    key={activity.id}
                    to="/learning"
                    className="block p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {activity.type}
                      </span>
                      <span className="text-sm text-muted-foreground">{activity.duration}</span>
                    </div>
                    <h3 className="font-medium">{activity.title}</h3>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full button-hover">
                  View All Recommendations
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <GlassCard>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-semibold mb-1">Next Lesson</h2>
                <p className="text-muted-foreground">
                  Continue your learning journey
                </p>
              </div>
              <div className="flex flex-col md:items-end">
                <h3 className="font-medium mb-2">{learningData.nextLesson}</h3>
                <Link to="/learning">
                  <Button className="w-full md:w-auto button-hover">Start Lesson</Button>
                </Link>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label, isPercentage = false }) => (
  <div className="bg-muted/30 rounded-lg p-4 flex flex-col items-center justify-center">
    <div className="mb-2">{icon}</div>
    <div className="text-xl font-bold mb-1">{value}{isPercentage && "%"}</div>
    <div className="text-xs text-muted-foreground text-center">{label}</div>
  </div>
);

export default Dashboard;
