const products = [
  {
    handle: 'cama-calming-donut',
    title: 'Cama Calmante Donut para Perros y Gatos',
    price: '49.90',
    desc: 'Cama circular con borde elevado y espuma de memoria. Material suave tipo peluche, ideal para reducir ansiedad y mejorar el sueño.',
    img: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1200&q=60',
    supplier_url: 'https://www.spocket.co/dropship/pets-beds-blankets/calming-pet-bed-dep-size-m-washable'
  },
  {
    handle: 'chaleco-antiestrés',
    title: 'Chaleco Antiestrés (ThunderShirt style)',
    price: '34.90',
    desc: 'Chaleco que aplica presión suave para reducir el estrés en perros; recomendado para viajes, tormentas y visitas al veterinario.',
    img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=60',
    supplier_url: 'https://thundershirt.com/products/thundershirt-for-dogs'
  },
  {
    handle: 'difusor-feromonas',
    title: 'Difusor de Feromonas para Perros (Kit + Recambio)',
    price: '34.50',
    desc: 'Difusor plug-in con feromonas que imitan el apego materno; reduce comportamiento por estrés como marcaje, ladridos o miedos.',
    img: 'https://images.unsplash.com/photo-1516685018646-549d3b8b5d3b?auto=format&fit=crop&w=1200&q=60',
    supplier_url: 'https://sentrypetcare.com/product/sentry-behavior-and-calming-diffuser-for-dogs-1-5-ounce/'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <header className="max-w-6xl mx-auto flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">PetCalma</h1>
      </header>
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map(p => (
          <div key={p.handle} className="bg-white rounded-xl shadow p-4">
            <img src={p.img} alt={p.title} className="h-48 w-full object-cover rounded-md" />
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{p.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-lg font-bold">€{p.price}</div>
              </div>
              <a className="px-4 py-2 bg-amber-500 text-white rounded-md text-center" href={p.supplier_url} target="_blank" rel="noreferrer">Ver proveedor</a>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
