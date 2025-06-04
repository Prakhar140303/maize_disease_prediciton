const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f0f7da]">
        <div className="w-[85px] h-[85px] flex flex-wrap justify-between content-between animate-loading-rotate">
        <span className="w-[40px] h-[40px] block box-border bg-[rgb(32,80,46)] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] border-l-[4px] border-t-[4px] border-white border-t-[#f7f7f7]"></span>
        <span className="w-[40px] h-[40px] block box-border bg-[#50DE68] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] border-r-[4px] border-t-[4px] border-white border-t-[#f7f7f7]"></span>
        <span className="w-[40px] h-[40px] block box-border bg-[rgb(0,255,55)] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border-l-[4px] border-b-[4px] border-white border-b-[#f7f7f7]"></span>
        <span className="w-[40px] h-[40px] block box-border bg-[rgb(32,182,32)] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] border-r-[4px] border-b-[4px] border-white border-b-[#f7f7f7]"></span>
        </div>
    </div>
  );
};

export default Loader;
