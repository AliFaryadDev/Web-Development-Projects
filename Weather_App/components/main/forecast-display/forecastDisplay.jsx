function ForecastDisplay({ time, temp }) {
  const ForecastDisplayTime = time;
  const ForecastDisplayTemp = temp;

  const formatTime = (timeString) => {
    if (!timeString) return "";
    const date = new Date(timeString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div 
      style={{ height: `140px` }}
      className="flex gap-3 bg-[#1d173d] border border-white/10 rounded-2xl p-4 overflow-x-auto"
    >
      {ForecastDisplayTemp && ForecastDisplayTemp.slice(0, 24).map((tp, index) => (
        <div
          key={index}
          className="bg-[#1d173d] text-white rounded-xl flex flex-col items-center justify-center h-full w-[22%] shrink-0 shadow-md p-2"
        >
          {/* Yahan hardcoded 12:00 ki jagah formatTime function use kiya hai */}
          <span className="text-[10px] text-gray-300 mb-1">
            {formatTime(ForecastDisplayTime?.[index])}
          </span>
          <span className="text-sm font-semibold">{tp}°C</span>
        </div>
      ))}
    </div>
  );
}
