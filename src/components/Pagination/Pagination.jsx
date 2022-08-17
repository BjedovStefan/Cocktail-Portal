import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

const nextPage = () => {
  if(currentPage !== nPages) setCurrentPage(currentPage + 1)
}
const prevPage = () => {
  if(currentPage !== 1) setCurrentPage(currentPage - 1)
}

return (
    <nav className='pagination-wrapper'>
        <ul className='pagination'>
            <li className="page-item">
                <a className="page-link"
                    onClick={prevPage}
                    href='#'>
                    Prev
                </a>
            </li>
            {pageNumbers.map(pageNum => (
                <li key={pageNum}
                    className= {`page-item ${currentPage == pageNum ? 'active' : ''} `} >
                    <a onClick={() => setCurrentPage(pageNum)}
                        className='page-link'
                        href='#'>
                        {pageNum}
                    </a>
                </li>
            ))}
            <li className="page-item">
                <a className="page-link"
                    onClick={nextPage}
                    href='#'>
                    Next
                </a>
            </li>
        </ul>
    </nav>
    )
}

export default Pagination