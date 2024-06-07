import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const SampleWorkouts = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const SampleWorkoutCard = styled.div`
  font-size:10px;
  width: 50px; /* Adjust width as needed */
  height: 80px; /* Adjust height as needed */
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background_secondary};
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
`;

const AddWorkout = ({ workout, addNewWorkout, buttonLoading }) => {
  const sampleWorkouts = [
    "#Legs\n-Back Squat\n-5 setsX15 reps\n-30 kg\n-10 min",
    "#Arms\n-Bicep Curls\n-3 setsX12 reps\n-15 kg\n-8 min",
    "#Core\n-Plank\n-3 sets\n-1 min each\n-No weight",
    "#Chest\n-Bench Press\n-4 setsX10 reps\n-50 kg\n-12 min",
    "#Back\n-Deadlift\n-4 setsX8 reps\n-70 kg\n-15 min",
    "#Shoulders\n-Shoulder Press\n-3 setsX12 reps\n-20 kg\n-10 min",
    "#Cardio\n-Running\n-30 minutes\n-6 km/h\n-30 min",
    "#Stretching\n-Yoga\n-30 minutes\n-No weight\n-30 min",
    "#HIIT\n-Burpees\n-5 setsX20 reps\n-No weight\n-20 min",
    "#Full Body\n-Circuit Training\n-4 setsX10 reps\n-Bodyweight\n-30 min",
    "#Glutes\n-Squats\n-4 setsX12 reps\n-40 kg\n-15 min",
    "#Triceps\n-Tricep Dips\n-3 setsX10 reps\n-Bodyweight\n-8 min",
    "#Hamstrings\n-Deadlifts\n-4 setsX8 reps\n-60 kg\n-12 min",
    "#Calves\n-Calf Raises\n-3 setsX15 reps\n-Bodyweight\n-6 min",
    "#Upper Body\n-Push-Ups\n-4 setsX12 reps\n-Bodyweight\n-10 min",
  ];

  const handleSampleClick = (sample) => {
    setWorkout((prevWorkout) => prevWorkout + "\n" + sample);
  };

  return (
    <Card>
      <Title>Add New Workout</Title>
      <TextInput
        label="Workout"
        textArea
        rows={10}
        placeholder={`Enter in this format:

#Category
-Workout Name
-Sets
-Reps
-Weight
-Duration`}
        value={workout}
      />
      <Button
        text="Add Workout"
        small
        onClick={() => addNewWorkout()}
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
      />
      <SampleWorkouts>
        {sampleWorkouts.map((sample, index) => (
          <SampleWorkoutCard key={index} onClick={() => handleSampleClick(sample)}>
            {sample}
          </SampleWorkoutCard>
        ))}
      </SampleWorkouts>
    </Card>
  );
};

export default AddWorkout;
