import React, { useState } from 'react'

function Pokedex() {
  const [pokemonName, setPokemonName] = useState('');
  const [details, setDetails] = useState(null);

  async function getData(){
    try {
      const response = pokemonName ? await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) : await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
      const pkmnDetails = await response.json();
      console.log(pkmnDetails);
      setDetails(pkmnDetails);

    } catch (error) {
      console.error("error fetching");
      throw error;
    }
  }

  return (
    <div className='flex justify-center items-center h-screen w-screen bg-black'>
        <div className='flex justify-center flex-nowrap h-[50vh] lg:h-[70vh] w-[100vw] sm:w-[80vw] lg:w-[40vw] bg-red-500 rounded-3xl'>
          
          <div className='w-[50%] flex flex-wrap items-between justify-center mr-[3%]'>
            <div className='flex justify-center w-[100%] mr-3 h-[30%] sm:h-[40%] sm:mt-5 sm:mr-10 sm:ml-10 sm:mb-0 md bg-white rounded-xl flex-auto'>
              {/* pokemon image */}
              <img src={details ? details.sprites.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"} alt="" /> 
            </div>

            <div className='flex flex-wrap justify-center mb-[5%] h-[20%]'>
              <label htmlFor="pokemonName" className='w-full text-center mb-[3%] h-[30px] text-[3.5vw] md:text-[3vw] lg:text-[25px]  font-extrabold font-serif'>Enter Pokemon Name</label>
              <input type="text" name='pokemonName' className='p-1 rounded-xl text-center font-semibold mt-1' onChange={(event) => setPokemonName(event.target.value)} />
              <button onClick = {getData} className='p-2 ml-3 mt-1 bg-yellow-400 rounded-xl font-bold font-serif border-[2px] border-black hover:bg-yellow-500'>Search</button>            
            </div>

            <div className='flex justify-between w-[100%] h-[15%] ml-[3%] mr-[3%] mb-[5%]'>
              <button className='w-[30%] rounded-xl bg-yellow-300 text-3xl font-extrabold font-mono border-[2px] border-black hover:bg-yellow-400'>&lt;</button>
              <button className='w-[30%] rounded-xl bg-yellow-300 text-3xl font-extrabold font-mono border-[2px] border-black hover:bg-yellow-400'>&gt;</button>
            </div>
          </div>

          {/* pokemon details */}
          <div className='flex flex-wrap mr-[3%] w-[40%] items-center'>
            <div className='flex flex-wrap justify-center h-[35%] w-[100%] sm:h-[45%] bg-white rounded-xl p-1'>
              <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>{details ? details.name : 'pikachu'}</div>
              <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>Type: {details ? details.name : 'pikachu'}</div>
              <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>Weakness: {details ? details.name : 'pikachu'}</div>
            </div>

            <div className='flex flex-wrap justify-center h-[35%] sm:h-[45%] w-[100%] bg-white rounded-xl p-1'>
              <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>HP: {details ? details.name : '0'}</div>
              <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>ATTACK: {details ? details.name : '0'}</div>
              <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>DEFENSE: {details ? details.name : '0'}</div>
              <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>SPL-ATK: {details ? details.name : '0'}</div>
              <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>SPL-DEF: {details ? details.name : '0'}</div>
              <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>SPEED: {details ? details.name : '0'}</div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Pokedex