import { NavLink } from "react-router-dom"

const Service = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">Bekzod's Pizza Recipes Service</h1>
      <img src="https://png.pngtree.com/png-vector/20240614/ourmid/pngtree-tasty-veggie-pizza-png-image_12741409.png" className="mb-4 rounded" />
      <p className="text-lg text-center text-white max-w-2xl">
        Welcome to Bekzod's Pizza Recipes Service! Here you will find the best pizza recipes to make at home.
        Enjoy our delicious and easy-to-follow recipes that will make you a pizza master in no time!
      </p>
      <p className="text-lg text-center text-white max-w-2xl mt-4">
        Our recipes include a variety of options from classic Margherita to exotic toppings that will surprise your taste buds.
        Whether you are a beginner or an experienced cook, our step-by-step guides will help you create the perfect pizza every time.
      </p>
      <p className="text-lg text-center text-white max-w-2xl mt-4">
        Don't forget to check out our tips and tricks section for advice on how to get the perfect crust, the best cheese blends, and the freshest ingredients.
        Join our community of pizza lovers and start making amazing pizzas today!
      </p>
      <NavLink className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300 " to={"/"}>Read Recipies</NavLink>
    </div>
  )
}

export default Service