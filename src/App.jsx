import React from "react";
import {Header} from './components/Header';
import {Catalog} from './components/Catalog';
import {FilterPanel} from "./components/FilterPanel";
import { getHomes } from "./utills";
import './App.scss'

const limit = 6;

function App() {
   const [data, setData] = React.useState([]); // чистые данные, которые пришли с сервера
   const [term, setTerm] = React.useState(''); // поисковый запрос
   const [filtredData, setFiltredData] = React.useState([]); // отфильтрованные данные
   const [offset, setOffset] = React.useState(limit);

   const onShowMore = () => {
      setOffset((offset) => offset + limit);
   }

   React.useEffect(()=> {
      getHomes().then((d) => {
         setData(d);
         setFiltredData(d);
      });
   }, []);

   React.useEffect(() => {
      const str = term.toLowerCase().trim();
      
      if (str.length > 3) {
         setFiltredData(data.filter((item) => item.title.toLowerCase().indexOf(term) > -1));
      } else {
         setFiltredData(data);
      }
   }, [data, term]);
   
   return (
     <div className="app">
        <Header/>
        <FilterPanel value={term} onFilterChange={setTerm}/>
        <Catalog
          data={filtredData.slice(0, offset)} 
          onShowMore={onShowMore} 
          hasMore={offset < filtredData.length} 
        />
     </div>
   );
}

export default App;
