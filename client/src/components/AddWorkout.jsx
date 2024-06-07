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
  font-size: 8px;
  width: 60px; /* Adjust width as needed */
  height: 70px; /* Adjust height as needed */
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background_secondary};
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden; /* Hide overflowing text */
  cursor: pointer;
`;

const AddWorkout = ({ workout, setWorkout, addNewWorkout, buttonLoading }) => {
  const sampleWorkouts = [
    "#Legs\n-Back Squat\n-5 setsX15 reps\n-30 kg\n-10 min",
    "#Arms\n-Bicep Curls\n-3 setsX12 reps\n-15 kg\n-8 min",
    "#Chest\n-Bench Press\n-4 setsX10 reps\n-50 kg\n-12 min",
    "#Back\n-Deadlift\n-4 setsX8 reps\n-70 kg\n-15 min",
    "#Shoulders\n-Shoulder Press\n-3 setsX12 reps\n-20 kg\n-10 min",
    "#Stretching\n-Yoga\n-30 minutes\n-No weight\n-30 min",
    "#Full Body\n-Circuit Training\n-4 setsX10 reps\n-Bodyweight\n-30 min",
    "#Glutes\n-Squats\n-4 setsX12 reps\n-40 kg\n-15 min",
    "#Upper Body\n-Push-Ups\n-4 setsX12 reps\n-Bodyweight\n-10 min",
  ];

  const handleSampleClick = (sample) => {
    setWorkout(sample);
  };

  return (
    <Card>
      <Title>Add New Workout</Title>
      <div style={{ height: '80px' }}>
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
        handelChange={(e) => setWorkout(e.target.value)}
      />
      </div>
      <Button
        text="Add Workout"
        small
        onClick={() => addNewWorkout()}
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
      />
      <SampleWorkouts>
        {sampleWorkouts.map((sample, index) => (
          <SampleWorkoutCard
            key={index}
            onClick={() => handleSampleClick(sample)}
          >
            {sample}
          </SampleWorkoutCard>
        ))}
      </SampleWorkouts>
    </Card>
  );
};

export default AddWorkout;
