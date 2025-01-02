import DenseTable from "../components/Table"

const About = () => {
  return (
    <div className="container mx-auto py-[138px]">
      <div className="flex flex-col gap-3 text-white items-center justify-center mb-4">
        <h2 className="text-4xl font-bold text-center">Recipies information</h2>
        <p className="text-gray-200 w-[70%] text-center">Our recipies have a all kinds of ingridients in it, and these are the calories and other information about our recipies, to keep your health as good as possible, you may want to use it in a good way!</p>
      </div>
      <div className="w-[80%] mx-auto">
        <DenseTable/>
      </div>
    </div>
  )
}

export default About