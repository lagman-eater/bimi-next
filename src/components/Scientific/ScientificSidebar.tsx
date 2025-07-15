"use client";

interface Props {
  messages: any;
}

export default function ScientificSidebar({ messages }: Props) {
  const labels = messages.Scientific.Tabs;

  return (
    <aside className="w-full md:w-[250px] bg-white shadow-md rounded-xl p-4">
      <h2 className="text-[22px] font-bold font-[PT_Serif] text-bimi-blue mb-4">
        {
          messages.Header.HeaderList.ListTitle4 
        }
      </h2>
      <nav className="flex flex-col gap-2">
        <span className="block px-4 py-2 rounded text-gray-700 bg-gray-100 text-sm sm:text-base">
          {labels.General}
        </span>
        <span className="block px-4 py-2 rounded text-gray-700 bg-gray-100 text-sm sm:text-base">
          {labels.Publications}
        </span>
        <span className="block px-4 py-2 rounded text-gray-700 bg-gray-100 text-sm sm:text-base">
          {labels.Conferences}
        </span>
        <span className="block px-4 py-2 rounded text-gray-700 bg-gray-100 text-sm sm:text-base">
          {labels.Activities}
        </span>
      </nav>
    </aside>
  );
}
