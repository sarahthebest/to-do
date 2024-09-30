interface BtnProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

const Btn: React.FC<BtnProps> = ({ icon, text, onClick, type = "button" }) => {
  return (
    <button
      className="btn px-3 py-0 w-fit text-emerald-900 bg-slate-100 hover:bg-slate-200"
      type={type}
      onClick={onClick}
    >
      {icon && <span className="icon">{icon}</span>}
      {text}
    </button>
  );
};

export default Btn;
