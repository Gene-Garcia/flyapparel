import logo from "./logo.png";
import hero from "./hero.png";
import japaneseStreetware from "./japanesestreetware.jpg";
import mens from "./mens.jpg";
import womens from "./womens.jpg";

function App() {
  return (
    <div className="">
      <div className="px-10 py-5 h-20 flex flex-row items-center justify-between">
        <div className="w-44">
          <img alt="Fly Apparel Logo" src={logo} className="object-contain" />
        </div>

        <div className="flex flex-row gap-8 font-sans font-semibold text-md text-gray-500">
          <a className="transition duration-200 hover:text-gray-800">
            PRODUCTS
          </a>
          <a className="transition duration-200 hover:text-gray-800">ABOUT</a>
          <a className="transition duration-200 hover:text-gray-800">COMPANY</a>
          <a className="transition duration-200 hover:text-gray-800">
            CUSTOMERS
          </a>
        </div>
      </div>

      {/* hero */}
      <div className="px-28 py-16 flex flex-row justify-between items-center gap-11">
        <div className="w-4/12 flex flex-col gap-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold font-serif text-gray-700 leading-snug">
              Philippine Premier Apparel Company
            </h1>

            <p className="text-2xl text-gray-500 font-regular">
              Choose happiness, choose clothes.
            </p>
          </div>

          <div className="flex flex-row gap-7">
            <button className="transition shadow-xl duration-200 bg-gray-800 text-gray-50 font-semibold text-md font-sans rounded-full px-6 py-2.5 hover:bg-gray-500 hover:text-white">
              Send Us an Inquiry
            </button>
            <button className="transition duration-200 text-gray-600 font-semibold text-md font-sans py-2.5 px-6 border-b-2 border-gray-400 rounded hover:text-gray-900 hover:border-gray-900">
              Our Products
            </button>
          </div>
        </div>

        <div className="w-8/12">
          <img
            alt="Clothes Hero"
            src={hero}
            className="object-contain h-4/5 mx-auto"
          />
        </div>
      </div>

      <div className="bg-gradient-to-l from-gray-400 via-gray-300 to-gray-200 flex flex-row items-center justify-center gap-20 py-10">
        <GroupAvatar groupImg={mens} groupName="Men's" />
        <GroupAvatar groupImg={womens} groupName="Women's" />
        <GroupAvatar
          groupImg={japaneseStreetware}
          groupName="Japanese Streetware"
        />
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}
export default App;

function GroupAvatar({ groupImg, groupName }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 object-contain">
      <div className="rounded-full h-40 w-40 overflow-hidden">
        <img
          src={groupImg}
          className="transform transition duration-300  shadow-xl hover:scale-110"
        />
      </div>

      <p className="font-semibold font-sans text-lg text-gray-700">
        {groupName}
      </p>
    </div>
  );
}
