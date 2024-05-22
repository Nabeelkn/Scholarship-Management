import React from 'react'
import profile from '../assets/Images/profile-temp.png'

function Profile() {
  return (
    <>
    <div>
    <div>

<nav class="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
  <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">

    <div class="text-[#e6ac00] md:order-1">

      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    </div>
    <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
      <ul class="flex font-semibold justify-between">

        <li class="md:px-4 md:py-2 hover:text-[#e6ac00]"><a href="/home">Home</a></li>
        <li class="md:px-4 md:py-2 hover:text-[#e6ac00]"><a href="#">Search</a></li>
        <li class="md:px-4 md:py-2 hover:text-[#e6ac00]"><a href="#">Explore</a></li>
        <li class="md:px-4 md:py-2 hover:text-[#e6ac00]"><a href="#">About</a></li>
        <li class="md:px-4 md:py-2 hover:text-[#e6ac00]"><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="order-2 md:order-3">
      {/* <button class="px-4 py-2 bg-[#e6ac00] hover:bg-[#ffd24d] text-gray-50 rounded-xl flex items-center gap-2">

        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span>Login</span>
      </button> */}
    </div>
  </div>
</nav>
</div>
<div className='flex justify-center align-middle bg-slate-100 h-screen'>
<div className= 'mt-20 bg-white h-2/3 w-2/3 border-gray-700 shadow-lg  overflow-hidden grid grid-cols-2 p-2'>
  <div className='col-span-1 border-r-2 border-r-gray-200'>
  <div className='h-96 bg-orange-100 w-80 rounded-3xl mt-32 ml-16  shadow-lg '>
    <div className='flex justify-center'>
<img type="file" src={profile}   className='w-40 h-40 mt-[px] rounded-[50%] ring-8 ring-white shadow-2xl bg-white' style={{marginTop:"-23%"}}/>
      {/* <input type="file"/> */}
    </div>
    <div className='flex flex-col items-center leading-tight mt-5'> 
    <div className='font-mono text-3xl text-slate-600 tracking-tight font-extrabold'>Jack Joe</div>
    <div> +91 1234567891 </div>
    <div className='mt-2'> Veiken, </div>
    <div> Vestby 6, </div>
    <div> Kolåsveien  </div>
    </div>
</div>
  </div>


<div className='col-span-1 p-5 px-10'>
<h6 className='font-semibold text-2xl border-b-2 border-b-gray-200 text-center '>Activities</h6>
<table className=' min-w-[460px] mt-4 border-2'>
  <thead className='border-b-2'>
    <tr  className='flex justify-between px-3 font-semibold text-lg'>
      <td >#</td>
      <td>Activity</td>
      <td >Status</td>
    </tr>
  </thead>
  <tbody>
    <tr className='flex justify-between px-3 font-semibold text-lg mt-8'>
      <td>1</td>
      <td>Scholarship 1</td>  
       <td>Pending</td>
    </tr>
    <tr className='flex justify-between px-3 font-semibold text-lg mt-4'>
      <td>2</td>
      <td>Scholarship 2</td>  
       <td>Pending</td>
    </tr>
    <tr className='flex justify-between px-3 font-semibold text-lg mt-4'>
      <td>3</td>
      <td>Scholarship 3</td>  
       <td>Pending</td>
    </tr>
  </tbody>
</table>
</div>

</div>
</div>
    </div>
    </>
  )
}

export default Profile