import { useCounter } from "../useCounter.jsx";
import { useCart } from "../useCart";

const Xx99M1 = () => {
  const { addToCart } = useCart();
  const { count, increment, decrement } = useCounter();
  return (
    <div className="h-auto w-full flex flex-col p-5">
      <div className="flex gap-10 w-full h-[90vh] border border-black mt-20">
        <div className="rounded-lg bg-cover bg-center bg-no-repeat border  w-1/2 h-full bg-[url('/images/category-headphones/desktop/image-xx99-mark-one.jpg')]"></div>
        <div className="h-full w-1/2 flex flex-col justify-center items-start gap-5">
          <h2 className="text-sm tracking-[0.5rem] text-amber-500 ">
            NEW PRODUCT
          </h2>
          <h1 className="text-3xl font-bold">XX99 MARKPHONE I </h1>
          <p className="text-md text-gray-500">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <h1>$ 1750 </h1>
          <div className=" h-1/5 w-full flex gap-5 border border-black  items-center">
            <div className="h-1/2 w-1/3 gap-3 jutify-between border border-black flex">
              <button onClick={increment} className="w-1/3 bg-amber-500">
                +
              </button>{" "}
              <p>{count}</p>
              <button onClick={decrement} className="w-1/3 bg-amber-500">
                -
              </button>
            </div>
            <button
              className="h-1/2 w-1/2 border border-black bg-amber-500 active:bg-blue-600"
              onClick={() => {
                addToCart({
                  id: "xx99_1",
                  name: "Headphone XX99M1",
                  price: 1750,
                  quantity: count,
                });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xx99M1;
