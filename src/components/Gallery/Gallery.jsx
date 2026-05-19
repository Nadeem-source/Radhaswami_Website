import './Gallery.css'

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Divine Gallery</h2>

      <div className="gallery-grid">
        <img src="/images/photo-1488521787991-ed7bbaae773c.avif" alt="Gallery Image 1" />
        <img src="/images/photo-1517048676732-d65bc937f952.avif" alt="Gallery Image 2" />
        <img src="/images/photo-1509099836639-18ba1795216d.avif" alt="Gallery Image 3" />
      </div>
    </section>
  )
}

export default Gallery