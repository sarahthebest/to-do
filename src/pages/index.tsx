import Nav from "../components/Nav";
import Box from "../components/Box";

export default function Home() {
  const boxesData = [
    {
      img: "https://images.unsplash.com/photo-1498336179775-9836baef8fdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "1. Quickly create new tasks and set deadlines.",
    },
    {
      img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "2. Easily modify or remove tasks as needed.",
    },
    {
      img: "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "3. Mark tasks as complete and see your productivity grow!",
    },
  ];

  return (
    <>
      <Nav />
      <div className="grid landing items-center relative overflow-hidden justify-items-center mx-10 pb-20 gap-10 sm:p-20 from-red-200 mt-10 bg-gradient-to-b via-transparent to-transparent">
        <h1 className="text-6xl z-10">To-Do</h1>
        <p className="z-10">
          Welcome to your ultimate To-Do List App! Stay organized and boost your
          productivity by managing your tasks efficiently. Create new tasks, set
          deadlines, and easily track your progress. Whether you want to
          prioritize personal projects or keep track of daily chores, our app is
          designed to help you stay focused and on top of your game. Get started
          today and transform the way you manage your tasks!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {boxesData.map((box, index) => (
            <Box key={index} img={box.img} text={box.text} />
          ))}
        </div>
        <img
          src="/landing.jpg"
          alt="cover image"
          className="mt-10 w-full h-auto absolute z-0 opacity-20"
        />
      </div>
    </>
  );
}
