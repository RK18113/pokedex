import React, { useEffect, useState } from 'react'

function Pokedex() {
  const [pokemonName, setPokemonName] = useState('pikachu');
  const [details, setDetails] = useState(null);

  async function getData(){
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pkmnDetails = await response.json();
      console.log(pkmnDetails);
      setDetails(pkmnDetails);
    } catch (error) {
      console.error("error fetching");
      throw error;
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function nextPkmn(){
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${((details.id)+1)}`);
      const pkmnDetails = await response.json();
      setDetails(pkmnDetails);
      console.log(pkmnDetails);
    } catch (error) {
      console.log(error);
    }
  }

  async function prevPkmn(){
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${((details.id)-1)}`);
      const pkmnDetails = await response.json();
      setDetails(pkmnDetails);
      console.log(pkmnDetails);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex justify-center items-center h-screen w-screen bg-black'>
        <div className='flex justify-center flex-nowrap h-[70vh] w-[100vw] sm:w-[80vw] lg:w-[60vw] bg-red-500 rounded-3xl'>
          
          {/* image, name box and buttons */}
          <div className='w-[50%] flex flex-wrap items-between justify-center mr-[3%]'>
            <div className='flex justify-center w-[100%] mr-3 mt-5 h-[40%] sm:h-[40%] sm:mt-5 sm:mr-10 sm:ml-10 sm:mb-0 md bg-white rounded-xl flex-auto'>
              {/* pokemon image */}
              <img src={details ? details.sprites.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"} alt="" /> 
            </div>

            <div className='flex flex-wrap justify-center mb-[5%] h-[25%]'>
              <label htmlFor="pokemonName" className='w-full text-center mb-[3%] h-[30px] text-[4vw] sm:text-[3.4vw] md:text-[3vw] lg:text-[25px] font-extrabold font-serif'>Enter Pokemon Name</label>
              <input type="text" name='pokemonName' className='w-[90%] p-1 rounded-xl text-center font-semibold mt-1' onChange={(event) => setPokemonName(event.target.value)} />
              <button onClick = {getData} className='p-2 ml-3 mt-3 bg-yellow-400 rounded-xl font-bold font-serif border-[2px] border-black hover:bg-yellow-500'>Search</button>            
            </div>

            <div className='flex justify-between w-[100%] h-[15%] ml-[3%] mr-[3%] mb-[5%]'>
              <button onClick={prevPkmn} className='w-[30%] rounded-xl bg-yellow-300 text-3xl font-extrabold font-mono border-[2px] border-black hover:bg-yellow-400'>&lt;</button>
              <button onClick={nextPkmn} className='w-[30%] rounded-xl bg-yellow-300 text-3xl font-extrabold font-mono border-[2px] border-black hover:bg-yellow-400'>&gt;</button>
            </div>
          </div>

          {/* pokemon details */}
          {details ? (
            <div className='flex flex-wrap mt-3 mb-3 mr-[3%] w-[40%] items-center'>
              <div className='flex flex-wrap justify-center h-[35%] w-[100%] sm:h-[30%] bg-white rounded-xl p-1'>
                <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>{details.name}</div>
                <div className='w-[100%] flex flex-wrap items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>
                  Type: {details.types.map(type => <li className='list-none ml-3 p-1 rounded-md bg-gray-300' key={type.type.name}>{type.type.name}</li>)}
                </div>
                <div className='w-[100%] flex flex-wrap items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>
                  Ability: {details.abilities.map(abi => <li className='list-none ml-3 p-1 rounded-md bg-gray-300' key={abi.ability.name}>{abi.ability.name}</li>)}
                </div>
              </div>

              <div className='flex flex-wrap justify-center h-[60%] sm:h-[60%] w-[100%] bg-white rounded-xl p-1'>
                <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>HP: {details.stats[0].base_stat}</div>
                <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>ATTACK: {details.stats[1].base_stat}</div>
                <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>DEFENSE: {details.stats[2].base_stat}</div>
                <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>SPL-ATK: {details.stats[3].base_stat}</div>
                <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>SPL-DEF: {details.stats[4].base_stat}</div>
                <div className='w-[100%] flex items-center justify-center font-bold bg-gray-100 m-[1px] rounded-md'>SPEED: {details.stats[5].base_stat}</div>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
          
        </div>
    </div>
  )
}

export default Pokedex