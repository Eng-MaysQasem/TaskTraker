"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function TaskDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    async function fetchTask() {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!res.ok) throw new Error("Task not found");
        const data: Task = await res.json();
        setTask(data);
      } catch (error) {
        router.push("/not-found");
      }
    }
    fetchTask();
  }, [id, router]);

  if (!task)
    return <p className="text-center text-lg font-semibold text-gray-600">Loading...</p>;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
        <p
          className={`mt-3 text-lg font-semibold ${
            task.completed ? "text-green-500" : "text-red-500"
          }`}
        >
          Status: {task.completed ? "✅ Completed" : "⏳ Pending"}
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-5 w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition-all duration-300 hover:bg-blue-600"
        >
          🔙 Back to Tasks
        </button>
      </div>
    </main>
  );
}
