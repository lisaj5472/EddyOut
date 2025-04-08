
import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/authAPI"; // Assuming you created this
import Auth from "../utils/auth"; // Assumes this handles storing the token

export default function Signup() {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
      Auth.login(response.token);
      Navigate("/dashboard");
    } catch (err) {
      console.error("Signup failed. Please try again.", err);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Create Account</h2>
        {["firstName", "lastName", "username", "email", "password"].map(
          (field) => (
            <div key={field}>
              <label className="block text-sm font-medium capitalize">
                {field}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={(formData as any)[field]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          )
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
