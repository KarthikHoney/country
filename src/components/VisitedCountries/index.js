import './index.css'

const VisitedCountries = props => {
  const {VisitedCountriesDetails, onClickRemoveButton} = props
  const {id, imageUrl, name} = VisitedCountriesDetails

  const onClickRemoveButtonId = () => {
    onClickRemoveButton(id)
  }

  return (
    <li className="VisitedCountriesContainer">
      <img src={imageUrl} alt="thumbnail" className="thumbnailPic" />
      <div className="name_and_button">
        <p>{name}</p>
        <button
          type="button"
          className="removeButton"
          onClick={onClickRemoveButtonId}
          data-testid="delete"
        >
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries
