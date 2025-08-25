const NavBar = ()=>{
    return(
        <div>
             <header className="flex justify-between items-center p-4 border-b border-gray-800">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-yellow-500">Moovie</h1>
          <input
            type="text"
            placeholder="Search..."
            className="ml-4 w-64 px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none"
          />
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-yellow-500 hover:underline">Home</a>
          <a href="/my-list" className="text-yellow-500 hover:underline">My List</a>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-full">Sign In</button>
        </nav>
      </header>
        </div>
    )
}

export default NavBar;