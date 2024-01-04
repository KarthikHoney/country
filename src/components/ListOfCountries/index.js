import './index.css'

const ListOfCountries = props => {
  const {ListOfCountriesDetails, onClickVisitButton} = props
  const {id, name, isVisited} = ListOfCountriesDetails

  const ButtonName = isVisited ? 'Visited' : 'Visit'
  const buttonCss = isVisited ? '' : 'blueButton'

  const onClickVisitButtonId = () => {
    onClickVisitButton(id)
  }

  return (
    <li className="ListOfCountriesContainer">
      <p>{name}</p>
      {isVisited ? (
        <p>{ButtonName}</p>
      ) : (
        <button
          type="button"
          className={buttonCss}
          onClick={onClickVisitButtonId}
        >
          {ButtonName}
        </button>
      )}
    </li>
  )
}
export default ListOfCountries
