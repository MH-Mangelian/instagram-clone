const SuggestionProfile = () => {
  const FactitiousDataSuggestion = [
    {
      id: "101",
      username: "Elias Carlsson",
      userImg: "https://picsum.photos/id/200/1920/1280",
      bio: "i'm a farmer from Dallas",
    },
    {
      id: "102",
      username: "Ali Garner",
      userImg: "https://picsum.photos/id/201/5000/3333",
      bio: "i'm a full stack developer from Tehran",
    },
    {
      id: "103",
      username: "Diogo Tavares",
      userImg: "https://picsum.photos/id/203/4032/3024",
      bio: "i'am a globetrotter from madrid , i love music and nature",
    },
    {
      id: "104",
      username: "Tiago Gerken",
      userImg: "https://picsum.photos/id/204/5000/3333",
      bio: "i'am an engine driver from Buenos Aires",
    },
    {
      id: "105",
      username: "Philipp Reiner",
      userImg: "https://picsum.photos/id/206/2880/1800",
      bio: "i'm a farmer and have a big glasshouse , i from wellington",
    },
  ];

  return (
    <div className="mt-4 ml-12 mx-auto">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {FactitiousDataSuggestion.map((data) => (
        <div key={data.id} className="flex items-center justify-between">
          <img
            src={data.userImg}
            alt="instagram"
            className="w-14 h-14 rounded-full cursor-pointer border p-1.5 "
          />

          <div className="flex-1 mx-4">
            <h2 className="font-medium">{data.username}</h2>
            <h3 className="text-sm truncate text-gray-400">{data.bio}</h3>
          </div>

          <div className="flex">
            <button className=" text-blue-400 text-sm font-semibold">
              Follow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestionProfile;
