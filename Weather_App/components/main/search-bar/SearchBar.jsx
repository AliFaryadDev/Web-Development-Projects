function SearchBar(props){
  const handleSubmit = 
    //Gemini
    (e) => {
    e.preventDefault()
    props.fetchCoordinates()}
      //--------//
  return(
    
    <form
      //Gemini
      onSubmit={handleSubmit}
      //------
      
      style={{padding: `0 5px`}}
      className="
      search
      flex
      flex-wrap
      justify-center
      ">
     <input type="search" placeholder="Search City..."
       value = {props.city}
       onChange = {(e)=>{props.setCity(e.target.value)}}
       
       style={{ padding: ' 15px 20px'}}
       className="w-full bg-[#1f1b3c] border border-[#4a3b8c] text-white placeholder-gray-400 rounded-2xl outline-none focus:border-purple-400"
/>
    </form>
  )
}