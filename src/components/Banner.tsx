
const Banner = () => {
  return (
    <div className="flex justify-center items-center py-36 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 text-white`}>Delicious Pizza</h1>
          <p className={`text-lg md:text-xl mb-6 text-gray-300`}>
            Enjoy the best pizza in town with fresh ingredients and a variety of flavors. Bekzod pizza recipes are accepted as one of the best recipes in the entire world, even Donald Trump approves this objective fact!
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300">
            Learn Now
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src="https://i.pinimg.com/originals/de/05/5d/de055d6242a6db341371f84079330fcb.png" className="w-full rounded-lg h-[600px] object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Banner;