import {BiSearch} from 'react-icons/bi'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onChangeSearchInput,
    onChangeCategoryId,
    onChangeRatingId,
    onClickedClearFilters,
  } = props

  const onClickClearFilterButton = () => {
    onClickedClearFilters()
  }

  const ratingItem = ratingItems => {
    const {ratingId, imageUrl} = ratingItems

    const onClickRatingImage = () => {
      onChangeRatingId(ratingId)
    }

    return (
      <li className="ratingListItemContainer" key={ratingId}>
        <img
          src={imageUrl}
          alt={`rating ${ratingId}`}
          className="ratingImage"
          onClick={onClickRatingImage}
        />
        <p className="andUpPara">& up</p>
      </li>
    )
  }

  const renderFilters = () => {
    const {name} = props

    return (
      <ul className="ratingUnorderedListContainer">
        <h1 className="categoryHeading">Rating</h1>
        {ratingsList.map(eachRatingItem => ratingItem(eachRatingItem))}
      </ul>
    )
  }

  const categoryItem = eachCategory => {
    const {name, categoryId} = eachCategory

    const onClickCategoryItem = () => {
      onChangeCategoryId(categoryId)
    }

    return (
      <li
        className="categoryListItem"
        key={categoryId}
        onClick={onClickCategoryItem}
      >
        <p className="categoryName">{name}</p>
      </li>
    )
  }

  const renderCategory = () => (
    <ul className="categoryUnorderedListContainer">
      <h1 className="categoryHeading">Category</h1>
      {categoryOptions.map(eachCategory => categoryItem(eachCategory))}
    </ul>
  )

  const onKeyDownSearchInput = event => {
    if (event.key === 'Enter') {
      onChangeSearchInput(event.target.value)
    }
  }

  const renderSearchInput = () => (
    <div className="searchInputContainer">
      <input
        type="search"
        className="searchInputField"
        placeholder="Search"
        onKeyDown={onKeyDownSearchInput}
      />
      <BiSearch className="searchIcon" />
    </div>
  )

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategory()}
      {renderFilters()}
      <button
        type="button"
        className="clearFilterButton"
        onClick={onClickClearFilterButton}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
