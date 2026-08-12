const fs = require('fs');
const path = require('path');

const hizmetlerPath = path.join(__dirname, 'src/app/hizmetler/page.tsx');
let hizmetlerContent = fs.readFileSync(hizmetlerPath, 'utf8');

const newMenuData = `const menuData = [
  {
    title: "SAÇ TASARIMI",
    description: "Profesyonel saç kesimi, renklendirme ve bakım hizmetleriyle hayalinizdeki görünüme kavuşun.",
    image: "/beauty/beauty_salon_story_1786276217076.jpg",
    items: [
      { name: "Saç Kesimi", price: "Detaylı Bilgi Alın" },
      { name: "Fön", price: "Detaylı Bilgi Alın" },
      { name: "Boya", price: "Detaylı Bilgi Alın" },
      { name: "Röfle / Ombre", price: "Detaylı Bilgi Alın" },
      { name: "Keratin Bakımı", price: "Detaylı Bilgi Alın" }
    ]
  },
  {
    title: "PROTEZ TIRNAK",
    description: "Tırnak yapınıza zarar vermeyen premium jeller kullanılarak yapılan kusursuz el işçiliği.",
    image: "/beauty/beauty_nails_1786272030225.jpg",
    reverse: true,
    items: [
      { name: "Protez Tırnak (Jel)", price: "2.150₺" },
      { name: "Jel Tırnak Bakım", price: "1.750₺" },
      { name: "Jel Güçlendirme", price: "1.750₺" },
      { name: "Jel Set Çıkarma", price: "800₺" },
      { name: "Akrilik Tırnak Çıkarma", price: "1.200₺" }
    ]
  },
  {
    title: "MANİKÜR & PEDİKÜR",
    description: "Gün boyu yorulan elleriniz ve ayaklarınız için lüks spa dokunuşlarının birleşimi.",
    image: "/beauty/beauty_pedicure.jpg",
    items: [
      { name: "Manikür", price: "950₺" },
      { name: "Manikür + Normal Oje", price: "1.150₺" },
      { name: "Pedikür", price: "1.450₺" },
      { name: "Pedikür + Normal Oje", price: "1.600₺" },
      { name: "Kalıcı Oje El", price: "1.550₺" },
      { name: "Kalıcı Oje Ayak", price: "1.900₺" }
    ]
  },
  {
    title: "İPEK KİRPİK",
    description: "Göz şeklinize ve yüz anatomisine en uygun altın oran tasarımlarla bakışlarınıza derinlik katıyoruz.",
    image: "/beauty/beauty_lashes_1786272039522.jpg",
    reverse: true,
    items: [
      { name: "İpek Kirpik", price: "Detaylı Bilgi Alın" },
      { name: "Kirpik Laminasyon", price: "1.750₺" },
      { name: "Kirpik Boyama", price: "600₺" },
      { name: "İpek Kirpik Bakımı", price: "Detaylı Bilgi Alın" }
    ]
  }
];`;

hizmetlerContent = hizmetlerContent.replace(/const menuData = \[([\s\S]*?)\];\s*export default function/m, `${newMenuData}\n\nexport default function`);
fs.writeFileSync(hizmetlerPath, hizmetlerContent, 'utf8');

const servicesPath = path.join(__dirname, 'src/themes/beauty/components/BeautyServices.tsx');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

const newServices = `const services = [
  {
    id: '01',
    title: 'Saç Tasarımı',
    desc: 'Profesyonel saç kesimi, renklendirme ve bakım hizmetleriyle hayalinizdeki görünüme kavuşun.',
    img: '/beauty/beauty_salon_story_1786276217076.jpg'
  },
  {
    id: '02',
    title: 'Protez Tırnak',
    desc: 'Tırnak yapınıza zarar vermeyen premium jeller kullanılarak yapılan kusursuz el işçiliği.',
    img: '/beauty/beauty_nails_1786272030225.jpg'
  },
  {
    id: '03',
    title: 'Manikür & Pedikür',
    desc: 'Gün boyu yorulan elleriniz ve ayaklarınız için lüks spa dokunuşlarının birleşimi.',
    img: '/beauty/beauty_pedicure.jpg'
  },
  {
    id: '04',
    title: 'İpek Kirpik',
    desc: 'Göz şeklinize en uygun altın oran tasarımlarla bakışlarınıza derinlik ve karakter katıyoruz.',
    img: '/beauty/beauty_lashes_1786272039522.jpg'
  }
];`;

servicesContent = servicesContent.replace(/const services = \[([\s\S]*?)\];\s*export function BeautyServices/m, `${newServices}\n\nexport function BeautyServices`);
// Update grid cols to handle 4 items nicely: from md:grid-cols-3 to md:grid-cols-2 lg:grid-cols-4
servicesContent = servicesContent.replace(/grid-cols-1 md:grid-cols-3/g, 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4');
fs.writeFileSync(servicesPath, servicesContent, 'utf8');

console.log("Services updated successfully.");
