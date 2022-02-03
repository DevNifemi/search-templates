import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { BASEURL } from './assets/constants';
import Header from './components/header/Header';
import Pagination from './components/pagination/Pagination';
import TemplateCard from './components/template-card/TemplateCard';



// page size for Pagination
let PageSize = 24


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  // get props of state from store 
  const  { searchInput, categoryFilter, orderFilter, dateFilter }  = useSelector((state) => state.search)


  // FETCH TEMPLATE DATA FOR USE 
  const getTemplatesData = async () => {
    let response = await axios.get(BASEURL);
    // set template to data state 
    setData(response.data)
    // disable loader 
    setLoading(false)
  }

  useEffect(() => {
    // CALL TEMPLATE DATA ON PAGE LOAD 
    getTemplatesData()
  }, []);


// SORT DATA BASED ON CATEGORY
const sortBaseOnCategory = useCallback((data) => {
  return data.filter((d) => {
    if (d.category[0].toLowerCase() === categoryFilter.toLowerCase()) {
      return d.category
    }
    else if (categoryFilter === "All") {
        return d
    }
   return null
});
}, [categoryFilter])


// SORT DATA BASED ON ORDEER OF ASCENDING / DESCENDING 
const sortedBasedOnOrder = useCallback((data) => {
  if (orderFilter === 'Ascending') {
    return data.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1)
  }
  else if (orderFilter === 'Descending') {
    return data.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : 1)
  }

  return data
}, [orderFilter]);



// SORT DATA BASED ON DATE OF ASCENDING / DESCENDING 
const sortedBasedOnDate = useCallback((data) => {
  if (dateFilter === 'Ascending') {
    return data.sort((a,b) => (Date.parse(b.created) - Date.parse(a.created)))
  }
  else if (dateFilter === 'Descending') {
    return data.sort((a,b) => (Date.parse(a.created) - Date.parse(b.created)))
  }

  return data
}, [ dateFilter]);


  
// SEARCH THROUGH TEMPLATES WITH INPUTS 
const sortBaseOnSearch = sortedBasedOnDate(sortedBasedOnOrder((sortBaseOnCategory(data)).filter(d => {
  return d.name.toLowerCase().includes(searchInput.toLowerCase());
})))


// render data based on pagination 
const currentTableData = useMemo(() => {
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  return sortBaseOnSearch.slice(firstPageIndex, lastPageIndex);
}, [currentPage, sortBaseOnSearch]);


  return (
    <div className="container">

        <Header /> 

        <div className='info d-flex'>
          <i className='bx bx-info-circle'/>
          <p className='t-center'> Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</p>       
        </div>
      
        <div className='template_section d-center'>
          <h4>{categoryFilter} Templates</h4>
          <p>{currentTableData.length} template(s)</p>
        </div>

      { loading ? <p className='search_error t-center loading'>Loading Templates ...</p> : (
      <>
        { currentTableData.length >= 1 ?
          <TemplateCard data={currentTableData} /> :
          <p className='search_error t-center'>Sorry! There is no template that matches your search</p>
        } 
      </> )
      }

      <div className='pagination_class_container'>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>

    </div>
  );
}

export default App;
