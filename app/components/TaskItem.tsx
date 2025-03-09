import Image from "next/image";
import Link from "next/link";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function TaskItem({ task }: { task: Task }) {
  const statusIcon = task.completed ? "/images/checkmark.jpg" : "/images/clock.jpg";

  return (
    <li className="flex items-center space-x-4 border p-3 rounded-md shadow-sm">
      <Image src={statusIcon} width={20} height={20} alt="Status Icon" />
      <Link href={`/task/${task.id}`} className="text-blue-600 hover:underline">
        {task.title}
      </Link>
      <span className={`ml-auto px-2 py-1 text-sm font-semibold ${task.completed ? "text-green-600" : "text-yellow-600"}`}>
        {task.completed ? " Completed" : " Pending"}
      </span>
    </li>
  );
}
