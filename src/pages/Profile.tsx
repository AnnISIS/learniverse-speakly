
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GlassCard from "@/components/ui/GlassCard";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveProfile = () => {
    // 在实际应用中，这将通过API更新用户资料
    setIsEditing(false);
    toast({
      title: "资料已更新",
      description: "您的个人资料已成功更新。",
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">您的个人资料</h1>
          <p className="text-muted-foreground">
            查看并管理您的个人资料设置
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard>
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold mb-1">{user?.name}</h2>
                  <p className="text-muted-foreground mb-4">{user?.email}</p>
                  
                  <div className="w-full">
                    <p className="text-sm font-medium mb-1">熟练度级别</p>
                    <p className="bg-muted/40 py-2 px-4 rounded-md">{user?.level || "初学者"}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <GlassCard>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">个人信息</h2>
                  {!isEditing ? (
                    <Button variant="outline" onClick={() => setIsEditing(true)}>
                      编辑资料
                    </Button>
                  ) : (
                    <div className="flex space-x-2">
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        取消
                      </Button>
                      <Button onClick={handleSaveProfile}>保存</Button>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">姓名</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">邮箱</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-6"
            >
              <GlassCard>
                <h2 className="text-xl font-semibold mb-6">学习偏好</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h3 className="font-medium mb-1">每日目标</h3>
                      <p className="text-sm text-muted-foreground">
                        每天学习分钟数
                      </p>
                    </div>
                    <div className="text-xl font-bold">30 分钟</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h3 className="font-medium mb-1">学习重点</h3>
                      <p className="text-sm text-muted-foreground">
                        您的主要学习目标
                      </p>
                    </div>
                    <div className="text-primary font-medium">口语</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h3 className="font-medium mb-1">通知偏好</h3>
                      <p className="text-sm text-muted-foreground">
                        每日提醒和更新
                      </p>
                    </div>
                    <div className="text-primary font-medium">已启用</div>
                  </div>

                  <Button variant="outline" className="w-full">
                    更新偏好
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <GlassCard>
            <h2 className="text-xl font-semibold mb-6">账号设置</h2>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start text-left">
                修改密码
              </Button>
              
              <Button variant="outline" className="w-full justify-start text-left">
                通知设置
              </Button>
              
              <Button variant="outline" className="w-full justify-start text-left">
                隐私设置
              </Button>
              
              <Button 
                variant="destructive" 
                className="w-full mt-4"
                onClick={logout}
              >
                退出登录
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
