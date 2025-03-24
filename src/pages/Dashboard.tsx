
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

  // 示例学习数据
  const learningData = {
    streak: 3,
    totalMinutes: 120,
    completedLessons: 8,
    totalLessons: 30,
    progress: (8 / 30) * 100,
    nextLesson: "日常对话中的短语动词",
    dailyGoal: 80,
    dailyProgress: 65,
    recentActivities: [
      {
        id: 1,
        type: "词汇",
        title: "基本旅行词汇",
        date: "今天",
        score: 85,
      },
      {
        id: 2,
        type: "语法",
        title: "过去完成时",
        date: "昨天",
        score: 92,
      },
      {
        id: 3,
        type: "听力",
        title: "理解母语人士",
        date: "2天前",
        score: 78,
      },
    ],
    recommendedActivities: [
      {
        id: 1,
        type: "词汇",
        title: "商务英语术语",
        duration: "15分钟",
      },
      {
        id: 2,
        type: "语法",
        title: "条件句",
        duration: "20分钟",
      },
      {
        id: 3,
        type: "口语",
        title: "面试练习",
        duration: "25分钟",
      },
    ],
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            欢迎回来，{user?.name || "学习者"}！
          </h1>
          <p className="text-muted-foreground">
            您的学习冒险继续。这是您目前的进度。
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
                  <h2 className="text-xl font-semibold">学习进度</h2>
                  <span className="text-sm text-muted-foreground">等级：{user?.level || "初学者"}</span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">整体课程进度</span>
                    <span className="text-sm font-medium">{Math.round(learningData.progress)}%</span>
                  </div>
                  <Progress value={learningData.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard
                    icon={<Clock className="h-5 w-5 text-primary" />}
                    value={learningData.totalMinutes}
                    label="学习分钟数"
                  />
                  <StatCard
                    icon={<BookOpen className="h-5 w-5 text-primary" />}
                    value={learningData.completedLessons}
                    label="已完成课程"
                  />
                  <StatCard
                    icon={<Calendar className="h-5 w-5 text-primary" />}
                    value={learningData.streak}
                    label="连续学习天数"
                  />
                  <StatCard
                    icon={<User className="h-5 w-5 text-primary" />}
                    value={Math.round(learningData.dailyProgress)}
                    label="每日目标"
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
              <h2 className="text-xl font-semibold mb-4">每日目标</h2>
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
                  你进步很快！完成每日目标以保持你的学习连续性。
                </p>
                <Link to="/learning">
                  <Button className="w-full button-hover">继续学习</Button>
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
              <h2 className="text-xl font-semibold mb-4">最近活动</h2>
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
                      <div className="text-xs text-muted-foreground">得分</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full button-hover">
                  查看所有活动
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
              <h2 className="text-xl font-semibold mb-4">为您推荐</h2>
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
                  查看所有推荐
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
                <h2 className="text-xl font-semibold mb-1">下一课</h2>
                <p className="text-muted-foreground">
                  继续您的学习旅程
                </p>
              </div>
              <div className="flex flex-col md:items-end">
                <h3 className="font-medium mb-2">{learningData.nextLesson}</h3>
                <Link to="/learning">
                  <Button className="w-full md:w-auto button-hover">开始课程</Button>
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
