import SearchResults from "../../(components)/SearchResults"

function searchedMovie({ params }) {
  return (
    <div>
      <SearchResults word={params.search} />
    </div>
  )
}

export default searchedMovie
