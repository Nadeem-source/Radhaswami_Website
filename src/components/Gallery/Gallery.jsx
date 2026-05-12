import './Gallery.css'

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Divine Gallery</h2>

      <div className="gallery-grid">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200" />
        <img src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200" />
        <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200" />
      </div>
    </section>
  )
}

export default Gallery