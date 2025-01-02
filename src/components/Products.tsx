import axios from "axios";
import { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

interface Recipe {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  rating: number;
  cuisine: string;
  cookTimeMinutes: number;
}

const Products = () => {
  const [data, setData] = useState<Recipe[]>([]);
  const [limit, setLimit] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(false);
  console.log(data);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/recipes?limit=${limit}`)
      .then((res) => {
        setData(res.data.recipes);
        setLoading(false);
      });
  }, [limit]);

  const loadMore = (): void => {
    setLimit(limit + 6);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-evenly gap-6 p-6">
        {data.map((item: Recipe) => (
        <div key={item.id} className="text-white flex flex-col rounded-lg w-[360px] bg-[#6e1e1e63] hover:shadow-lg hover:shadow-red-400 duration-300 ease-in">
            <img src={item.image} className="h-[300px] rounded-lg object-cover"/>
            <div className="p-4">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p className="font-semibold"><span className="text-white-500">difficulty:</span> <span className={`${item.difficulty === 'Easy' ? 'text-green-500' : 'text-red-600'}`}>{item.difficulty}</span></p>
                <Rating name="read-only" value={Math.floor(item.rating)} readOnly emptyIcon={<StarBorderIcon style={{ color: 'white' }} />} />
                <p><span>Country:</span> {item.cuisine}</p>
                <p><span>Time:</span> <span className="text-green-500">{item.cookTimeMinutes} minutes</span></p>
                <button className="bg-red-500 text-white px-3 mt-1 py-1 rounded-lg hover:bg-red-600 transition duration-300">More...</button>
            </div>
        </div>
        ))}
        
      </div>
      <div className="flex justify-center pb-4">
        <Button variant="contained" sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }} onClick={loadMore} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : "More"}
        </Button>
      </div>
    </div>
  );
};

export default Products;
