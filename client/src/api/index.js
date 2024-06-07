import axios from "axios";

const API = axios.create({
  baseURL: "https://keerthana-fitness-logger-backend.onrender.com/api/",
});

// Error handler
const handleError = (error) => {
  console.error(error.response ? error.response.data : error.message);
  throw error;
};

export const UserSignUp = async (data) => {
  try {
    const response = await API.post("/user/signup", data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const UserSignIn = async (data) => {
  try {
    const response = await API.post("/user/signin", data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getDashboardDetails = async (token) => {
  try {
    const response = await API.get("/user/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getWorkouts = async (token, date = "") => {
  try {
    const response = await API.get(`/user/workout${date ? `?date=${date}` : ''}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const addWorkout = async (token, data) => {
  try {
    const response = await API.post(`/user/workout`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
