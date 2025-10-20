import React, { useState } from 'react';

export default function TravelGoals() {
  const [goals, setGoals] = useState([]); // State to hold travel goals
  const [newGoal, setNewGoal] = useState(''); // State for the new goal input

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (newGoal.trim()) {
      setGoals([...goals, { id: Date.now(), text: newGoal }]);
      setNewGoal(''); // Clear input after adding
    }
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto min-h-[calc(100vh-60px)]">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">Your Travel Goals</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        List your dream destinations and upcoming adventures!
      </p>

      {/* Add New Goal Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Goal</h2>
        <form onSubmit={handleAddGoal} className="flex gap-4">
          <input
            type="text"
            placeholder="e.g., Visit Japan in Spring 2025"
            className="flex-grow border p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            Add Goal
          </button>
        </form>
      </div>

      {/* Existing Goals List */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Goals</h2>
        {goals.length === 0 ? (
          <p className="text-gray-500">No goals added yet. Start planning your next trip!</p>
        ) : (
          <ul className="space-y-3">
            {goals.map((goal) => (
              <li 
                key={goal.id} 
                className="flex justify-between items-center p-3 bg-gray-50 rounded-md border border-gray-200"
              >
                <span className="text-gray-700 text-lg">{goal.text}</span>
                <button 
                  onClick={() => handleDeleteGoal(goal.id)}
                  className="text-red-500 hover:text-red-700 font-medium text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}