
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import GlassCard from "@/components/ui/GlassCard";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const questions = [
  {
    id: 1,
    type: "vocabulary",
    question: "What is the meaning of 'arduous'?",
    options: ["Easy", "Difficult and tiring", "Interesting", "Colorful"],
    correctAnswer: "Difficult and tiring",
  },
  {
    id: 2,
    type: "grammar",
    question: "Choose the correct sentence:",
    options: [
      "She don't like coffee.",
      "She doesn't likes coffee.",
      "She doesn't like coffee.",
      "She not like coffee.",
    ],
    correctAnswer: "She doesn't like coffee.",
  },
  {
    id: 3,
    type: "vocabulary",
    question: "What is a synonym for 'brief'?",
    options: ["Long", "Short", "Detailed", "Complex"],
    correctAnswer: "Short",
  },
  {
    id: 4,
    type: "grammar",
    question: "Select the correct past tense form of 'go':",
    options: ["Goed", "Gone", "Went", "Going"],
    correctAnswer: "Went",
  },
  {
    id: 5,
    type: "listening",
    question: "What would you say to ask for someone's opinion?",
    options: [
      "How are you?",
      "What do you think about this?",
      "Where are you from?",
      "Could you repeat that?",
    ],
    correctAnswer: "What do you think about this?",
  },
];

type ProficiencyLevel = "Beginner" | "Intermediate" | "Advanced" | null;

const Proficiency = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [level, setLevel] = useState<ProficiencyLevel>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { updateTestStatus, setUserLevel } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      toast({
        title: "Please select an answer",
        variant: "destructive",
      });
      return;
    }

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      evaluateTest(newAnswers);
    }
  };

  const evaluateTest = (finalAnswers: string[]) => {
    setIsLoading(true);
    
    // Calculate correct answers
    const correctCount = finalAnswers.filter(
      (answer, index) => answer === questions[index].correctAnswer
    ).length;
    
    const score = (correctCount / questions.length) * 100;
    let proficiencyLevel: ProficiencyLevel = "Beginner";
    
    if (score >= 80) {
      proficiencyLevel = "Advanced";
    } else if (score >= 50) {
      proficiencyLevel = "Intermediate";
    }
    
    setTimeout(() => {
      setLevel(proficiencyLevel);
      setIsCompleted(true);
      setIsLoading(false);
      updateTestStatus(true);
      setUserLevel(proficiencyLevel);
    }, 1500);
  };

  const handleFinish = () => {
    navigate("/dashboard");
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl"
      >
        <GlassCard className="w-full">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-6"></div>
              <h2 className="text-xl font-semibold mb-2">Analyzing Your Answers</h2>
              <p className="text-muted-foreground">
                We're evaluating your proficiency level...
              </p>
            </div>
          ) : isCompleted ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-primary/10 text-primary mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Assessment Completed!</h2>
              <p className="text-muted-foreground mb-6">
                Based on your answers, we've determined your proficiency level.
              </p>
              
              <div className="mb-8 py-6 px-8 bg-muted/40 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Your Proficiency Level:</h3>
                <p className="text-3xl font-bold text-primary">{level}</p>
              </div>
              
              <Button onClick={handleFinish} size="lg" className="button-hover">
                Continue to Dashboard
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {questions[currentQuestion].type.charAt(0).toUpperCase() +
                      questions[currentQuestion].type.slice(1)}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <h2 className="text-xl font-semibold mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3 mb-8">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full text-left p-4 rounded-lg border ${
                      selectedOption === option
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50 hover:bg-muted/40"
                    } transition-all duration-200`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`flex items-center justify-center h-6 w-6 rounded-full mr-3 ${
                          selectedOption === option
                            ? "bg-primary text-white"
                            : "bg-muted"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              <Button
                onClick={handleNextQuestion}
                className="w-full button-hover"
                disabled={selectedOption === null}
              >
                {currentQuestion < questions.length - 1 ? "Next Question" : "Submit Answers"}
              </Button>
            </>
          )}
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default Proficiency;
