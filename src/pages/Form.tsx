import React, { useState } from "react";
import Input from "../components/Input";

type FieldStatus = "default" | "error" | "success";

interface FieldState {
  value: string;
  status: FieldStatus;
  helperText: string;
}

interface FormState {
  name: FieldState;
  email: FieldState;
  age: FieldState;
  password: FieldState;
}

const initialState: FormState = {
  name: { value: "", status: "default", helperText: "Enter Name" },
  email: { value: "", status: "default", helperText: "Enter Email" },
  age: { value: "", status: "default", helperText: "Enter valid age" },
  password: {
    value: "",
    status: "default",
    helperText: "Enter valid password",
  },
};

const MyForm = () => {
  const [form, setForm] = useState<FormState>(initialState);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (field: keyof FormState, value: string): FieldState => {
    if (!value.trim()) {
      return {
        value,
        status: "error",
        helperText: `${capitalize(field)} is required.`,
      };
    }

    if (field === "email" && !emailRegex.test(value)) {
      return { value, status: "error", helperText: "Invalid email format." };
    }

    if (field === "age") {
      const ageNum = Number(value);
      if (isNaN(ageNum) || ageNum <= 0) {
        return {
          value,
          status: "error",
          helperText: "Age must be a positive number.",
        };
      }
    }

    if (field === "password") {
      const hasNumber = /\d/.test(value);
      const hasSymbol = /[^A-Za-z0-9]/.test(value);
      if (value.length < 8) {
        return {
          value,
          status: "error",
          helperText: "Password must be at least 8 characters.",
        };
      }
      if (!hasNumber) {
        return {
          value,
          status: "error",
          helperText: "Password must contain at least 1 number.",
        };
      }
      if (!hasSymbol) {
        return {
          value,
          status: "error",
          helperText: "Password must contain at least 1 symbol.",
        };
      }

      return { value, status: "success", helperText: "Looks good!" };
    }

    return { value, status: "success", helperText: "Looks good!" };
  };

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  const handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      const validated = validateField(field, newValue);

      setForm((prev) => ({
        ...prev,
        [field]: validated,
      }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields on submit
    const validatedForm: FormState = {
      name: validateField("name", form.name.value),
      email: validateField("email", form.email.value),
      age: validateField("age", form.age.value),
      password: validateField("password", form.password.value),
    };

    setForm(validatedForm);

    // Check if all fields are valid
    const allValid = Object.values(validatedForm).every(
      (field) => field.status === "success"
    );

    if (allValid) {
      alert("Form submitted successfully!");
      // Proceed with submission logic
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <Input
        label="Name"
        type="text"
        value={form.name.value}
        onChange={handleChange("name")}
        status={form.name.status}
        helperText={form.name.helperText}
        required
        inputSize="lg"
        placeholder="Enter name"
      />
      <Input
        label="Email"
        type="email"
        value={form.email.value}
        onChange={handleChange("email")}
        status={form.email.status}
        helperText={form.email.helperText}
        required
        inputSize="sm"
        placeholder="Enter email"
      />
      <Input
        label="Age"
        type="number"
        value={form.age.value}
        onChange={handleChange("age")}
        status={form.age.status}
        helperText={form.age.helperText}
        required
        placeholder="Enter age"
      />
      <Input
        label="Password"
        type="password"
        value={form.password.value}
        onChange={handleChange("password")}
        status={form.password.status}
        helperText={form.password.helperText}
        required
        inputSize="md"
        placeholder="Enter password"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default MyForm;
