import { useState } from "react";
import StudentCard from "./StudentCard";

const students = [
  {
    id: 1,
    name: "Tushar Singh",
    branch: "Electronics Engineering",
    year: "1st Year",
    image: "https://i.pravatar.cc/150?img=12",
    skills: ["JavaScript", "React", "Python"],
  },
  {
    id: 2,
    name: "Rohan Verma",
    branch: "Computer Science",
    year: "2nd Year",
    image: "https://i.pravatar.cc/150?img=13",
    skills: ["Java", "SQL"],
  },
  {
    id: 3,
    name: "Priya Sharma",
    branch: "Mechanical Engineering",
    year: "3rd Year",
    image: "https://i.pravatar.cc/150?img=31",
    skills: ["AutoCAD", "MATLAB"],
  },
  {
    id: 4,
    name: "Ankit Yadav",
    branch: "Civil Engineering",
    year: "1st Year",
    image: "https://i.pravatar.cc/150?img=14",
    skills: ["AutoCAD", "Excel"],
  },
  {
    id: 5,
    name: "Neha Gupta",
    branch: "Electrical Engineering",
    year: "2nd Year",
    image: "https://i.pravatar.cc/150?img=5",
    skills: ["MATLAB", "C++"],
  },
  {
    id: 6,
    name: "Vikram Singh",
    branch: "Computer Science",
    year: "4th Year",
    image: "https://i.pravatar.cc/150?img=18",
    skills: ["React", "Node.js"],
  },
];

function StudentList() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          isOpen={openId === student.id}
          onToggle={() => handleToggle(student.id)}
        />
      ))}
    </div>
  );
}

export default StudentList;
