import React, { useState } from "react";
import { InputField } from "./components/InputField";
import { DataTable } from "./components/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  password?: string; // optional field for demo
}

function App() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Kashish", email: "kashish@example.com" },
    { id: 2, name: "Rahul", email: "rahul@example.com" },
  ]);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleAddUser = () => {
    if (!newName || !newEmail) return; // basic validation
    const newUser: User = {
      id: users.length + 1,
      name: newName,
      email: newEmail,
      password: newPassword, // optional
    };
    setUsers([...users, newUser]);
    setNewName("");
    setNewEmail("");
    setNewPassword("");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">User Management Demo</h1>

      {/* --- Form Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <InputField
          label="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter name"
          invalid={!newName && newEmail !== ""}
          errorMessage="Name is required"
        />

        <InputField
          label="Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Enter email"
          invalid={!newEmail && newName !== ""}
          errorMessage="Email is required"
        />

        {/* NEW: Password field */}
        <InputField
          label="Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter password"
          passwordToggle
          clearable
        />

        <button
          onClick={handleAddUser}
          className="self-end px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add User
        </button>
      </div>

      {/* --- DataTable Section --- */}
      <DataTable<User>
        data={users}
        columns={[
          { key: "name", title: "Name", dataIndex: "name", sortable: true },
          { key: "email", title: "Email", dataIndex: "email" },
          { key: "password", title: "Password", dataIndex: "password" }, // optional column
        ]}
        selectable
        onRowSelect={(rows) => console.log("Selected:", rows)}
      />
    </div>
  );
}

export default App;
