import React, { useState } from 'react'

function Pokedex() {
  const [pokemonName, setPokemonName] = useState('');
  const [image, setImage] = useState();
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
        <div className='flex justify-center flex-nowrap h-[80vh] w-[40vw] bg-red-500 rounded-3xl'>
          <div className='w-[60%]'>
            <div className='flex justify-center h-[40%] mt-5 mr-10 ml-10 mb-0 bg-white rounded-xl'>
              {/* pokemon image */}
              <img src={details ? details.sprites.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"} alt="" /> 
            </div>

            <div className='flex flex-wrap justify-center'>
              <label htmlFor="pokemonName" className='w-full text-center h-[30px] m-0 mt-5 mb-2 text-xl font-extrabold font-serif'>Enter Pokemon Name</label>
              <input type="text" name='pokemonName' className='p-1 m-0 rounded-xl text-center font-semibold' onChange={(event) => setPokemonName(event.target.value)} />
              <button onClick = {getData} className='p-2 ml-3 bg-yellow-400 rounded-xl font-bold font-serif border-[2px] border-black hover:bg-yellow-500'>Search</button>            
            </div>

            <div className='flex justify-around mt-10 ml-5 mr-5'>
              <button className='h-[5vw] w-[5vw] rounded-3xl bg-yellow-300 text-3xl font-extrabold font-mono border-[2px] border-black hover:bg-yellow-400'>&lt;</button>
              <button className='h-[5vw] w-[5vw] rounded-3xl bg-yellow-300 text-3xl font-extrabold font-mono border-[2px] border-black hover:bg-yellow-400'>&gt;</button>
            </div>
          </div>

          <div className='flex justify-center m-5 ml-0 h-[70vh] w-[15vw] bg-white rounded-xl'>
            {/* pokemon details */}
          </div>
        </div>
    </div>
  )
}

export default Pokedex