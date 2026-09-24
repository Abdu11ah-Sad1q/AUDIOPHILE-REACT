import { useCart } from "../useCart";
import { useCounter } from "../useCounter.jsx";
const Zx7 = () => {
  const { count, increment, decrement } = useCounter();
  const { addToCart } = useCart();
  return (
    <div className="h-auto w-full flex flex-col p-5">
      <div className="flex gap-10 w-full h-[90vh] border border-black mt-20">
        <div className="rounded-lg bg-cover bg-center bg-no-repeat border  w-1/2 h-full bg-[url('/images/category-speakers/desktop/image-zx7.jpg')]"></div>
        <div className="h-full w-1/2 flex flex-col justify-center items-start gap-5">
          <h2 className="text-sm tracking-[0.5rem] text-amber-500 ">
            NEW PRODUCT
          </h2>
          <h1 className="text-3xl font-bold">ZX7 SPEAKER</h1>
          <p className="text-md text-gray-500">
            Stream high quality sound wirelessly with minimal to no loss. The
            ZX7 speaker uses high-end audiophile components that represents the
            top of the line powered speakers for home or studio use.
          </p>
          <h1>$ 4500</h1>
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
              className="h-1/2 w-1/2 border border-black bg-amber-500 active:bg-blue-500"
              onClick={() => {
                addToCart({
                  id: "zx7",
                  name: "Speaker ZX7",
                  price: 4500,
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

export default Zx7;
