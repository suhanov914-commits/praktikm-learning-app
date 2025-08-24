import React from "react";
import { Plus } from "lucide-react";

// Простая "карточка"
function Card({ children }) {
  return (
    <div className="border rounded-xl shadow p-4 bg-white mb-4">
      {children}
    </div>
  );
}

// Простая "кнопка"
function Button({ children }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">Мой React проект 🚀</h1>
      <Card>
        Это карточка с текстом внутри
      </Card>
      <Button>
        <Plus size={18} /> Кнопка с иконкой
      </Button>
    </div>
  );
}
