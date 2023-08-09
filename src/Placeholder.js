


const App = (props) => {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items/:itemId" element={<ItemDetails />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;