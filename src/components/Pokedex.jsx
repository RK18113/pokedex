import React from 'react'

function Pokedex() {

  

  return (
    <div className='flex justify-center items-center h-screen w-screen bg-black'>
        <div className='flex justify-center flex-nowrap h-[80vh] w-[40vw] bg-red-500 rounded-3xl'>
          <div className='w-[60%]'>
            <div className='h-[40%] mt-5 mr-5 ml-5 mb-0 bg-white rounded-xl'>
              {/* pokemon image */}
              <img src="" alt="" /> 
            </div>

            <div className='flex flex-wrap justify-center'>
              <label htmlFor="pokemonName" className='w-full text-center h-[30px] m-0 mt-5'>Enter Pokemon Name</label>
              <input type="text" name='pokemonName' className=' m-0 rounded-xl' />
              <button onClick className='ml-3 bg-yellow-400 rounded-xl p-2'>Search</button>            
            </div>

            <div className='flex justify-around mt-10 ml-5 mr-5'>
              <button className='h-[5vw] w-[5vw] rounded-3xl bg-yellow-300'>&lt;</button>
              <button className='h-[5vw] w-[5vw] rounded-3xl bg-yellow-300'>&gt;</button>
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
