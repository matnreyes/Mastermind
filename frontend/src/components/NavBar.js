const NavBar = ({ setPage, handleLogout }) => (
  <div id="nav-bar" className="navbar bg-base-100 w-screen fixed top-0 left-0 ">
    <div className="flex-1"/>
    <div className="flex-none">
      <button className="btn normal-case btn-ghost" onClick={() => setPage('game')}>Game</button>
      <button className=" btn normal-case btn-ghost" onClick={() => setPage('leaderboard')}>Leaderboard</button>
      <button className=" btn normal-case btn-ghost" onClick={() => handleLogout()}>Logout</button>
    </div>
  </div>
)

export default NavBar

