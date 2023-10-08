import { createBrowserRouter } from "react-router-dom";


import Application from "src/Application";
import ErrorPage from "src/pages/ErrorPage/ErrorPage";
import MainPage from "src/pages/MainPage/MainPage";



const router = createBrowserRouter([
	{
		element: <Application />,
		children: [
			{
				path: "/",
				element: <MainPage />,
				errorElement: <ErrorPage />,
			},
			// {
			// 	path: "/restaurant/:id",
			// 	element: <RestaurantMenu />,
			// 	errorElement: <Error />,
			// },
			// {
			// 	path: "/cart",
			// 	element: <Cart />,
			// 	errorElement: <Error />,
			// },
		]
	},
]);

export default router