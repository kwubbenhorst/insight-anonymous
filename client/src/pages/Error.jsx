import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page" id="error-page">
      <img className="error-image" src="https://res.cloudinary.com/dsdsdv6zj/image/upload/v1711330347/error_wdhf7x.png"></img>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}