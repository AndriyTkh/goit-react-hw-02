import { useEffect, useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedData = localStorage.getItem("feedback");
    if (savedData !== null) {
      return JSON.parse(savedData);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  const [totalFeedback, setTotalFeedback] = useState(() => {
    return feedback.good + feedback.neutral + feedback.bad;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
    setTotalFeedback(totalFeedback + 1);
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    setTotalFeedback(0);
  };

  return (
    <>
      <Description />

      <Options
        update={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback data={feedback} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}
