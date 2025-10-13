type Props = {};

function Header({}: Props) {
  return (
    <header className="bg-white border-b-2 border-b-gray-300 flex justify-evenly items-center fixed inset-0 w-full h-[10vh] py-2">
      <div>
        <span className="material-symbols-outlined aspect-square rounded-md bg-[#1c398e] p-2 text-white">
          code
        </span>
      </div>

      <div>
        <h1 className="text-2xl font-bold">App usando API's</h1>
        <p className="text-lg text-gray-800">Consumo de API'S con React</p>
      </div>
    </header>
  );
}

export default Header;
