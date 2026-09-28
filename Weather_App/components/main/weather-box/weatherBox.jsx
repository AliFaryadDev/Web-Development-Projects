function WeatherBox(props){
  return(
    <div 
      style={{paddingLeft: `20px`}}
      className="
      flex
      justify-center
      flex-col
      h-52
      gap-3
      bg-[#1a153b] border border-[#4a3b8c] rounded-3xl p-6 shadow-lg shadow-purple-950/50 text-white
      ">
      <div className="
       Image&Temperature
       flex
         
        ">
      <img/>
      <div className="
        temperature
        text-4xl
        font-bold
        
        ">{props.temp}°C</div>
        </div>
      <div className="
      weatherDiscription
        text-lg
        ">{props.weatherText}</div>
     <div className="
       highAndLowValue
       text-sm
       ">
      <span>H:{props.H}°C</span> <span>L:{props.L}°C</span>  
       </div>
    </div>
  )
}