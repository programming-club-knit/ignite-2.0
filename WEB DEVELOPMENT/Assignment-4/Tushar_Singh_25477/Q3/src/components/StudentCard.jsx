function StudentCard({ student, onToggle, isOpen }) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <img
        src={student.image}
        alt={student.name}
        className="w-20 h-20 rounded-full mx-auto"
      />
      <h2 className="text-lg font-semibold text-center mt-2">{student.name}</h2>

      <button
        onClick={onToggle}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded w-full"
      >
        {isOpen ? "Hide Details" : "Show Details"}
      </button>

      {isOpen && (
        <div className="mt-3 text-sm text-gray-700">
          <p>Branch: {student.branch}</p>
          <p>Year: {student.year}</p>
          <p>Skills: {student.skills.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default StudentCard;
