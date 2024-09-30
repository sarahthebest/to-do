interface BoxProps {
  img: string;
  text: string;
}

const Box: React.FC<BoxProps> = ({ img, text }) => {
  return (
    <div className="box flex flex-col items-center relative p-2 bg-white overflow-hidden">
      <img src={img} alt={text} className="w-full box h-full object-cover" />
      <p className="mt-2 text-center bottom-0 text-black">{text}</p>
    </div>
  );
};

export default Box;
