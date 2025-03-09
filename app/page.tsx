import TaskItem from "./components/TaskItem";


interface Task {
  id: number;
  title: string;
  completed: boolean;
}

async function getTasks(): Promise<Task[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}

export default async function HomePage() {
  const tasks = await getTasks();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-blue-600"> Task Tracker</h1>
      <ul className="mt-4 space-y-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </main>
  );
}
