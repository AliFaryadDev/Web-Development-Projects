function Header(props) {
  // Aaj ki date ko format karne ke liye (misal ke taur par: "Mon, Sep 28")
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const currentDate = new Date().toLocaleDateString('en-US', options);

  return (
    <div 
      className="
      left 
      flex
      items-center
      self-end
      px-5
      justify-between
      flex-wrap
      bg-[#1f1b3c]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4
      ">
      <div 
        className="
        left
        flex
        gap-2
        items-center
        p-1
        cursor-pointer
        "
      >
        <img src="https://api.iconify.design/lucide:map-pin.svg"
        alt="Location" 
          className="
          location
          w-8
          h-8
          brightness-0 invert
          "/>
        <h2
         className="
          city
          text-lg
          font-bold
          "
        >
          London
        </h2>
      </div>

      <div className="
        right
        flex
        items-center
        gap-2
        p-1
      ">
        <span
          className="
          date
          text-xs
          "
        >
          {/* Yahan static date ki jagah dynamic date variable rakh diya hai */}
          {currentDate}
        </span>
        <img src="./components/header/items/profile.png" alt="profile"
          className="
          profile
          w-12
          h-12
          rounded-full
          "
        />
      </div>  
    </div>
  );
}
