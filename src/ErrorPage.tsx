import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorPage = () => {
  const error: unknown = useRouteError()
  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    console.error(error)
    errorMessage = 'Unknown error'
  }

  return (
    <div id='errorpage'>
      <h1>404</h1>
      <p></p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  )
}

export default ErrorPage
