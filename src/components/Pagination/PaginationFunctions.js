const loadsPerPage = (currentPage, postsPerPage, loads) => {
  const indexOfLastLoad = currentPage * postsPerPage;
  const indexOfFirstLoad = indexOfLastLoad - postsPerPage;
  const currentloades = loads.slice(indexOfFirstLoad, indexOfLastLoad);
  return currentloades;
};

export { loadsPerPage };
