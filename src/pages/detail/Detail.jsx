import Register from "../../components/Form/Register";
import DetailHotel from "../../components/Display/Detail/DetailHotel";
import NavBarItems from "../../components/Nav/NavBarItems";
import BookingForm from "../../components/Form/BookingForm";
const Detail = () => {
  return (
    <>
      <NavBarItems></NavBarItems>
      <div className="max-w-5xl mx-auto">
        <div>
          <DetailHotel></DetailHotel>
          <BookingForm className="mt-9"></BookingForm>
        </div>
        <Register></Register>
      </div>
    </>
  );
};

export default Detail;
export async function loader({ request, params }) {
  const response = await fetch(
    `${process.env.REACT_APP_API}/hotel-detail/${params.hotelId}`
  );
  return response;
}
