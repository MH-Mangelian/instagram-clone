import React from 'react'
import Post from './Post'

const Posts = () => {

    const FactitiousDataPost = [
        {
            id: '101',
            username: 'Shyamanta Baruah',
            userImg: 'https://picsum.photos/id/30/1280/901',
            img: "https://picsum.photos/id/202/2392/1260",
            caption: "Main Access Road These types of roads are often responsible for connecting the forest road network (within the area where the wood leaves the forest) to the public roads. In some cases, the first-class main roads are also responsible for the transportation of wood and the communication between villages and cities and the transportation of agricultural products. First-class roads often have the same characteristics as public roads, that is, they are built in a two-way manner with good infrastructure and surface and sometimes asphalt. The general principle is that the first-class road should not be built inside the forest unless there is a necessity for its construction."

        },
        {
            id: '102',
            username: 'How-Soon Ngu',
            userImg: 'https://picsum.photos/id/31/3264/4912',
            img: "https://picsum.photos/id/189/2048/1536",
            caption: "Dew is a small drop of water that appears on plants during wet nights. The word Jaleh, which is used as a synonym for dew, in ancient times also meant hail in addition to dew. The reason for the appearance of dew is because the air often becomes cold at night, air molecules are saturated with water vapor particles earlier, and the two factors of relative saturation and coldness cause the water vapor particles to become tiny water droplets and fall on the surface of plants. . Dew makes the plants not lose their moisture and stay fresh."

        },
        {
            id: '103',
            username: 'Rodrigo Melo',
            userImg: 'https://picsum.photos/id/32/4032/3024',
            img: "https://picsum.photos/id/171/2048/1536",
            caption: "I wish I was the rain and I would wash the window of sadness and I would call out to everyone who is left behind the sad window of love, wipe the window of sadness, the weather is pleasant, listen to the rain, which has a message, stop being sad, life is short, open the window to the day New is on the way"

        },
    ]


  return (
    <div className=''>
        <div>
            {FactitiousDataPost.map((post)=>(
                <Post key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    imgUrl={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    </div>
  )
}

export default Posts