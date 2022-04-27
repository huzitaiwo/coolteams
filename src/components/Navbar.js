// styles


export default function Navbar() {
  return (
    <header>
      <form className="search">
        <input type="text" placeholder="search" />
      </form>
      <button className="notification">bell</button>
      <div className="avatar">
        <img src="./images/person1.png" alt="" />
      </div>
    </header>
  )
}
