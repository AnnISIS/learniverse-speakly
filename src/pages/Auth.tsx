
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GlassCard from "@/components/ui/GlassCard";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
        toast({
          title: "欢迎回来！",
          description: "您已成功登录。",
        });
      } else {
        await register(name, email, password);
        toast({
          title: "账号已创建！",
          description: "您的账号已成功创建。",
        });
      }
      
      navigate("/proficiency");
    } catch (error) {
      toast({
        title: "错误",
        description: "发生错误。请重试。",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10" />
      <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <GlassCard className="w-full">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold mb-2">
              {isLogin ? "欢迎回来" : "创建账号"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin
                ? "输入您的凭据以访问您的账号"
                : "开始您的个性化英语学习之旅"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">姓名</Label>
                <Input
                  id="name"
                  placeholder="输入您的姓名"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">邮箱</Label>
              <Input
                id="email"
                type="email"
                placeholder="输入您的邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">密码</Label>
              <Input
                id="password"
                type="password"
                placeholder="输入您的密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 button-hover"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>处理中...</span>
                </div>
              ) : isLogin ? (
                "登录"
              ) : (
                "注册"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isLogin ? "没有账号？" : "已有账号？"}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-primary hover:underline focus:outline-none"
              >
                {isLogin ? "注册" : "登录"}
              </button>
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default Auth;
