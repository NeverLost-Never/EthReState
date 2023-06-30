import "./styles/_App.scss";

// importing components
import Header from "./components/Header/header";
import Search from "./components/Search/search";
import Cards from "./components/Cards/cards";
import Popular from "./components/Popular/popular";
import Testimonials from "./components/Testimonials/testimonials";
import Footer from "./components/Footer/footer";

const App = () => {
	return (
		<div className="App">
			<img
				className="landing-page-image"
				src={require("./images/landing_page_image.jpg")}
				alt=""
			/>
			<div className="shade"></div>

			<Header />
			<Search />
			<Cards />
			<Popular />
			<Testimonials />
			<Footer />
		</div>
	);
};

export default App;
