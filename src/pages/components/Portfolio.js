import "./Portfolio.css";
import * as React from "react";

const imageColumn1 = [
  {
    url: "https://www.dropbox.com/scl/fi/40sigwrzrvr5q52g9qezd/IMG_1429.jpg?rlkey=ufgcphx7bdsj5p3584g86a2id&raw=1",
    alt: "Skyview, New York City",
    compressed: true,
  },
  {
    url: "https://www.dropbox.com/scl/fi/r6j2y1owqib4hveqoneyt/12EF6AC8-2116-4088-BBC3-EC4147D3DB28.jpg?rlkey=y8ay40vb1a51k4b3cgaejcw36&raw=1",
    alt: "Road, New York City",
    compressed: true,
  },
  {
    url: "https://www.dropbox.com/scl/fi/s1sk49fklcz91lc8lk096/Venice-sunset.jpeg?rlkey=5qhsvgwtp4bnzz1z1vfe32ao8&raw=1",
    alt: "Sunset, Venice",
  },
  {
    url: "https://www.dropbox.com/scl/fi/a0lel0d2bkgk21xy5mvav/8CE00B79-9434-433C-A9A8-8F1139149ACE.jpeg?rlkey=fgibqklmrewew3dhq676vx59w&raw=1",
    alt: "Chinatown, New York City",
  },
  {
    url: "https://www.dropbox.com/scl/fi/qp6lf5k72tvoy14bk64lo/IMG_5249-1.jpeg?rlkey=sux3erqxakktoma2oq14bigzf&raw=1",
    alt: "Side view of King's College Chapel, Cambridge",
  },
  {
    url: "https://www.dropbox.com/scl/fi/kfcu9mmgia6ctevedrssb/DSC08530.jpeg?rlkey=n0cuagfiycjwlyhjrm5bggugs&raw=1",
    alt: "Two goldfish swimming",
  },
  {
    url: "https://www.dropbox.com/scl/fi/twb6guprbrgnl0t9eeiob/DSC08527.jpg?rlkey=nnpp0p7svrlfswil439jl1u2p&raw=1",
    alt: "Purple jellyfish",
    compressed: true,
  },
  {
    url: "https://www.dropbox.com/scl/fi/1tqktb3cdd402bi2fouc0/IMG_7121.jpeg?rlkey=wx9omd73ia7h4j25fhye7l85n&raw=1",
    alt: "Purple spiral light, Kew Gardens",
  },
  {
    url: "https://www.dropbox.com/scl/fi/gji1fy4wbnvlqimmw95rk/IMG_4412.jpeg?rlkey=fx76bcw8nlspzgyikwkyfxawq&raw=1",
    alt: "Stained glass windows and pipe organ, La Sagrada Familia, Barcelona",
  },
  {
    url: "https://www.dropbox.com/scl/fi/lnhhwixtdugme6y8xht8m/DSC01000.jpg?rlkey=q80belnbs4s0mm0qunqp1p40m&raw=1",
    alt: "Union hacks applauding, Cambridge Union",
  },
  {
    url: "https://www.dropbox.com/scl/fi/fy0gx7wm38wtxkv63q35j/DSC00678.jpg?rlkey=yje3d2q5nnwd06v4nofa90ofm&raw=1",
    alt: "Man speaking at the Cambridgge Union, from behind",
  },
  {
    url: "https://www.dropbox.com/scl/fi/ev40ojgjd8lsmkx2mc1wu/DSC08769.jpeg?rlkey=cm6xz9qjxhtj7scnr0r1e0tgq&raw=1",
    alt: "Quinto da Regaleira, Portugal",
  },
];

const imageColumn2 = [
  {
    url: "https://www.dropbox.com/scl/fi/si715piysme945tikmrby/B0E4C7D5-2C77-46BD-80CF-970528D0DB29.jpg?rlkey=jg5uppryvcu3xbxbq22klqvy6&raw=1",
    alt: "View with Binoculars, New York City",
    compressed: true,
  },
  {
    url: "https://www.dropbox.com/scl/fi/vg17lf34sd8rzdbuht2ph/IMG_1469.jpeg?rlkey=7y8eyfy2eq0eri2eyx8et8jj3&raw=1",
    alt: "Pride flag from High Line, New York City",
  },
  {
    url: "https://www.dropbox.com/scl/fi/1taons9hznlo2wldndnlc/Street-with-car.jpeg?rlkey=r5caj0r80kyeri5epa09kucwu&raw=1",
    alt: "Car in St Petersburg",
  },
  {
    url: "https://www.dropbox.com/scl/fi/lx0l3rk5s0kmdgkpg8jnc/IMG_8791-1.jpeg?rlkey=6ombx02fbd5qa44g7uj8w3qwg&raw=1",
    alt: "View from Garrett Hostel Bridge, Cambridge",
  },
  {
    url: "https://www.dropbox.com/scl/fi/cwbx5bcl9g8imuwqod09u/IMG_7071.jpeg?rlkey=euf7jr90lx7zewcp128n48d6q&raw=1",
    alt: "Cambridge Christmas Lights, Botanical Gardens",
  },
  {
    url: "https://www.dropbox.com/scl/fi/j73srjpkb34kogj0ciseh/DSC09257.jpeg?rlkey=4d4irah5a9k2hbb3rwrxqpk3z&raw=1",
    alt: "Wasp on flower, Cambridge",
  },
  {
    url: "https://www.dropbox.com/scl/fi/y4nb4smxf1p27fta6mrww/IMG_0360.jpeg?rlkey=zpg8tecpiowksm06t8czmywz0&raw=1",
    alt: "Fireworks over the River Cam, St John's May Ball",
  },
  {
    url: "https://www.dropbox.com/scl/fi/ulgwctx96rnadyfhw8har/DSC09395.jpeg?rlkey=l7cogrbhd3xun4qm9nwxkcfhh&raw=1",
    alt: "Palestinian Embroidery Exhibit, Kettle's Yard",
  },
  {
    url: "https://www.dropbox.com/scl/fi/3t5c7f1zpjt8ep41mtrzq/DSC09291.jpeg?rlkey=q3fbh0a5326nfekvmdivi2w2o&raw=1",
    alt: "Flowers at St John's, Cambridge",
  },
  {
    url: "https://www.dropbox.com/scl/fi/0w0mkj2jat2317qljcnqh/DSC01009.jpg?rlkey=g2bdv78h78wgnba60eo232rua&raw=1",
    alt: "Headshot of a speaker at the Cambridge Union",
  },
  {
    url: "https://www.dropbox.com/scl/fi/a9pmxw3nano40lpy5dt9u/DSC00156.jpg?rlkey=lsbm8fz2rtyddxsuoagosq3o9&raw=1",
    alt: "Point of information, Cambridge Union",
    compressed: true,
  },
];

const imageColumn3 = [
  {
    url: "https://www.dropbox.com/scl/fi/3r9cswsh613a6tob3wqq4/IMG_1179.jpg?rlkey=bn887q2mlvqyq1mudyef4a67w&raw=1",
    alt: "New York City street, near Carnegie Hall",
    compressed: true,
  },
  {
    url: "https://www.dropbox.com/scl/fi/uiugijuv9zt99q9vmpkjo/IMG_1473.jpg?rlkey=v6sqxhtp2qcwtrvypwgq3i78w&raw=1",
    alt: "Emergency Call Box, New York City",
    compressed: true,
  },
  {
    url: "https://www.dropbox.com/scl/fi/0l0ut1iq70a6r980s39cc/IMG_2548.jpeg?rlkey=cmza8x1j3m5mjhea8s94ms7tm&raw=1",
    alt: "Harbour with boats, Sitges",
  },
  {
    url: "https://www.dropbox.com/scl/fi/ki2nv5b7o4fmbnaz5h8yx/IMG_5543.jpg?rlkey=ffyn245izg1glr9yfehmfpng6&raw=1",
    alt: "West Hub, Cambridge",
    compressed: true,
  },
  {
    url: "https://www.dropbox.com/scl/fi/tmd1vsr71uk9zl6hh9mci/IMG_3001.jpeg?rlkey=spvrcbbtdsk34vq5ryiwpq6k4&raw=1",
    alt: "Sunset over Christ's College, Cambridge",
  },
  {
    url: "https://www.dropbox.com/scl/fi/wsayjpt2t7jmd2k0vgqtt/DSC08529.jpeg?rlkey=3dbl1wqmt0kzbmvhpvp0gczy0&raw=1",
    alt: "Fish in an aquarium, Lisbon",
  },
  {
    url: "https://www.dropbox.com/scl/fi/nbptsee7pridzba9x4rpi/DSC08416.jpg?rlkey=72ilqxwii898awg6m87dslg32&raw=1",
    alt: "More fish",
    compressed: true,
  },
  {
    url: "https://www.dropbox.com/scl/fi/3izod1dq2sdspt08wrq5w/DSC09477.jpeg?rlkey=y3yh01y65olktdickhu57dqil&raw=1",
    alt: "Dome, Fitzwilliam Museum, Cambridge",
  },
  {
    url: "https://www.dropbox.com/scl/fi/wvs2fqs4rocplppegp7v2/IMG_0775.jpg?rlkey=ciilybjy1k3xe33krvhmwfq9d&raw=1",
    alt: "River Thames, London",
    compressed: true,
  },
  {
    url: "https://www.dropbox.com/scl/fi/0i0at2t41bor952zux6yy/DSC00718.jpg?rlkey=m7pfd1xa7umb9nad52xmvadmh&raw=1",
    alt: "Speaker at the Cambridge Union",
  },
  {
    url: "https://www.dropbox.com/scl/fi/99az41oowrdo4ecfqv6f6/DSC00896.jpg?rlkey=ripljlzddsx5jh6e1ocspwhl1&raw=1",
    alt: "Speaker gesturing at the Cambridge Union",
  },
  {
    url: "https://www.dropbox.com/scl/fi/u95zgtj0hvb42vwhknb51/DSC08744.jpeg?rlkey=h8es1ych83h0eikge939ukuiu&raw=1",
    alt: "Sailing boat on the Mediterranean, Portugal",
  },
];

const fullsizeimages = [
  {
    url: "https://www.dropbox.com/scl/fi/e73zyzx8gu59stw7p0x5u/DSC08527.jpeg?rlkey=uixfby1jd7xyzssuwf8cyeluy&raw=1",
    alt: "Purple jellyfish",
    compressed: false,
  },
  {
    url: "https://www.dropbox.com/scl/fi/966ut30oczjxgclnqaz1h/IMG_1179.jpeg?rlkey=aa7a52rt1juagxg6ownpi909w&raw=1",
    alt: "New York City street, near Carnegie Hall",
    compressed: false,
  },
  {
    url: "https://www.dropbox.com/scl/fi/enhsmo83x6m2gc3q5jfgj/DSC08416.jpeg?rlkey=ferfmc5klrk0vypelqptkace3&raw=1",
    alt: "More fish",
    compressed: false,
  },
  {
    url: "https://www.dropbox.com/scl/fi/zkrevh77uneuhduhno1kd/IMG_0775.jpeg?rlkey=bgeac2yrnfkf5scx44myymqof&raw=1",
    alt: "River Thames, London",
    compressed: false,
  },
  {
    url: "https://www.dropbox.com/scl/fi/rfymftn2aypmdwl5xvseu/B0E4C7D5-2C77-46BD-80CF-970528D0DB29.jpeg?rlkey=th5ukvxiw8x9nfh48zy7edwt7&raw=1",
    alt: "View with Binoculars, New York City",
    compressed: false,
  },
  {
    url: "https://www.dropbox.com/scl/fi/r3jefg0pw3d0dxp8vb45m/IMG_5543.jpeg?rlkey=4n6e0x2ngrdkz6pohq0zzmz3c&raw=1",
    alt: "West Hub, Cambridge",
    compressed: false,
  },
  {
    url: "https://www.dropbox.com/scl/fi/x6mw1se9izbqd90hvmybw/DSC00156.jpg?rlkey=8qjiet4dsnmcc2mm5jal4dcya&raw=1",
    alt: "Point of information, Cambridge Union",
    compressed: false,
  },
  {
    url: "https://www.dropbox.com/scl/fi/lwmb6tfzuavgff1f2xjs6/IMG_1473.jpeg?rlkey=xyuxqqpg8976h1qtscz32hmal&raw=1",
    alt: "Emergency Call Box, New York City",
    compressed: false,
  },
  {
    url: "https://www.dropbox.com/scl/fi/97pbjfgyuzoczv2h5ze10/IMG_1429.jpeg?rlkey=khql82gwn4zk0huaem59uw7oa&raw=1",
    alt: "Skyview, New York City",
    compressed: false,
  },
  {
    url: "https://www.dropbox.com/scl/fi/7ojtgu6hprzxobl9k3f0q/12EF6AC8-2116-4088-BBC3-EC4147D3DB28.jpeg?rlkey=x4ru5swnd8gyu8g6092ux83hk&raw=1",
    alt: "Road, New York City",
    compressed: false,
  },
];

export default function Portfolio() {
  return (
    <>
      <div className="row">
        <div className="column">
          {imageColumn1.map((image) => (
            <img src={image.url} alt={image.alt} key={image.alt} width="100%" />
          ))}
        </div>

        <div className="column">
          {imageColumn2.map((image) => (
            <img src={image.url} alt={image.alt} key={image.alt} width="100%" />
          ))}
        </div>

        <div className="column">
          {imageColumn3.map((image) => (
            <img src={image.url} alt={image.alt} key={image.alt} width="100%" />
          ))}
        </div>
      </div>
    </>
  );
}
