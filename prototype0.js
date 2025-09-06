export const cards = [
  {
    "name": "Negative Side Effects",
    "definition": "Occurs when the loss function is not properly specified such that in optimizing a given quantity, other major factors are ignored that should have been taken into acccount",
    "failureMode": "The system performs actions that make the scenario worse overall, but optimize what they were asked to do.",
    "example": "When an AI car burns through 2x as much fuel to save 5 minutes on a 2 hour road trip because it was told to get to the destination quickly."
  },
  {
    "name": "Reward Hacking",
    "definition": "Occurs when the loss function is not properly specified, such that the system games the developer's intent without actually completing the task at hand",
    "failureMode": "The system performs actions that were contrary to the developer's intent but technically follow the loss function's minimization",
    "example": "When an AI racing model is told to cross the finish line of a circular track as fast as possible, but simply reverses the car without driving through the course to finish faster."  
  },            
  {
    "name": "Scalable Oversight",
    "definition": "Refers to the notion of being able to continuously monitor a system's performance to reinforce positive and punish negative actions."
    "failureMode": "Problems with this occur when the loss function may be too expensive computationally- or time-wise to evaluate, causing the system to fail when extrapolation is needed.",
    "example": "When a chatbot spews out racist remarks ever so often because its responses cannot be manually checked by a human every time."
  },
  {
    "name": "Safe Exploration",
    "definition": "Refers to the notion of being able to allow systems to learn from their environment without causing significant disruptions that outweigh the model's future benefit.",
    "failureMode": "Problems with this occur when a system has been allowed to explore its environment, but makes a big mistake in the learning process.",
    "example": "When a code-writing AI model is learning to monitor consumer reactions in response to UI changes, and it pushes a bug that deletes the entire codebase."
  },                                             
  {
    "name": "Robustness to Distributional Shift",
    "definition": "Refers to the notion of a model being able to make decent decisions when presented with scenarios outside of its training data.",
    "failureMode": "When a model makes a bad decisions due to lack of information about this scenario in the training set",
    "example": "When a sheep-herding AI model comes across a stray bull and attempts to herd the bull in addition to the sheep."
  }                                       
]
