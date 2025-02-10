import './App.css'
const Display = ()=>{
    return (
        <>
        <section className='display'>
      <h1>Display Section</h1>
      <p>
        This is the display section, where you can showcase your products, services, or any other content.
      </p>
      <div className='display-grid'>
        <div className='display-item'>
          <h2>Item 1</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Nesciunt sunt suscipit quasi fugiat veniam possimus aspernatur eaque, quas, <br /> ducimus veritatis amet commodi animi? Molestias placeat et ab eos laborum libero!
          </p>
        </div>
        <div className='display-item'>
          <h2>Item 2</h2>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Nesciunt sunt suscipit quasi fugiat veniam possimus aspernatur eaque, quas, <br /> ducimus veritatis amet commodi animi? Molestias placeat et ab eos laborum libero!
          </p>
        </div>
        <div className='display-item'>
          <h2>Item 3</h2>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Nesciunt sunt suscipit quasi fugiat veniam possimus aspernatur eaque, quas, <br /> ducimus veritatis amet commodi animi? Molestias placeat et ab eos laborum libero!
          </p>
        </div>
      </div>
    </section>
        </>
    )
}

export default Display