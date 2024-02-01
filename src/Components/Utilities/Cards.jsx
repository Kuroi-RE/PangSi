const Cards = ({ Image, Title, Description, Harga }) => {
  return (
    <div className="flex flex-row gap-10 mt-5 pt-4 dark:text-white">
      <div className=" border-red-700 h-[100px] w-[210px] md:h-[125px] md:w-[125px] :h-[125px] :w-[125px]">
        <img src={Image} alt="" className="rounded-[50%] w-full h-full" />
      </div>
      <div className="flex flex-col gap-1">
        <div>
          <h1 className="font-bold text-lg">{Title}</h1>
          <p className="text-gray-700 text-sm mt-[-5px]">{Description}</p>
        </div>
        <span className="text-yellow-300 font-bold">{Harga}</span>
      </div>
    </div>
  );
};

export default Cards;
