const StageCard = ({ children, title }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg ">
      <h2 className="text-2xl mt-4 font-extrabold mb-4 text-text">{title}</h2>
      {children}
    </div>
  );
};

export default StageCard;
