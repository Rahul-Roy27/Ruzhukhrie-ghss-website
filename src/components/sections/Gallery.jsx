import Reveal from '../ui/Reveal'

const images = [
  { src: 'https://content.jdmagicbox.com/v2/comp/kohima/y9/9999px370.x370.221104230053.w6y9/catalogue/ruzhukhrie-govt-higher-secondary-school-lower-agri-kohima-schools-vdjo52omof.jpg', category: 'Campus' },
  { src: 'https://ipr.nagaland.gov.in/sites/default/files/2025-05/Ruzhukhrie%20GHSS%2C%20Kohima.jpg', category: 'Academics' },
  { src: 'https://www.indiablooms.com/storage/assets/n/2022/f99a1614fa1a69af4b6ee22a3405cc9f.jpg', category: 'Culture' },
  { src: 'https://easternmirror-assets.s3.ap-south-1.amazonaws.com/images/article/1738079064829.jpeg', category: 'Sports' },
  { src: 'https://pbs.twimg.com/media/GqfkVlQXYAAkdEA.jpg', category: 'Events' },
  { src: 'https://easternmirror-assets.s3.ap-south-1.amazonaws.com/images/2024/07/PXL_20240718_051638231.jpg', category: 'Student Life' },
]

const highlights = [
  'Campus',
  'Academics',
  'Sports',
  'Culture',
  'Leadership',
  'Community',
]

function ImageCard({ src, category, className }) {
  return (
    <div className={`relative overflow-hidden rounded-[4px] group ${className}`}>
      <img
        src={src}
        alt={category}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.target.parentElement.style.backgroundColor = '#1B3A6B'
          e.target.style.display = 'none'
        }}
      />

      <div className="absolute inset-0 bg-navy-dark/30 group-hover:bg-navy-dark/50 transition-colors duration-300" />

      <div className="absolute bottom-3 left-3">
        <span className="font-mono text-[10px] font-bold text-white tracking-widest uppercase bg-navy/70 px-2.5 py-1 rounded-[2px]">
          {category}
        </span>
      </div>
    </div>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="bg-[#FAFAF9] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-[11px] font-bold text-gold tracking-[0.16em] uppercase mb-3">
                Campus Life
              </p>

              <h2 className="font-display font-semibold text-4xl text-charcoal leading-snug">
                Life at <span className="text-navy">Rüzhükhrie</span>
              </h2>
            </div>

            <p className="font-body text-base text-soft-gray leading-relaxed max-w-sm">
              From classrooms and laboratories to cultural festivals and sports,
              life at RGHSS is shaped by community, tradition, and a shared
              pursuit of excellence.
            </p>
          </div>
        </Reveal>

        {/* Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">

          {/* Featured Image */}
          <Reveal direction="left" className="col-span-2 md:col-span-1 md:row-span-2">
            <ImageCard
              src={images[0].src}
              category={images[0].category}
              className="h-[280px] md:h-full min-h-[400px]"
            />
          </Reveal>

          <Reveal stagger={80} index={0}>
            <ImageCard
              src={images[1].src}
              category={images[1].category}
              className="h-[180px] md:h-[195px]"
            />
          </Reveal>

          <Reveal stagger={80} index={1}>
            <ImageCard
              src={images[2].src}
              category={images[2].category}
              className="h-[180px] md:h-[195px]"
            />
          </Reveal>

          <Reveal stagger={80} index={2}>
            <ImageCard
              src={images[3].src}
              category={images[3].category}
              className="h-[180px] md:h-[195px]"
            />
          </Reveal>

          <Reveal stagger={80} index={3}>
            <ImageCard
              src={images[4].src}
              category={images[4].category}
              className="h-[180px] md:h-[195px]"
            />
          </Reveal>

          <Reveal className="col-span-2 md:col-span-3">
            <ImageCard
              src={images[5].src}
              category={images[5].category}
              className="h-[200px] md:h-[240px]"
            />
          </Reveal>

        </div>

        {/* Highlight Strip */}
        <Reveal>
          <div className="border border-slate-200 rounded-[4px] overflow-hidden">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-0">
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className={`px-4 py-5 flex flex-col items-center gap-2 bg-white hover:bg-[#FAFAF9] transition-colors duration-200 ${
                    index !== highlights.length - 1
                      ? 'border-r border-slate-200'
                      : ''
                  }`}
                >
                  <div className="w-5 h-[2px] bg-gold" />

                  <p className="font-body text-sm text-charcoal text-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Gallery