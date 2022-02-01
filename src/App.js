import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import TemplateCard from './components/template-card/TemplateCard';

const App = () => {
  const data = [
  {
    name: "Badmusi Membership Form Template",
    created: "2021-11-04T16:26:44.666569",
    category: "Health",
    description: "Testing template",
    link: "",
    },
  {
    name: "Alumni Membership Form Template",
    created: "2000-12-04T16:26:44.666569",
    category: 'Education',
    description: "Sample scholarship template",
    link: "https://formpl.us",
    },
    {
      name: "Zlumni Membership Form Template",
      created: "2010-12-04T16:26:44.666569",
      category: 'E-commerce',
      description: "Sample scholarship template",
      link: "https://formpl.us",
     },
     {
      name: "Imranni Membership Form Template",
      created: "2020-02-04T16:20:44.222378",
      category: 'Education',
      description: "Sample scholarship template",
      link: "https://formpl.us",
     }
  ]

  const  { searchInput, categoryFilter, orderFilter, dateFilter }  = useSelector((state) => state.search)


// SORT DATA BASED ON CATEGORY
const sortBaseOnCategory = (data) => {
    return data.filter((d) => {
        if (d.category.toLowerCase() === categoryFilter.toLowerCase()) {
          return d.category
        }
        else if (categoryFilter === "All") {
            return d
        }
       return null
    });
}

// SORT DATA BASED ON ORDEER OF ASCENDING / DESCENDING 
const sortedBasedOnOrder = (data) => {
  if (orderFilter === 'Ascending') {
    return data.sort((a,b) => (a.name > b.name) ? 1 : -1)
  }
  else if (orderFilter === 'Descending') {
    return data.sort((a,b) => (a.name > b.name) ? -1 : 1)
  }

  return data
}

// SORT DATA BASED ON DATE OF ASCENDING / DESCENDING 
const sortedBasedOnDate = (data) => {
  if (dateFilter === 'Ascending') {
    return data.sort((a,b) => (Date.parse(b.created) - Date.parse(a.created)))
  }
  else if (dateFilter === 'Descending') {
    return data.sort((a,b) => (Date.parse(a.created) - Date.parse(b.created)))
  }

  return data
}


// SEARCH THROUGH TEMPLATES WITH INPUTS 
const sortBaseOnSearch = sortedBasedOnDate(sortedBasedOnOrder((sortBaseOnCategory(data)).filter(d => {
  return d.name.toLowerCase().includes(searchInput.toLowerCase());
})))



  return (
    <div className="container">

        <Header /> 

        <div className='info d-flex'>
          <i className='bx bx-info-circle'/>
          <p className='t-center'> Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</p>       
        </div>
      
        <div className='template_section d-center'>
          <h4>{categoryFilter} Templates</h4>
          <p>{sortBaseOnSearch.length} template(s)</p>
        </div>

       { sortBaseOnSearch.length >= 1 ?
       <TemplateCard data={sortBaseOnSearch} /> :
        <p className='search_error t-center'>Sorry! There is no template that matches your search</p>
      }
    </div>
  );
}

export default App;
