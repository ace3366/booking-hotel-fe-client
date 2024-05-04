import NavBar from "../../components/Nav/NavBar";
import Footer from "../../components/Footer/Footer";
import SearchPopUp from "../../components/Form/SearchPopUp";
import SearchList from "../../components/Display/Search/SearchList";
const Search = () => {
  return (
    <div>
      <div className="flex max-w-5xl mx-auto mt-12">
        <SearchPopUp className="flex-initial"></SearchPopUp>
        <SearchList className="flex-auto"></SearchList>
      </div>
    </div>
  );
};

export default Search;
export async function loader() {
  const response = await fetch(`${process.env.REACT_APP_API}/find-hotel`);
  const resData = await response.json();
  return resData;
}
