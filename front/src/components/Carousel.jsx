import { Carousel } from 'react-carousel-minimal';

function Carou() {
  const data = [
    {
      image: '/assets/cake.png',
    },
    {
      image: '/assets/cake4.png',
      caption: 'cake',
    },
    {
      image: '/assets/cake2.png',
    },
    {
      image: '/assets/index.jpeg',
    },
    {
      image: 'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg',
    },
    {
      image: 'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg',
    },
    {
      image: 'https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx',
    },
    {
      image:
        'https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg',
    },
    {
      image: 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg',
    },
  ];

  const slideNumberStyle = {
    fontSize: '15px',
    color: '#012f6b',
  };
  return (
    <div className='carousel'>
      <div>
        <div
          style={{
            padding: '0 20px',
          }}>
          <Carousel
            data={data}
            time={7000}
            width='1000px'
            height='600px'
            radius='10px'
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition='bottom'
            automatic={true}
            dots={false}
            pauseIconColor='#012f6b'
            pauseIconSize='20px'
            slideBackgroundColor='grey'
            slideImageFit='cover'
            thumbnails={false}
            thumbnailWidth='100px'
            style={{
              textAlign: 'center',
              maxWidth: '1000px',
              maxHeight: '600px',
              margin: '40px auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carou;
