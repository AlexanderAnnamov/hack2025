const places = [
  {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Yekaterinburg-overview-april-2015-russia-0001.jpg/330px-Yekaterinburg-overview-april-2015-russia-0001.jpg',
    title: 'На вершине Уральской столицы',
    info: '2-4 ч пешком · 4,3 км · 3 места'
  },
  {
    imageUrl: 'https://gge.ru/upload/iblock/c0c/p8tnpukw0hoidoj6zg8kepmvv71jm6kl/s1.png',
    title: 'Екатеринбургский арт-тур',
    info: '1-4 ч пешком · 2,3 км · 2 места'
  },
  {
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/367512/2a0000015e5327ff1620dda6975eff1532e3/L_height',
    title: 'Оперный театр',
    info: '1-3 ч пешком · 1,2 км · 1 место'
  },
  {
    imageUrl: 'https://img-fotki.yandex.ru/get/4415/30348152.100/0_585cd_927bbacb_orig',
    title: 'Центр города',
    info: '1-2 ч пешком · 1 км · 1 место'
  },
]

export const PlacesPage = () => {
  return <>{places.map(place => {
    return <div style={{width: '100%', borderRadius: 8, overflow: 'hidden'}}>
      <img style={{width: '100%', padding: '20px 20px 0',}} src={place.imageUrl} alt=""/>
      <p style={{padding: '8px 20px 0', fontSize: 18, fontWeight: 600 }}>{place.title}</p>
      <p style={{padding: '8px 20px 0', color: '#808080',fontSize: 16 }}>{place.info}</p>
    </div>
  })}</>
}