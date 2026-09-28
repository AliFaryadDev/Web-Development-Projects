function WeatherStats(props) {
  return (
    <div 
      style={{ padding: `5px` }}
      className="
      text-sm
      WeatherStats
      flex
      gap-2
      w-full
      h-25
      bg-[#221c47] border border-white/10 rounded-2xl p-4 text-white
      "
    >
      {/* Humidity Div */}
      <div 
        style={{ padding: `10px` }}
        className="
        text-sm
        flex-1
        rounded-2xl
        bg-[#2b2357]
        text-[#ffffff]
        border border-[#433878]
        "
      >
        <div>Humidity</div>
        <div className="text-base font-bold">{props.humidity}%</div>
      </div>

      {/* Wind Div */}
      <div 
        style={{ padding: `10px` }}
        className="
        text-sm
        bg-[#2b2357]
        text-[#ffffff]
        border border-[#433878]
        flex-1
        rounded-2xl
        min-w-0
        "
      >
        <div>Wind</div>
        <div className="text-base font-bold">{props.windSpeed}Km/h</div>
      </div>

      {/* AQI Div */}
      <div 
        style={{ padding: `10px` }}
        className="
        flex-1
        rounded-2xl
        bg-[#2b2357]
        text-[#ffffff]
        border border-[#433878]
        "
      >
        <div>AQI</div>
        <div className="text-base font-bold">Good</div>
      </div>
    </div>
  );
}
