
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
        {/* 英雄区域 */}
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
                    掌握英语
                  </span>
                  <br />
                  <span>通过个性化AI学习</span>
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              >
                说学利用AI创建个性化学习体验，根据您的需求、目标和当前熟练程度量身定制。
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to={user ? "/dashboard" : "/auth"}>
                  <Button size="lg" className="h-12 px-8 text-base button-hover">
                    {user ? "前往仪表盘" : "开始学习"}
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base button-hover">
                  了解更多
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 特点部分 */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么选择说学？</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                我们的AI驱动平台适应您的学习方式和需求
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                title="个性化学习" 
                description="基于您的熟练程度和目标的自适应学习路径"
                delay={0.1}
              />
              <FeatureCard 
                title="互动练习" 
                description="参与词汇、语法、口语和听力的互动活动"
                delay={0.2}
              />
              <FeatureCard 
                title="进度追踪" 
                description="详细的分析和报告以监控您的提升"
                delay={0.3}
              />
              <FeatureCard 
                title="AI对话" 
                description="与我们的先进AI对话伙伴练习口语"
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* 工作原理 */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">如何使用</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                开始使用非常简单，只需几分钟
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <StepCard 
                number="1" 
                title="参加评估" 
                description="完成简短的熟练度测试，确定您当前的水平"
                delay={0.1}
              />
              <StepCard 
                number="2" 
                title="获取计划" 
                description="接收根据您的需求量身定制的个性化学习计划"
                delay={0.2}
              />
              <StepCard 
                number="3" 
                title="开始学习" 
                description="开始您的每日课程并跟踪您的进度"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* CTA部分 */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] -z-10" />
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <GlassCard className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">准备提高您的英语水平？</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  今天就开始您的个性化英语学习之旅，见证不同。
                </p>
                <Link to={user ? "/dashboard" : "/auth"}>
                  <Button size="lg" className="h-12 px-8 text-base button-hover">
                    {user ? "前往仪表盘" : "免费开始使用"}
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
