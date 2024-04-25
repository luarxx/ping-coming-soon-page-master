import illustration from "./../../assets/illustration-dashboard.png";

export function Body() {
  return (
    <div className="p-8 flex sm:justify-center">
      <img className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-4/12" src={illustration} alt="imagem" />
    </div>
  );
}