import "./ResultsList.css"


const SearchResultsList = ({results = []}) => {
  return (
    <div className="resultList">
        {results.map((results,id)=>{
            return <div key={id}>{results.name}</div>
        })}
        
    </div>
  )
}

export default SearchResultsList