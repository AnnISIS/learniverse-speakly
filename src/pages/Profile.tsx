
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
    // In a real app, this would update the user profile via API
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
          <p className="text-muted-foreground">
            View and manage your profile settings
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
                    <p className="text-sm font-medium mb-1">Proficiency Level</p>
                    <p className="bg-muted/40 py-2 px-4 rounded-md">{user?.level || "Beginner"}</p>
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
                  <h2 className="text-xl font-semibold">Personal Information</h2>
                  {!isEditing ? (
                    <Button variant="outline" onClick={() => setIsEditing(true)}>
                      Edit Profile
                    </Button>
                  ) : (
                    <div className="flex space-x-2">
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSaveProfile}>Save</Button>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
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
                <h2 className="text-xl font-semibold mb-6">Learning Preferences</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h3 className="font-medium mb-1">Daily Goal</h3>
                      <p className="text-sm text-muted-foreground">
                        Minutes of learning per day
                      </p>
                    </div>
                    <div className="text-xl font-bold">30 min</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h3 className="font-medium mb-1">Learning Focus</h3>
                      <p className="text-sm text-muted-foreground">
                        Your primary learning objective
                      </p>
                    </div>
                    <div className="text-primary font-medium">Speaking</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h3 className="font-medium mb-1">Notification Preferences</h3>
                      <p className="text-sm text-muted-foreground">
                        Daily reminders and updates
                      </p>
                    </div>
                    <div className="text-primary font-medium">Enabled</div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Update Preferences
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
            <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start text-left">
                Change Password
              </Button>
              
              <Button variant="outline" className="w-full justify-start text-left">
                Notification Settings
              </Button>
              
              <Button variant="outline" className="w-full justify-start text-left">
                Privacy Settings
              </Button>
              
              <Button 
                variant="destructive" 
                className="w-full mt-4"
                onClick={logout}
              >
                Log Out
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
